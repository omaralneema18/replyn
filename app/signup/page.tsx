"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const plan = searchParams.get("plan") || "reply";
  const billing = searchParams.get("billing") || "yearly";
  const locations = searchParams.get("locations") || "single";

  const planLabel =
    plan === "grow" ? "Grow" : plan === "trial" ? "Gratis proefperiode" : "Reply";

  const billingLabel = billing === "monthly" ? "Maandelijks" : "12 maanden";
  const locationLabel = locations === "multi" ? "Tot 5 locaties" : "1 locatie";

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const actualPlan = plan === "trial" ? "reply" : plan;

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: actualPlan,
          billing,
          locations,
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      alert(data.error || "Er ging iets mis.");
    } catch (error) {
      console.error(error);
      alert("Er ging iets mis bij het starten van checkout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F1E7] px-6 py-12 text-[#1F2937]">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-[#6B7280] hover:text-[#111827]">
          ← Terug naar home
        </a>

        <div className="mt-6 rounded-[32px] bg-white p-8 shadow-xl shadow-black/5 ring-1 ring-black/5 md:p-10">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
            Aanmelden
          </div>
          <h1 className="mt-3 text-4xl font-semibold text-[#111827]">
            Je hebt gekozen voor {planLabel}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4B5563]">
            Controleer je keuze en ga daarna verder naar betaling.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-[#FFF7ED] p-4">
              <div className="text-sm text-[#9A3412]">Pakket</div>
              <div className="mt-1 text-lg font-semibold text-[#111827]">{planLabel}</div>
            </div>
            <div className="rounded-2xl bg-[#ECFDF5] p-4">
              <div className="text-sm text-[#047857]">Facturatie</div>
              <div className="mt-1 text-lg font-semibold text-[#111827]">{billingLabel}</div>
            </div>
            <div className="rounded-2xl bg-[#FEF2F2] p-4">
              <div className="text-sm text-[#B91C1C]">Locaties</div>
              <div className="mt-1 text-lg font-semibold text-[#111827]">{locationLabel}</div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCheckout}
            disabled={loading}
            className="mt-8 w-full rounded-2xl bg-[#111827] px-6 py-3 font-medium text-white hover:bg-black disabled:opacity-60"
          >
            {loading ? "Bezig..." : "Verder naar betaling"}
          </button>

          <div className="mt-6 rounded-2xl bg-[#F8F1E7] p-4 text-sm leading-7 text-[#4B5563]">
            Je start via Stripe Checkout. De 14 dagen gratis proefperiode wordt daar meegenomen.
          </div>
        </div>
      </div>
    </div>
  );
}