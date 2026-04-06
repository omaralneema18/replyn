import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("stripe-signature");

  if (!signature) {
    return new NextResponse("Geen stripe-signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const email =
      session.customer_details?.email ||
      session.customer_email ||
      null;

    const sessionId = session.id;

    if (email) {
      const { error } = await supabase
        .from("customers")
        .update({
          status: "paid",
          stripe_customer_email: email,
          stripe_session_id: sessionId,
        })
        .eq("email", email)
        .eq("status", "new");

      if (error) {
        console.error("Supabase update error:", error);
      }
    }
  }

  return NextResponse.json({ received: true });
}