import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const resendKey = process.env.RESEND_API_KEY?.trim();
    const receiver = process.env.ONBOARDING_RECEIVER_EMAIL?.trim();

    if (!resendKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY ontbreekt in .env.local" },
        { status: 500 }
      );
    }

    if (!receiver) {
      return NextResponse.json(
        { error: "ONBOARDING_RECEIVER_EMAIL ontbreekt in .env.local" },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    const {
      businessName,
      googleName,
      industry,
      locations,
      notificationEmail,
      styleNotes,
    } = body;

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: receiver,
      subject: `Nieuwe onboarding: ${businessName || "Onbekend bedrijf"}`,
      html: `
        <h2>Nieuwe onboarding ontvangen</h2>
        <p><strong>Bedrijfsnaam:</strong> ${businessName || "-"}</p>
        <p><strong>Google naam:</strong> ${googleName || "-"}</p>
        <p><strong>Branche:</strong> ${industry || "-"}</p>
        <p><strong>Aantal locaties:</strong> ${locations || "-"}</p>
        <p><strong>E-mail voor meldingen:</strong> ${notificationEmail || "-"}</p>
        <p><strong>Stijlvoorkeuren:</strong><br/>${styleNotes || "-"}</p>
      `,
    });

    if ((result as any)?.error) {
      return NextResponse.json(
        { error: "Mail versturen mislukt." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("ONBOARDING API ERROR:", error);
    return NextResponse.json(
      { error: error?.message || "Onboarding verwerken mislukt." },
      { status: 500 }
    );
  }
}