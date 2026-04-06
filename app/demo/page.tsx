"use client";

import { useState } from "react";
import Link from "next/link";

export default function DemoPage() {
  const [selectedReview, setSelectedReview] = useState(0);

  const reviews = [
    {
      id: 1,
      reviewer: "Sanne de Vries",
      business: "Restaurant De Haven",
      rating: 5,
      text: "Heerlijke avond gehad. We werden heel vriendelijk ontvangen, het eten was echt goed en de bediening dacht fijn mee. Je merkt dat er aandacht wordt besteed aan de ervaring van gasten.",
      reply:
        "Dankjewel Sanne voor je uitgebreide en warme review. Wat fijn om te horen dat je je welkom voelde en dat zowel het eten als de service zo positief zijn ervaren. We doen er elke dag ons best voor om gasten een fijne avond te bezorgen, dus dit waarderen we enorm. Hopelijk mogen we je snel weer ontvangen bij Restaurant De Haven.",
      status: "Automatisch geplaatst",
      label: "Positief",
    },
    {
      id: 2,
      reviewer: "Mark Jansen",
      business: "Studio Bloom",
      rating: 2,
      text: "Op zich vriendelijk geholpen, maar mijn afspraak liep flink uit en ik vond de communicatie daarover niet duidelijk. Daardoor voelde het rommelig en dat was jammer, zeker omdat ik bewust tijd had vrijgemaakt.",
      reply:
        "Bedankt Mark dat je dit zo duidelijk met ons deelt. Jammer om te horen dat je afspraak is uitgelopen en dat de communicatie daarover niet helder genoeg was. We begrijpen goed dat dit frustrerend is, zeker als je daar bewust tijd voor hebt vrijgemaakt. We nemen je feedback serieus en kijken graag hoe we dit netjes kunnen oppakken.",
      status: "Concept klaar",
      label: "Gevoelig",
    },
    {
      id: 3,
      reviewer: "Lisa Vermeer",
      business: "Dental Care",
      rating: 4,
      text: "Netjes geholpen en duidelijke uitleg gekregen. Ik voelde me op mijn gemak en vond het prettig dat alles rustig werd doorgenomen.",
      reply:
        "Dankjewel Lisa voor je review. Fijn om te horen dat je je op je gemak voelde en dat de uitleg duidelijk was. We vinden het belangrijk dat je met een gerust gevoel de deur uitgaat, dus het is mooi om te lezen dat je dat zo hebt ervaren.",
      status: "Klaar voor plaatsing",
      label: "Neutraal/positief",
    },
  ];

  const current = reviews[selectedReview];

  const stars = (count: number) =>
    "★".repeat(count) + "☆".repeat(5 - count);

  return (
    <div className="min-h-screen bg-[#F8F1E7] text-[#1F2937]">
      <header className="border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111827] shadow-lg shadow-black/10">
              <div className="h-5 w-5 rounded-md bg-[#F97316]" />
              <div className="absolute h-2 w-7 rotate-[-35deg] rounded-full bg-white" />
            </div>
            <div className="text-2xl font-semibold tracking-tight text-[#111827]">
              Replyn
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              href="/"
              className="rounded-2xl border border-black/10 px-4 py-2 font-medium hover:bg-white"
            >
              Terug naar home
            </Link>
            <Link
              href="/signup?plan=trial&billing=yearly&locations=single"
              className="rounded-2xl bg-[#111827] px-4 py-2 font-medium text-white hover:bg-black"
            >
              Start gratis
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
            Demo dashboard
          </div>
          <h1 className="mt-3 text-4xl font-semibold text-[#111827] md:text-5xl">
            Zo ziet Replyn er voor klanten uit
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4B5563]">
            Dit is een voorbeeld van hoe nieuwe reviews binnenkomen, hoe Replyn
            een reactie opstelt en wanneer iets automatisch wordt geplaatst of
            eerst als concept klaarstaat.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] bg-white p-6 shadow-xl shadow-black/5 ring-1 ring-black/5">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-sm text-[#6B7280]">Review inbox</div>
                <div className="text-2xl font-semibold text-[#111827]">
                  Nieuwe reviews
                </div>
              </div>
              <div className="rounded-2xl bg-[#ECFDF5] px-4 py-2 text-sm font-medium text-[#047857]">
                Live voorbeeld
              </div>
            </div>

            <div className="space-y-4">
              {reviews.map((review, index) => (
                <button
                  key={review.id}
                  onClick={() => setSelectedReview(index)}
                  className={`w-full rounded-3xl border p-5 text-left transition ${
                    selectedReview === index
                      ? "border-[#F97316] bg-[#FFF7ED] shadow-sm"
                      : "border-black/5 bg-[#FAFAF9] hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold text-[#111827]">
                        {review.business}
                      </div>
                      <div className="mt-1 text-sm text-[#6B7280]">
                        Review van {review.reviewer}
                      </div>
                      <div className="mt-2 text-amber-500">
                        {stars(review.rating)}
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white px-3 py-1 text-xs font-medium text-[#111827] ring-1 ring-black/5">
                      {review.status}
                    </div>
                  </div>

                  <p className="mt-4 leading-7 text-[#4B5563]">{review.text}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] bg-[#111827] p-6 text-white shadow-xl shadow-black/10">
              <div className="text-sm text-slate-400">Geselecteerde review</div>
              <div className="mt-2 text-2xl font-semibold">{current.business}</div>
              <div className="mt-1 text-sm text-slate-400">
                {current.reviewer} · {current.label}
              </div>

              <div className="mt-4 text-amber-300">{stars(current.rating)}</div>

              <div className="mt-5 rounded-3xl bg-white/5 p-4 leading-7 text-slate-200">
                {current.text}
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-xl shadow-black/5 ring-1 ring-black/5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[#6B7280]">AI-reactie</div>
                  <div className="mt-1 text-2xl font-semibold text-[#111827]">
                    Voorstel van Replyn
                  </div>
                </div>
                <div className="rounded-2xl bg-[#FFF7ED] px-3 py-1 text-sm font-medium text-[#9A3412]">
                  {current.status}
                </div>
              </div>

              <div className="mt-5 rounded-3xl bg-[#F8F1E7] p-5 leading-7 text-[#1F2937]">
                {current.reply}
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <button className="rounded-2xl bg-[#111827] px-4 py-3 font-medium text-white hover:bg-black">
                  Plaats reactie
                </button>
                <button className="rounded-2xl border border-black/10 px-4 py-3 font-medium text-[#111827] hover:bg-[#FFF7ED]">
                  Pas reactie aan
                </button>
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-xl shadow-black/5 ring-1 ring-black/5">
              <div className="text-sm text-[#6B7280]">Waarom dit sterk verkoopt</div>
              <div className="mt-2 text-2xl font-semibold text-[#111827]">
                Minder werk, meer opvolging
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl bg-[#ECFDF5] px-4 py-3">
                  ✓ Reviews blijven niet meer liggen
                </div>
                <div className="rounded-2xl bg-[#ECFDF5] px-4 py-3">
                  ✓ Reacties blijven netjes en consistent
                </div>
                <div className="rounded-2xl bg-[#ECFDF5] px-4 py-3">
                  ✓ Gevoelige reviews kunnen eerst als concept klaarstaan
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}