import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      to,
      businessName,
      rating,
      review,
      reply,
      category,
    } = body;

    if (!to || !review || !reply) {
      return NextResponse.json(
        { error: "Ontvanger, review en reply zijn verplicht." },
        { status: 400 }
      );
    }

    const subject =
      category === "gevoelig"
        ? `Review vraagt jouw goedkeuring – ${businessName || "Replyn"}`
        : `Nieuwe reviewreactie klaar – ${businessName || "Replyn"}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 24px; color: #111827;">
        <h2 style="margin-bottom: 8px;">Nieuwe review vraagt jouw aandacht</h2>
        <p style="color: #4B5563; line-height: 1.7;">
          Er is een review binnengekomen die we aanraden om eerst even te controleren.
        </p>

        <div style="margin-top: 24px; background: #F8F1E7; padding: 20px; border-radius: 16px;">
          <p style="margin: 0 0 8px 0; font-size: 14px; color: #6B7280;">Ontvangen review (${rating}/5)</p>
          <p style="margin: 0; line-height: 1.8;">${review}</p>
        </div>

        <div style="margin-top: 20px; background: #111827; color: white; padding: 20px; border-radius: 16px;">
          <p style="margin: 0 0 8px 0; font-size: 14px; color: #D1D5DB;">Voorgestelde reactie</p>
          <p style="margin: 0; line-height: 1.8;">${reply}</p>
        </div>

        <p style="margin-top: 24px; color: #4B5563; line-height: 1.7;">
          Je kunt deze reactie handmatig overnemen of aanpassen.
        </p>

        <p style="margin-top: 24px; font-size: 14px; color: #9CA3AF;">
          Verzonden via Replyn
        </p>
      </div>
    `;

    const data = await resend.emails.send({
      from: "Replyn <onboarding@resend.dev>",
      to,
      subject,
      html,
    });

    console.log("MAIL RESPONSE:", data);

    if (data.error) {
      return NextResponse.json(
        { error: data.error.message || "Mail versturen mislukt." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("MAIL ERROR:", error);
    return NextResponse.json(
      { error: error?.message || "Mail versturen mislukt." },
      { status: 500 }
    );
  }
}