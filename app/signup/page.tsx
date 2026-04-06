"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const plan = searchParams.get("plan") || "reply";
  const billing = searchParams.get("billing") || "yearly";
  const locations = searchParams.get("locations") || "single";

  const planLabel =
    plan === "grow" ? "Grow" : plan === "trial" ? "Gratis proefperiode" : "Reply";

  const billingLabel = billing === "monthly" ? "Maandelijks" : "12 maanden";
  const locationLabel = locations === "multi" ? "Tot 5 locaties" : "1 locatie";

  const handleCheckout = async () => {
    if (!name || !email || !company) {
      alert("Vul minimaal je naam, e-mail en bedrijfsnaam in.");
      return;
    }

    try {
      setLoading(true);

      const actualPlan = plan === "trial" ? "reply" : plan;

      const { error: insertError } = await supabase.from("customers").insert([
        {
          name,
          email,
          company,
          phone,
          plan: actualPlan,
          billing,
          locations,
          status: "new",
        },
      ]);

      if (insertError) {
        alert("Opslaan klant mislukt.");
        console.error(insertError);
        return;
      }

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: actualPlan,
          billing,
          locations,
          customer: {
            name,
            email,
            company,
            phone,
            notes,
          },
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
      <div className="mx-auto max-w-4xl">
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
            Vul hieronder je gegevens in en ga daarna verder naar betaling.
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

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-[#111827]">Naam *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jouw naam"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#F97316]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#111827]">E-mail *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="naam@bedrijf.nl"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#F97316]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#111827]">Bedrijfsnaam *</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Jouw bedrijf"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#F97316]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#111827]">Telefoon (optioneel)</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="06..."
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#F97316]"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="text-sm font-medium text-[#111827]">
              Opmerking / bijzonderheden (optioneel)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Bijvoorbeeld: meerdere vestigingen, vragen over koppeling, etc."
              className="mt-2 h-32 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#F97316]"
            />
          </div>

          <button
            type="button"
            onClick={handleCheckout}
            disabled={loading}
            className="mt-8 w-full rounded-2xl bg-[#111827] px-6 py-4 text-lg font-medium text-white hover:bg-black disabled:opacity-60"
          >
            {loading ? "Bezig..." : "Verder naar betaling"}
          </button>

          <div className="mt-6 rounded-2xl bg-[#F8F1E7] p-4 text-sm leading-7 text-[#4B5563]">
            Je start via Stripe Checkout. De 14 dagen gratis proefperiode wordt daar automatisch meegenomen.
          </div>
        </div>
      </div>
    </div>
  );
}