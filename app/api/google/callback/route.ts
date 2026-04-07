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

    const oauth2 = google.oauth2({
      auth: oauth2Client,
      version: "v2",
    });

    const me = await oauth2.userinfo.get();

    const { error } = await supabaseAdmin.from("google_connections").insert([
      {
        google_account_email: me.data.email || "",
        account_name: me.data.name || "",
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
    return NextResponse.json(
      { error: error?.message || "OAuth callback mislukt." },
      { status: 500 }
    );
  }
}