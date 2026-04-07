import { google } from "googleapis";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const { data: connection, error } = await supabaseAdmin
      .from("google_connections")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (error || !connection) {
      return NextResponse.json(
        { error: "Geen Google connectie gevonden." },
        { status: 404 }
      );
    }

    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oauth2Client.setCredentials({
      access_token: connection.access_token,
      refresh_token: connection.refresh_token,
      expiry_date: connection.expiry_date || undefined,
    });

    const accountRes = await fetch(
      "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
      {
        headers: {
          Authorization: `Bearer ${connection.access_token}`,
        },
      }
    );

    const accountsData = await accountRes.json();

    if (!accountRes.ok) {
      return NextResponse.json(
        { error: accountsData.error?.message || "Accounts ophalen mislukt." },
        { status: 500 }
      );
    }

    const accounts = accountsData.accounts || [];

    if (!accounts.length) {
      return NextResponse.json({ accounts: [], locations: [] });
    }

    const primaryAccount = accounts[0];
    const accountName = primaryAccount.name; // bv accounts/123456789

    const locationsRes = await fetch(
      `https://mybusinessbusinessinformation.googleapis.com/v1/${accountName}/locations?readMask=name,title,storeCode,websiteUri,metadata`,
      {
        headers: {
          Authorization: `Bearer ${connection.access_token}`,
        },
      }
    );

    const locationsData = await locationsRes.json();

    if (!locationsRes.ok) {
      return NextResponse.json(
        { error: locationsData.error?.message || "Locaties ophalen mislukt." },
        { status: 500 }
      );
    }

    const locations = locationsData.locations || [];

    await supabaseAdmin
      .from("google_connections")
      .update({
        google_account_resource: accountName,
        location_count: locations.length,
      })
      .eq("id", connection.id);

    return NextResponse.json({
      accounts,
      locations,
    });
  } catch (error: any) {
    console.error("GOOGLE LOCATIONS ERROR:", error);
    return NextResponse.json(
      { error: error?.message || "Google locaties ophalen mislukt." },
      { status: 500 }
    );
  }
}