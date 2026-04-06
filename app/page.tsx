"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [billing, setBilling] = useState<"yearly" | "monthly">("yearly");
  const [locations, setLocations] = useState<"single" | "multi">("single");

  const billingLabel = billing === "monthly" ? "monthly" : "yearly";

  const starterPrice =
    billing === "yearly"
      ? locations === "single"
        ? "€10,99"
        : "€21,99"
      : locations === "single"
      ? "€12,99"
      : "€25,99";

  const growPrice =
    billing === "yearly"
      ? locations === "single"
        ? "€14,99"
        : "€29,99"
      : locations === "single"
      ? "€16,99"
      : "€33,99";

  const reviews = [
    {
      name: "Sanne de Vries",
      business: "Restaurant De Haven",
      stars: "★★★★★",
      text: "Heerlijke avond gehad. We werden heel vriendelijk ontvangen, het eten was echt goed en de bediening dacht fijn mee. Je merkt dat er aandacht wordt besteed aan de ervaring van gasten.",
      reply:
        "Dankjewel Sanne voor je uitgebreide en warme review. Wat fijn om te horen dat je je welkom voelde en dat zowel het eten als de service zo positief zijn ervaren. We doen er elke dag ons best voor om gasten een fijne avond te bezorgen, dus dit waarderen we enorm. Hopelijk mogen we je snel weer ontvangen bij Restaurant De Haven.",
    },
    {
      name: "Mark Jansen",
      business: "Studio Bloom",
      stars: "★★☆☆☆",
      text: "Op zich vriendelijk geholpen, maar mijn afspraak liep flink uit en ik vond de communicatie daarover niet duidelijk. Daardoor voelde het rommelig en dat was jammer.",
      reply:
        "Bedankt Mark dat je dit zo duidelijk met ons deelt. Jammer om te horen dat je afspraak is uitgelopen en dat de communicatie daarover niet helder genoeg was. We begrijpen goed dat dit frustrerend is, zeker als je daar bewust tijd voor hebt vrijgemaakt. We nemen je feedback serieus en kijken graag hoe we dit netjes kunnen oppakken.",
    },
  ];

  const faq = [
    {
      q: "Waarom reageren op reviews belangrijk is",
      a: "Actief reageren op reviews wekt vertrouwen bij nieuwe klanten en laat zien dat je betrokken bent. Daarnaast helpt het je zichtbaarheid en professionele uitstraling op platforms zoals Google te versterken.",
    },
    {
      q: "Plaatsen jullie reacties automatisch?",
      a: "Ja. Positieve en normale reviews kunnen automatisch worden beantwoord. Je houdt zelf controle over hoe dit werkt.",
    },
    {
      q: "Wat gebeurt er bij negatieve reviews?",
      a: "Gevoelige of negatieve reviews kunnen eerst als concept worden klaargezet, zodat jij alleen hoeft goed te keuren als je dat wilt.",
    },
    {
      q: "Hoe werken review uitnodigingen?",
      a: "Met Grow kun je klanten automatisch uitnodigen om een review achter te laten. Handmatig invoeren kan nu, verdere automatisering bouwen we later uit.",
    },
    {
      q: "Wat is de maandelijkse review analyse?",
      a: "Je ontvangt maandelijks per mail een overzicht van wat klanten waarderen, welke terugkerende klachten er zijn en waar kansen liggen om je reviews te verbeteren.",
    },
    {
      q: "Kan ik meerdere locaties beheren?",
      a: "Ja. Voor 2 t/m 5 locaties kun je direct kiezen voor multi-locatie. Voor meer locaties maken we een maatwerkvoorstel.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F1E7] text-[#1F2937]">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F8F1E7]/80 backdrop-blur">
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

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#374151] md:flex">
            <a href="#hoe-het-werkt" className="hover:text-[#111827]">
              Hoe het werkt
            </a>
            <a href="#prijzen" className="hover:text-[#111827]">
              Prijzen
            </a>
            <a href="#faq" className="hover:text-[#111827]">
              FAQ
            </a>
            <Link href="/demo" className="hover:text-[#111827]">
              Demo
            </Link>
            <button className="rounded-2xl bg-[#111827] px-5 py-2.5 text-white hover:bg-black">
              Start gratis
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 pb-20 pt-14 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-[#F97316] shadow-sm ring-1 ring-black/5">
                AI voor Google reviewreacties
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight text-[#111827] md:text-7xl">
                Laat geen Google review meer onbeantwoord.
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-9 text-[#4B5563]">
                Replyn reageert automatisch op je reviews in jouw tone of voice.
                Jij houdt overzicht, zonder er dagelijks mee bezig te zijn.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`/signup?plan=reply&billing=${billingLabel}&locations=${locations}`}
                  className="rounded-2xl bg-[#F97316] px-6 py-3 font-medium text-white shadow-lg shadow-orange-200 hover:bg-orange-500"
                >
                  Start 14 dagen gratis
                </Link>

                <a
                  href="#hoe-het-werkt"
                  className="rounded-2xl border border-[#D1D5DB] bg-white px-6 py-3 font-medium text-[#1F2937] hover:bg-[#FFF7ED]"
                >
                  Bekijk hoe het werkt
                </a>

                <Link
                  href="/demo"
                  className="rounded-2xl border border-black/10 bg-white px-6 py-3 font-medium text-[#111827] hover:bg-white"
                >
                  Bekijk demo
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#6B7280]">
                <div>✓ 14 dagen gratis proberen</div>
                <div>✓ Voor 1 of meerdere locaties</div>
                <div>✓ Gevoelige reviews optioneel apart</div>
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-6 shadow-2xl shadow-black/5 ring-1 ring-black/5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[#6B7280]">Live voorbeeld</div>
                  <div className="mt-1 text-2xl font-semibold text-[#111827]">
                    AI-reactie op review
                  </div>
                </div>
                <div className="rounded-2xl bg-[#ECFDF5] px-4 py-2 text-sm font-medium text-[#047857]">
                  Klaar om te plaatsen
                </div>
              </div>

              <div className="mt-6 rounded-3xl bg-[#F8F1E7] p-5">
                <div className="text-sm font-medium text-[#6B7280]">
                  Google review
                </div>
                <div className="mt-2 text-amber-500">★★★★★</div>
                <div className="mt-2 font-medium text-[#111827]">
                  Sanne de Vries
                </div>
                <p className="mt-3 leading-7 text-[#4B5563]">
                  Heerlijke avond gehad. We werden heel vriendelijk ontvangen,
                  het eten was echt goed en de bediening dacht fijn mee.
                </p>
              </div>

              <div className="mt-5 rounded-3xl bg-[#111827] p-5 text-white">
                <div className="text-sm text-slate-400">Reactie van Replyn</div>
                <p className="mt-3 leading-8 text-slate-100">
                  Dankjewel Sanne voor je warme review. Wat fijn om te horen dat
                  je je welkom voelde en dat zowel het eten als de service zo
                  positief zijn ervaren. We waarderen het enorm dat je dit deelt
                  en hopen je snel weer te mogen ontvangen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAAROM */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-8 shadow-xl shadow-black/5 ring-1 ring-black/5 md:p-10">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
            Waarom dit belangrijk is
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-[#111827] md:text-4xl">
            Reageren op reviews is meer dan alleen netjes zijn
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-[#FFF7ED] p-6">
              <div className="text-lg font-semibold text-[#111827]">
                Meer vertrouwen
              </div>
              <p className="mt-3 leading-7 text-[#4B5563]">
                Nieuwe klanten kijken vaak niet alleen naar sterren, maar ook
                naar hoe jij reageert op feedback.
              </p>
            </div>

            <div className="rounded-3xl bg-[#ECFDF5] p-6">
              <div className="text-lg font-semibold text-[#111827]">
                Sterkere zichtbaarheid
              </div>
              <p className="mt-3 leading-7 text-[#4B5563]">
                Actieve review-opvolging helpt je aanwezigheid en professionaliteit
                op Google sterker over te komen.
              </p>
            </div>

            <div className="rounded-3xl bg-[#EEF2FF] p-6">
              <div className="text-lg font-semibold text-[#111827]">
                Minder blijft liggen
              </div>
              <p className="mt-3 leading-7 text-[#4B5563]">
                Reviews blijven niet weken openstaan en je antwoordstijl blijft
                consistent, ook als het druk is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOE HET WERKT */}
      <section id="hoe-het-werkt" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
            Hoe het werkt
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-[#111827] md:text-5xl">
            Minder werk. Meer opvolging.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "1. Koppel je bedrijf",
                text: "Wij richten jouw account in op basis van je bedrijf, locaties en gewenste stijl.",
              },
              {
                title: "2. Reviews komen binnen",
                text: "Nieuwe reviews worden automatisch herkend en Replyn schrijft direct een passende reactie.",
              },
              {
                title: "3. Automatisch of slim gecontroleerd",
                text: "Normale reviews kunnen direct worden geplaatst. Gevoelige reviews kunnen eerst apart worden bekeken.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] bg-white p-6 shadow-xl shadow-black/5 ring-1 ring-black/5"
              >
                <div className="text-xl font-semibold text-[#111827]">
                  {item.title}
                </div>
                <p className="mt-4 leading-8 text-[#4B5563]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
            Voorbeeldreacties
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-[#111827] md:text-5xl">
            Zo warm en professioneel kunnen reacties klinken
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-[28px] bg-white p-6 shadow-xl shadow-black/5 ring-1 ring-black/5"
              >
                <div className="text-amber-500">{review.stars}</div>
                <div className="mt-3 text-lg font-semibold text-[#111827]">
                  {review.name}
                </div>
                <div className="text-sm text-[#6B7280]">{review.business}</div>

                <p className="mt-5 leading-8 text-[#4B5563]">{review.text}</p>

                <div className="mt-6 rounded-3xl bg-[#F8F1E7] p-5">
                  <div className="text-sm font-medium text-[#6B7280]">
                    Reactie van Replyn
                  </div>
                  <p className="mt-3 leading-8 text-[#1F2937]">
                    {review.reply}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="prijzen" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
              Prijzen
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-[#111827] md:text-5xl">
              Kies wat past bij jouw bedrijf
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Begin simpel of automatiseer meer van je reviewflow.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex rounded-2xl bg-white p-1 shadow-sm ring-1 ring-black/5">
              <button
                onClick={() => setBilling("yearly")}
                className={`rounded-2xl px-5 py-2.5 text-sm font-medium ${
                  billing === "yearly"
                    ? "bg-[#111827] text-white"
                    : "text-[#4B5563]"
                }`}
              >
                Jaarlijks
              </button>
              <button
                onClick={() => setBilling("monthly")}
                className={`rounded-2xl px-5 py-2.5 text-sm font-medium ${
                  billing === "monthly"
                    ? "bg-[#111827] text-white"
                    : "text-[#4B5563]"
                }`}
              >
                Maandelijks
              </button>
            </div>

            <div className="inline-flex rounded-2xl bg-white p-1 shadow-sm ring-1 ring-black/5">
              <button
                onClick={() => setLocations("single")}
                className={`rounded-2xl px-5 py-2.5 text-sm font-medium ${
                  locations === "single"
                    ? "bg-[#F97316] text-white"
                    : "text-[#4B5563]"
                }`}
              >
                1 locatie
              </button>
              <button
                onClick={() => setLocations("multi")}
                className={`rounded-2xl px-5 py-2.5 text-sm font-medium ${
                  locations === "multi"
                    ? "bg-[#F97316] text-white"
                    : "text-[#4B5563]"
                }`}
              >
                Tot 5 locaties
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[32px] bg-white p-8 shadow-xl shadow-black/5 ring-1 ring-black/5">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
                Reply
              </div>
              <div className="mt-4 text-5xl font-semibold text-[#111827]">
                {starterPrice}
                <span className="text-lg font-normal text-[#6B7280]">
                  /maand
                </span>
              </div>
              <p className="mt-4 leading-8 text-[#4B5563]">
                Voor bedrijven die reviews automatisch willen beantwoorden zonder gedoe.
              </p>

              <div className="mt-6 space-y-3 text-[#1F2937]">
                <div>✓ AI-reacties op nieuwe reviews</div>
                <div>✓ Eigen tone of voice</div>
                <div>✓ Automatische plaatsing mogelijk</div>
                <div>✓ E-mail meldingen</div>
              </div>

              <Link
                href={`/signup?plan=reply&billing=${billingLabel}&locations=${locations}`}
                className="mt-8 block rounded-2xl bg-[#111827] px-6 py-3 text-center font-medium text-white hover:bg-black"
              >
                Kies Reply
              </Link>
            </div>

            <div className="relative rounded-[32px] bg-[#111827] p-8 text-white shadow-2xl shadow-black/10">
              <div className="absolute right-6 top-6 rounded-full bg-[#F97316] px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                Populair
              </div>

              <div className="text-sm font-medium uppercase tracking-[0.2em] text-orange-300">
                Grow
              </div>
              <div className="mt-4 text-5xl font-semibold">
                {growPrice}
                <span className="text-lg font-normal text-slate-400">
                  /maand
                </span>
              </div>
              <p className="mt-4 leading-8 text-slate-300">
                Voor bedrijven die naast reageren ook actief meer reviews willen verzamelen en leren van feedback.
              </p>

              <div className="mt-6 space-y-3 text-slate-100">
                <div>✓ Alles uit Reply</div>
                <div>✓ Review uitnodigingen per e-mail</div>
                <div>✓ Maandelijkse review analyse per mail</div>
                <div>✓ Meer inzicht in kansen en terugkerende feedback</div>
              </div>

              <Link
                href={`/signup?plan=grow&billing=${billingLabel}&locations=${locations}`}
                className="mt-8 block rounded-2xl bg-[#F97316] px-6 py-3 text-center font-medium text-white hover:bg-orange-500"
              >
                Kies Grow
              </Link>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-xl shadow-black/5 ring-1 ring-black/5">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
                Maatwerk
              </div>
              <div className="mt-4 text-4xl font-semibold text-[#111827]">
                Meer dan 5 locaties
              </div>
              <p className="mt-4 leading-8 text-[#4B5563]">
                Voor ketens, meerdere vestigingen of bedrijven met een eigen workflow.
              </p>

              <div className="mt-6 space-y-3 text-[#1F2937]">
                <div>✓ Meerdere locaties of teams</div>
                <div>✓ Maatwerk instellingen</div>
                <div>✓ Schaalbare reviewflow</div>
                <div>✓ Persoonlijk voorstel</div>
              </div>

              <a
                href="mailto:info@replyn.nl"
                className="mt-8 block rounded-2xl border border-black/10 px-6 py-3 text-center font-medium text-[#111827] hover:bg-[#FFF7ED]"
              >
                Vraag maatwerk aan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
              FAQ
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-[#111827] md:text-5xl">
              Veelgestelde vragen
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
                className="rounded-[28px] bg-white p-6 shadow-lg shadow-black/5 ring-1 ring-black/5"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-[#111827]">
                  {item.q}
                </summary>
                <p className="mt-4 leading-8 text-[#4B5563]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}