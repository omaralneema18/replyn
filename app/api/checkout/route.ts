import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

function getPriceId(plan: string, billing: string, locations: string) {
  const map: Record<string, string | undefined> = {
    "reply_monthly_single": process.env.STRIPE_PRICE_REPLY_MONTHLY_SINGLE,
    "reply_yearly_single": process.env.STRIPE_PRICE_REPLY_YEARLY_SINGLE,
    "reply_monthly_multi": process.env.STRIPE_PRICE_REPLY_MONTHLY_MULTI,
    "reply_yearly_multi": process.env.STRIPE_PRICE_REPLY_YEARLY_MULTI,
    "grow_monthly_single": process.env.STRIPE_PRICE_GROW_MONTHLY_SINGLE,
    "grow_yearly_single": process.env.STRIPE_PRICE_GROW_YEARLY_SINGLE,
    "grow_monthly_multi": process.env.STRIPE_PRICE_GROW_MONTHLY_MULTI,
    "grow_yearly_multi": process.env.STRIPE_PRICE_GROW_YEARLY_MULTI,
  };

  return map[`${plan}_${billing}_${locations}`];
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { plan, billing, locations, customer } = body;

    const priceId = getPriceId(plan, billing, locations);

    if (!priceId) {
      return NextResponse.json(
        { error: `Geen geldige prijs gevonden voor ${plan}_${billing}_${locations}` },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const name = customer?.name || "";
    const email = customer?.email || "";
    const company = customer?.company || "";
    const phone = customer?.phone || "";
    const notes = customer?.notes || "";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer_email: email || undefined,
      client_reference_id: company || email || undefined,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: 14,
        metadata: {
          plan,
          billing,
          locations,
          customer_name: name,
          customer_email: email,
          company,
          phone,
          notes,
        },
      },
      metadata: {
        plan,
        billing,
        locations,
        customer_name: name,
        customer_email: email,
        company,
        phone,
        notes,
      },
      success_url: `${baseUrl}/getting-started?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/signup?plan=${plan}&billing=${billing}&locations=${locations}`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("STRIPE CHECKOUT ERROR:");
    console.error(error);

    return NextResponse.json(
      {
        error:
          error?.message || "Checkout aanmaken mislukt.",
      },
      { status: 500 }
    );
  }
}