import { google } from "googleapis";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Geen code ontvangen." }, { status: 400 });
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    let googleEmail = "";
    let googleName = "";

    if (tokens.id_token) {
      const ticket = await oauth2Client.verifyIdToken({
        idToken: tokens.id_token,
        audience: process.env.GOOGLE_CLIENT_ID!,
      });

      const payload = ticket.getPayload();

      googleEmail = payload?.email || "";
      googleName = payload?.name || "";
    }

    const { error } = await supabaseAdmin.from("google_connections").insert([
      {
        google_account_email: googleEmail,
        account_name: googleName,
        access_token: tokens.access_token || "",
        refresh_token: tokens.refresh_token || "",
        scope: tokens.scope || "",
        expiry_date: tokens.expiry_date || null,
      },
    ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.redirect(`${new URL(req.url).origin}/getting-started`);
  } catch (error: any) {
    console.error("GOOGLE CALLBACK ERROR:", error);
    return NextResponse.json(
      { error: error?.message || "OAuth callback mislukt." },
      { status: 500 }
    );
  }
}