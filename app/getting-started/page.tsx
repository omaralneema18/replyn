"use client";

import Link from "next/link";

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-[#F8F1E7] px-6 py-16 text-[#1F2937]">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[32px] bg-white p-10 shadow-xl shadow-black/5 ring-1 ring-black/5">
          
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#10B981]">
            Alles staat klaar
          </div>

          <h1 className="mt-3 text-4xl font-semibold text-[#111827]">
            We gaan dit voor je regelen
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#4B5563]">
            Je hoeft dit maar één keer in te stellen. Daarna reageren wij automatisch
            op je reviews. Alleen bij gevoelige reviews krijg je een melding.
          </p>

          {/* STEPS */}
          <div className="mt-10 space-y-6">
            
            <div className="rounded-3xl bg-[#F8F1E7] p-6">
              <div className="text-lg font-semibold text-[#111827]">
                1. Vul je profiel in
              </div>
              <p className="mt-2 text-[#4B5563]">
                Geef je bedrijfsgegevens en gewenste schrijfstijl door.
              </p>

              <Link
                href="/welcome"
                className="mt-4 inline-block rounded-2xl bg-[#111827] px-5 py-3 text-white hover:bg-black"
              >
                Profiel instellen
              </Link>
            </div>

            <div className="rounded-3xl bg-[#F8F1E7] p-6">
              <div className="text-lg font-semibold text-[#111827]">
                2. Koppel je Google reviews
              </div>
              <p className="mt-2 text-[#4B5563]">
                Volg de korte stappen om ons toegang te geven tot je reviews.
              </p>

              <Link
                href="/connect-google"
                className="mt-4 inline-block rounded-2xl border border-black/10 px-5 py-3 hover:bg-white"
              >
                Bekijk stappen
              </Link>
            </div>

            <div className="rounded-3xl bg-[#ECFDF5] p-6">
              <div className="text-lg font-semibold text-[#111827]">
                3. Klaar
              </div>
              <p className="mt-2 text-[#047857]">
                Vanaf hier reageren wij automatisch op je reviews.
              </p>
            </div>
          </div>

          {/* INFO */}
          <div className="mt-10 rounded-2xl bg-[#FFF7ED] p-5 text-sm leading-7 text-[#9A3412]">
            Je hoeft niet dagelijks in te loggen. Alleen bij gevoelige/negatieve reviews sturen we je een e-mail.
          </div>

        </div>
      </div>
    </div>
  );
}