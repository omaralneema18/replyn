"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SignupPage() {
  const searchParams = useSearchParams();

  const plan = searchParams.get("plan") || "reply";
  const billing = searchParams.get("billing") || "yearly";
  const locations = searchParams.get("locations") || "single";

  const planLabel =
    plan === "grow" ? "Grow" : plan === "trial" ? "Gratis proefperiode" : "Reply";

  const billingLabel = billing === "monthly" ? "Maandelijks" : "Jaarlijks";
  const locationLabel = locations === "multi" ? "Tot 5 locaties" : "1 locatie";

  return (
    <div className="min-h-screen bg-[#F8F1E7] px-6 py-12 text-[#1F2937]">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-[#6B7280] hover:text-[#111827]">
          ← Terug naar home
        </Link>

        <div className="mt-6 rounded-[32px] bg-white p-8 shadow-xl shadow-black/5 ring-1 ring-black/5 md:p-10">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
            Aanmelden
          </div>
          <h1 className="mt-3 text-4xl font-semibold text-[#111827]">
            Je hebt gekozen voor {planLabel}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4B5563]">
            Dit is je aanmeldomgeving. Hierna maken we de volgende stap: account aanmaken en daarna de betaalomgeving koppelen.
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

          <form className="mt-8 space-y-4">
            <div>
              <label className="text-sm font-medium text-[#111827]">Naam</label>
              <input
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#F97316]"
                placeholder="Jouw naam"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#111827]">E-mail</label>
              <input
                type="email"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#F97316]"
                placeholder="naam@bedrijf.nl"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#111827]">Bedrijfsnaam</label>
              <input
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#F97316]"
                placeholder="Jouw bedrijf"
              />
            </div>

            <button
              type="button"
              className="mt-4 w-full rounded-2xl bg-[#111827] px-6 py-3 font-medium text-white hover:bg-black"
            >
              Verder naar betaling
            </button>
          </form>

          <div className="mt-6 rounded-2xl bg-[#F8F1E7] p-4 text-sm leading-7 text-[#4B5563]">
            Dit scherm is nu de tussenstap. Hierna koppelen we Stripe zodat “Verder naar betaling” echt werkt.
          </div>
        </div>
      </div>
    </div>
  );
}