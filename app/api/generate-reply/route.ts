import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { review, rating, styleNotes, businessName } = body;

    if (!review || !rating) {
      return NextResponse.json(
        { error: "Review en rating zijn verplicht." },
        { status: 400 }
      );
    }

    const prompt = `
Je bent een specialist in het schrijven van Nederlandse reacties op Google reviews voor bedrijven.

Bedrijf: ${businessName || "Onbekend bedrijf"}
Sterren: ${rating}/5
Stijlvoorkeuren: ${styleNotes || "Vriendelijk, professioneel, niet te lang."}

Jouw taak:
1. Bepaal de categorie van de review:
- "positief"
- "neutraal"
- "gevoelig"

2. Bepaal of deze reactie veilig automatisch geplaatst kan worden:
- true = veilig automatisch plaatsen
- false = liever eerst als concept controleren

3. Schrijf een sterke reactie in het Nederlands.

Belangrijke regels:
- Klink menselijk, warm en professioneel
- Geen emoji
- Geen overdreven marketingtaal
- Geen loze beloftes
- Bij negatieve of gevoelige reviews: empathisch, rustig, professioneel
- Bij positieve reviews: dankbaar en persoonlijk
- Maximaal 120 woorden
- Noem het bedrijf alleen als dat natuurlijk klinkt
- Geef GEEN uitleg buiten de JSON

Belangrijke beslisregels:
- 5 of 4 sterren + normale tekst = meestal "positief" en autopost true
- 3 sterren = vaak "neutraal", autopost alleen true als tekst niet gevoelig is
- 1 of 2 sterren = meestal "gevoelig", autopost false
- Als er woorden staan zoals klacht, teleurgesteld, slecht, onduidelijk, nooit meer, boos, frustrerend, lang wachten, onbeschoft, dan eerder "gevoelig"
- Als er mogelijk reputatierisico of conflict zit: autopost false

Review:
"""${review}"""

Geef alleen geldige JSON terug in exact dit formaat:
{
  "category": "positief",
  "autopost": true,
  "reply": "..."
}
`;

    const response = await client.responses.create({
      model: "gpt-5.4",
      input: prompt,
    });

    const text =
      response.output_text?.trim() ||
      '{"category":"gevoelig","autopost":false,"reply":"Er kon geen reactie worden gegenereerd."}';

    let parsed;

    try {
      parsed = JSON.parse(text);
    } catch {
      return NextResponse.json({
        category: "gevoelig",
        autopost: false,
        reply: "Bedankt voor je review. We nemen je feedback serieus en kijken graag hoe we dit netjes kunnen oppakken.",
      });
    }

    return NextResponse.json({
      category: parsed.category || "gevoelig",
      autopost:
        typeof parsed.autopost === "boolean" ? parsed.autopost : false,
      reply:
        parsed.reply ||
        "Bedankt voor je review. We nemen je feedback serieus en kijken graag hoe we dit netjes kunnen oppakken.",
    });
  } catch (error: any) {
    console.error("OPENAI ERROR:", error);
    return NextResponse.json(
      { error: error?.message || "Genereren mislukt." },
      { status: 500 }
    );
  }
}