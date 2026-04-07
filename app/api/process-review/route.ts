import OpenAI from "openai";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const resend = new Resend(process.env.RESEND_API_KEY);

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      businessName,
      rating,
      review,
      styleNotes,
      notificationEmail,
    } = body;

    if (!businessName || !rating || !review) {
      return NextResponse.json(
        { error: "businessName, rating en review zijn verplicht." },
        { status: 400 }
      );
    }

    const prompt = `
Je bent een specialist in Nederlandse Google reviewreacties.

Bedrijf: ${businessName}
Sterren: ${rating}/5
Stijlvoorkeuren: ${styleNotes || "Vriendelijk, professioneel, niet te lang, geen emoji."}

Taken:
1. Bepaal category: positief, neutraal of gevoelig
2. Bepaal autopost: true of false
3. Schrijf een sterke reactie in het Nederlands

Regels:
- Klink menselijk, warm en professioneel
- Geen emoji
- Geen overdreven marketingtaal
- Geen loze beloftes
- 4-5 sterren + normale tekst => meestal positief, autopost true
- 3 sterren => vaak neutraal
- 1-2 sterren of duidelijke klacht => gevoelig, autopost false
- Max 120 woorden
- Alleen geldige JSON teruggeven

Review:
"""${review}"""

Geef exact dit formaat terug:
{
  "category": "positief",
  "autopost": true,
  "reply": "..."
}
`;

    const aiResponse = await openai.responses.create({
      model: "gpt-5.4",
      input: prompt,
    });

    const text =
      aiResponse.output_text?.trim() ||
      '{"category":"gevoelig","autopost":false,"reply":"Bedankt voor je review. We nemen je feedback serieus en kijken graag hoe we dit netjes kunnen oppakken."}';

    let parsed: {
      category?: string;
      autopost?: boolean;
      reply?: string;
    };

    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = {
        category: "gevoelig",
        autopost: false,
        reply:
          "Bedankt voor je review. We nemen je feedback serieus en kijken graag hoe we dit netjes kunnen oppakken.",
      };
    }

    const category = parsed.category || "gevoelig";
    const autopost =
      typeof parsed.autopost === "boolean" ? parsed.autopost : false;
    const reply =
      parsed.reply ||
      "Bedankt voor je review. We nemen je feedback serieus en kijken graag hoe we dit netjes kunnen oppakken.";

    const { error: saveError } = await supabaseAdmin.from("review_replies").insert([
      {
        business_name: businessName,
        rating: Number(rating),
        review_text: review,
        style_notes: styleNotes || "",
        category,
        autopost,
        reply_text: reply,
        notification_email: notificationEmail || "",
        status: autopost ? "ready_to_post" : "concept",
      },
    ]);

    if (saveError) {
      return NextResponse.json(
        { error: saveError.message },
        { status: 500 }
      );
    }

    let mailSent = false;

    if (!autopost && notificationEmail) {
      const mail = await resend.emails.send({
        from: "Replyn <welkom@replyn.nl>",
        to: notificationEmail,
        subject: `Review vraagt jouw goedkeuring – ${businessName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 24px; color: #111827;">
            <h2>Nieuwe review vraagt jouw aandacht</h2>
            <p style="color:#4B5563; line-height:1.7;">
              Er is een gevoelige review binnengekomen. Daarom hebben we een reactie als concept klaargezet.
            </p>

            <div style="margin-top:24px; background:#F8F1E7; padding:20px; border-radius:16px;">
              <p style="margin:0 0 8px 0; font-size:14px; color:#6B7280;">Ontvangen review (${rating}/5)</p>
              <p style="margin:0; line-height:1.8;">${review}</p>
            </div>

            <div style="margin-top:20px; background:#111827; color:white; padding:20px; border-radius:16px;">
              <p style="margin:0 0 8px 0; font-size:14px; color:#D1D5DB;">Voorgestelde reactie</p>
              <p style="margin:0; line-height:1.8;">${reply}</p>
            </div>

            <p style="margin-top:24px; color:#4B5563; line-height:1.7;">
              Je kunt deze reactie handmatig overnemen of aanpassen.
            </p>
          </div>
        `,
      });

      mailSent = !mail.error;
    }

    return NextResponse.json({
      success: true,
      category,
      autopost,
      reply,
      mailSent,
    });
  } catch (error: any) {
    console.error("PROCESS REVIEW ERROR:", error);
    return NextResponse.json(
      { error: error?.message || "Review verwerken mislukt." },
      { status: 500 }
    );
  }
}