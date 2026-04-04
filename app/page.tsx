"use client";

import { useState } from "react";

export default function Home() {
  const [billing, setBilling] = useState<"yearly" | "monthly">("yearly");
  const [demoReview, setDemoReview] = useState(
    "Super vriendelijk geholpen. Er werd echt de tijd genomen en alles werd duidelijk uitgelegd."
  );
  const [demoReply, setDemoReply] = useState(
    "Bedankt voor je mooie review. Wat fijn om te horen dat je je goed geholpen voelde en dat alles duidelijk voor je was. We waarderen het enorm dat je dit deelt en hopen je snel weer te mogen verwelkomen."
  );

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
    },
    {
      id: 2,
      reviewer: "Mark Jansen",
      business: "Studio Bloom",
      rating: 2,
      text: "Op zich vriendelijk geholpen, maar mijn afspraak liep flink uit en ik vond de communicatie daarover niet duidelijk. Daardoor voelde het rommelig en dat was jammer, zeker omdat ik bewust tijd had vrijgemaakt.",
      reply:
        "Bedankt Mark dat je de tijd hebt genomen om dit zo duidelijk met ons te delen. Jammer om te horen dat je afspraak is uitgelopen en dat de communicatie daarover niet helder genoeg was. We begrijpen goed dat dit frustrerend is, zeker als je daar bewust tijd voor hebt vrijgemaakt. We nemen je feedback serieus en gebruiken dit om onze planning en communicatie te verbeteren. Neem gerust contact met ons op, dan kijken we graag hoe we dit netjes met je kunnen oplossen.",
      status: "Concept klaar",
    },
    {
      id: 3,
      reviewer: "Lisa Vermeer",
      business: "Dental Care",
      rating: 4,
      text: "Netjes geholpen en duidelijke uitleg gekregen. Ik voelde me op mijn gemak en vond het prettig dat alles rustig werd doorgenomen.",
      reply:
        "Dankjewel Lisa voor je review. Fijn om te horen dat je je op je gemak voelde en dat de uitleg duidelijk was. We vinden het belangrijk dat je met een gerust gevoel de deur uitgaat, dus het is mooi om te lezen dat je dat zo hebt ervaren. We waarderen je vertrouwen in Dental Care.",
      status: "Klaar om te plaatsen",
    },
  ];

  const stars = (count: number) =>
    "★".repeat(count) + "☆".repeat(5 - count);

  const generateReply = () => {
    const text = demoReview.toLowerCase();

    if (
      text.includes("slecht") ||
      text.includes("jammer") ||
      text.includes("teleurgesteld") ||
      text.includes("niet tevreden") ||
      text.includes("lang wachten") ||
      text.includes("onduidelijk")
    ) {
      setDemoReply(
        "Bedankt dat je de tijd hebt genomen om je ervaring met ons te delen. Jammer om te horen dat dit niet volledig naar wens is verlopen. We nemen je feedback serieus en kijken graag hoe we dit netjes kunnen oppakken en verbeteren."
      );
    } else {
      setDemoReply(
        "Bedankt voor je review. Wat fijn om te horen dat je ervaring positief was. We waarderen het enorm dat je dit deelt en vinden het mooi om te lezen dat onze inzet zo wordt ervaren."
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F1E7] text-[#1F2937]">
      <header className="sticky top-0 z-30 border-b border-black/5 bg-[#F8F1E7]/90 backdrop-blur">
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

          <nav className="hidden gap-8 text-sm text-[#4B5563] md:flex">
            <a href="#waarom" className="hover:text-[#111827]">
              Waarom
            </a>
            <a href="#hoe-het-werkt" className="hover:text-[#111827]">
              Hoe het werkt
            </a>
            <a href="#proberen" className="hover:text-[#111827]">
              Probeer het
            </a>
            <a href="#pricing" className="hover:text-[#111827]">
              Pricing
            </a>
            <a href="#faq" className="hover:text-[#111827]">
              FAQ
            </a>
          </nav>

          <button className="rounded-xl bg-[#111827] px-4 py-2 text-sm font-medium text-white hover:bg-black">
            Vraag demo aan
          </button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-5 inline-flex items-center rounded-full border border-orange-200 bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
            Automatisch reageren op Google reviews
          </div>

          <h1 className="max-w-2xl text-5xl font-semibold leading-tight text-[#111827] md:text-6xl">
            Laat geen Google review meer onbeantwoord.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B5563]">
            Replyn zorgt dat nieuwe reviews netjes en automatisch worden
            opgevolgd, zodat je bedrijf actief, professioneel en betrouwbaar
            overkomt.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-[#F97316] px-6 py-3 font-medium text-white shadow-lg shadow-orange-200 hover:bg-orange-500">
              Vraag demo aan
            </button>
            <button className="rounded-2xl border border-[#D1D5DB] bg-white px-6 py-3 font-medium text-[#1F2937] hover:bg-[#FFF7ED]">
              Bekijk hoe het werkt
            </button>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-sm">
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
              <div className="text-2xl font-semibold text-[#111827]">24/7</div>
              <div className="mt-1 text-[#6B7280]">Altijd opvolging</div>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
              <div className="text-2xl font-semibold text-[#111827]">Snel</div>
              <div className="mt-1 text-[#6B7280]">Professionele reacties</div>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
              <div className="text-2xl font-semibold text-[#111827]">100%</div>
              <div className="mt-1 text-[#6B7280]">Jouw stijl</div>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] bg-[#111827] p-4 shadow-2xl shadow-black/10">
          <div className="rounded-[24px] bg-[#1F2937] p-5 text-white">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-400">Dashboard</div>
                <div className="text-xl font-semibold">Nieuwe reviews</div>
              </div>
              <div className="rounded-xl bg-emerald-500/15 px-3 py-2 text-sm font-medium text-emerald-300">
                Alles up-to-date
              </div>
            </div>

            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium text-white">
                        {review.business}
                      </div>
                      <div className="mt-1 text-sm text-slate-400">
                        Review van {review.reviewer}
                      </div>
                      <div className="mt-1 text-amber-300">
                        {stars(review.rating)}
                      </div>
                      <div className="mt-3 text-sm text-slate-300">
                        {review.text}
                      </div>
                    </div>
                    <span className="rounded-xl bg-white/10 px-3 py-1 text-xs text-slate-300">
                      {review.status}
                    </span>
                  </div>

                  <div className="mt-4 rounded-2xl bg-[#F8F1E7] p-4 text-sm leading-6 text-[#1F2937]">
                    {review.reply}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="waarom" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
              Waarom reageren belangrijk is
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-[#111827] md:text-4xl">
              Reageren op reviews is goed voor vertrouwen, zichtbaarheid en je
              reputatie.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#FFF7ED] p-6 ring-1 ring-black/5">
              <h3 className="text-xl font-semibold text-[#111827]">
                Je laat zien dat je feedback serieus neemt
              </h3>
              <p className="mt-3 leading-7 text-[#4B5563]">
                Een snelle en persoonlijke reactie laat zien dat klantfeedback
                telt en dat je service belangrijk vindt.
              </p>
            </div>

            <div className="rounded-3xl bg-[#ECFDF5] p-6 ring-1 ring-black/5">
              <h3 className="text-xl font-semibold text-[#111827]">
                Nieuwe klanten letten hier echt op
              </h3>
              <p className="mt-3 leading-7 text-[#4B5563]">
                Bedrijven die reageren op reviews komen actiever en betrouwbaarder
                over dan bedrijven die reacties laten liggen.
              </p>
            </div>

            <div className="rounded-3xl bg-[#FEF2F2] p-6 ring-1 ring-black/5">
              <h3 className="text-xl font-semibold text-[#111827]">
                Reviews helpen ook lokaal online
              </h3>
              <p className="mt-3 leading-7 text-[#4B5563]">
                Een sterk reviewprofiel ondersteunt je zichtbaarheid in lokale
                zoekresultaten en op Google Maps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="hoe-het-werkt" className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
            Hoe het werkt
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-[#111827] md:text-4xl">
            Jij hoeft er bijna niet meer naar om te kijken.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "Nieuwe review komt binnen",
              "Replyn ziet nieuwe reviews direct zodra ze geplaatst worden.",
            ],
            [
              "Automatische reactie",
              "Positieve en neutrale reviews krijgen automatisch een professionele reactie in jouw stijl.",
            ],
            [
              "Jij houdt de regie",
              "Je bepaalt zelf hoe Replyn moet reageren en wanneer iets als concept klaar moet staan.",
            ],
          ].map(([title, text], index) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEF3C7] text-lg font-semibold text-[#92400E]">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-[#111827]">{title}</h3>
              <p className="mt-3 leading-7 text-[#4B5563]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="proberen" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#10B981]">
                Probeer Replyn
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-[#111827] md:text-4xl">
                Zie direct wat voor reactie Replyn zou schrijven.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#4B5563]">
                Vul hieronder een voorbeeldreview in en bekijk hoe een nette,
                professionele reactie eruitziet.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F8F1E7] p-6 ring-1 ring-black/5">
              <label className="text-sm font-medium text-[#111827]">
                Voorbeeld review
              </label>
              <textarea
                value={demoReview}
                onChange={(e) => setDemoReview(e.target.value)}
                className="mt-3 h-32 w-full rounded-2xl border border-black/10 bg-white p-4 text-sm outline-none focus:border-[#F97316]"
              />

              <button
                onClick={generateReply}
                className="mt-4 rounded-2xl bg-[#111827] px-5 py-3 font-medium text-white hover:bg-black"
              >
                Genereer reactie
              </button>

              <div className="mt-5 rounded-2xl bg-white p-4 text-sm leading-7 text-[#1F2937] ring-1 ring-black/5">
                {demoReply}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#10B981]">
            Instellingen
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-[#111827] md:text-4xl">
            Geef Replyn jouw stijl en voorkeuren mee.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <div className="text-sm text-[#6B7280]">Voorbeeld instellingen</div>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-[#FFF7ED] p-4">
                <div className="text-sm font-medium text-[#9A3412]">
                  Tone of voice
                </div>
                <div className="mt-1 text-[#1F2937]">
                  Professioneel, vriendelijk en duidelijk
                </div>
              </div>

              <div className="rounded-2xl bg-[#ECFDF5] p-4">
                <div className="text-sm font-medium text-[#047857]">
                  Wanneer als concept klaarzetten
                </div>
                <div className="mt-1 text-[#1F2937]">
                  Bij gevoelige of afwijkende reviews
                </div>
              </div>

              <div className="rounded-2xl bg-[#FEF2F2] p-4">
                <div className="text-sm font-medium text-[#B91C1C]">
                  Extra instructies
                </div>
                <div className="mt-1 text-[#1F2937]">
                  Geen emoji, netjes afsluiten en oplossingsgericht reageren
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-[#111827] p-6 text-white shadow-sm">
            <div className="text-sm text-slate-400">Waarom dit handig is</div>
            <div className="mt-2 text-2xl font-semibold">
              Geen vaste templates, maar reacties die bij het bedrijf passen.
            </div>

            <p className="mt-5 leading-8 text-slate-300">
              Replyn werkt niet met één standaardtekst voor iedereen. Je kunt
              zelf aangeven hoe reacties moeten klinken, wat er wel of niet in
              mag staan en wanneer iets beter eerst als concept klaar kan staan.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-4 text-sm leading-6 text-slate-300">
              Zo voelt het niet als een generieke AI-tool, maar als iets dat echt
              namens jouw bedrijf reageert.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[32px] bg-gradient-to-r from-[#F97316] to-[#FB923C] p-8 text-white md:p-10">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-orange-100">
                Extra feature
              </div>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Nodig klanten automatisch uit om een review achter te laten.
              </h2>
              <p className="mt-4 text-lg leading-8 text-orange-50">
                Voeg klantgegevens toe en laat Replyn automatisch een nette
                review-uitnodiging sturen via e-mail. Zo reageer je niet alleen
                beter op reviews, maar verzamel je er ook meer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ECFDF5] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#10B981]">
              Maandelijkse inzichten
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-[#111827] md:text-4xl">
              Ontvang elke maand een overzicht van wat klanten waarderen en wat
              beter kan.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#4B5563]">
              Replyn bundelt terugkerende complimenten, klachten en verbeterpunten
              in een duidelijke maandelijkse e-mailanalyse.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[32px] bg-white p-8 shadow-xl shadow-black/5 ring-1 ring-black/5 md:p-10">
          <div className="text-center">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
              Pricing
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-[#111827] md:text-4xl">
              Kies wat het beste bij jouw bedrijf past.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#4B5563]">
              Kies het plan dat past bij jouw bedrijf. Jaarlijks is voordeliger.
            </p>

            <div className="mt-8 inline-flex rounded-2xl bg-[#F3F4F6] p-1">
              <button
                onClick={() => setBilling("yearly")}
                className={`rounded-2xl px-5 py-2 text-sm font-medium transition ${
                  billing === "yearly"
                    ? "bg-[#111827] text-white shadow"
                    : "text-[#4B5563]"
                }`}
              >
                Jaarlijks
              </button>
              <button
                onClick={() => setBilling("monthly")}
                className={`rounded-2xl px-5 py-2 text-sm font-medium transition ${
                  billing === "monthly"
                    ? "bg-[#111827] text-white shadow"
                    : "text-[#4B5563]"
                }`}
              >
                Maandelijks
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-[#F8F1E7] p-8 ring-1 ring-black/5">
              <div className="text-sm font-medium uppercase tracking-[0.15em] text-[#9A3412]">
                Reply
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[#111827]">
                Automatisch reageren op reviews
              </h3>

              <div className="mt-6 text-5xl font-semibold text-[#111827]">
                {billing === "yearly" ? "€10,99" : "€12,99"}
                <span className="text-lg font-medium text-[#6B7280]"> / maand</span>
              </div>
              <div className="mt-2 text-sm text-[#6B7280]">excl. btw</div>

              <div className="mt-6 space-y-3 text-left text-[#1F2937]">
                {[
                  "Automatische reviewreacties",
                  "Reacties in jouw stijl",
                  "Review inbox",
                  "E-mail meldingen",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                    ✓ {item}
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full rounded-2xl bg-[#111827] px-6 py-3 font-medium text-white hover:bg-black">
                Kies Reply
              </button>
            </div>

            <div className="relative rounded-3xl bg-[#111827] p-8 text-white shadow-xl">
              <div className="absolute right-6 top-6 rounded-full bg-[#F97316] px-3 py-1 text-xs font-medium text-white">
                Populair
              </div>

              <div className="text-sm font-medium uppercase tracking-[0.15em] text-orange-300">
                Grow
              </div>
              <h3 className="mt-3 text-2xl font-semibold">
                Reviews, uitnodigingen en inzichten
              </h3>

              <div className="mt-2 text-sm text-slate-400">Tot 5 locaties</div>

              <div className="mt-6 text-5xl font-semibold">
                {billing === "yearly" ? "€14,99" : "€16,99"}
                <span className="text-lg font-medium text-slate-400"> / maand</span>
              </div>
              <div className="mt-2 text-sm text-slate-400">excl. btw</div>

              <div className="mt-6 space-y-3 text-left text-slate-200">
                {[
                  "Alles van Reply",
                  "Review-uitnodigingen via e-mail",
                  "Maandelijkse review analyse",
                  "Inzicht in wat klanten waarderen",
                  "Inzicht in verbeterpunten",
                  "Tot 5 locaties inbegrepen",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/5 px-4 py-3">
                    ✓ {item}
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full rounded-2xl bg-[#F97316] px-6 py-3 font-medium text-white hover:bg-orange-500">
                Kies Grow
              </button>
            </div>

            <div className="rounded-3xl bg-white p-8 ring-1 ring-black/5">
              <div className="text-sm font-medium uppercase tracking-[0.15em] text-[#047857]">
                Maatwerk
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[#111827]">
                Voor meerdere vestigingen of speciale wensen
              </h3>

              <div className="mt-6 text-3xl font-semibold text-[#111827]">
                Op aanvraag
              </div>

              <div className="mt-6 space-y-3 text-left text-[#1F2937]">
                {[
                  "Voor meer dan 5 locaties",
                  "Pakket op maat",
                  "Aangepaste workflows",
                  "Specifieke wensen of uitzonderingen",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#F8F1E7] px-4 py-3">
                    ✓ {item}
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full rounded-2xl border border-[#111827] px-6 py-3 font-medium text-[#111827] hover:bg-[#FFF7ED]">
                Vraag maatwerk aan
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-16">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
            FAQ
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-[#111827] md:text-4xl">
            Veelgestelde vragen
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {[
            [
              "Waarom kiezen voor Replyn?",
              "Omdat Replyn ervoor zorgt dat reviews niet blijven liggen. Je bedrijf komt actiever en professioneler over, zonder dat je daar dagelijks mee bezig hoeft te zijn.",
            ],
            [
              "Moet ik elke reactie controleren?",
              "Nee. Replyn kan reviews automatisch opvolgen. Je bepaalt zelf of bepaalde reviews eerst als concept klaar moeten staan.",
            ],
            [
              "Werkt dit alleen voor Google reviews?",
              "De focus ligt nu op Google reviews, omdat die voor lokale zichtbaarheid en vertrouwen vaak het belangrijkst zijn.",
            ],
            [
              "Wat krijg ik in de maandelijkse analyse?",
              "Een overzicht van terugkerende complimenten, klachten en verbeterpunten, zodat je snel ziet wat klanten waarderen en wat aandacht nodig heeft.",
            ],
          ].map(([question, answer]) => (
            <div
              key={question}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <h3 className="text-lg font-semibold text-[#111827]">{question}</h3>
              <p className="mt-3 leading-7 text-[#4B5563]">{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-6">
        <div className="rounded-[32px] bg-gradient-to-r from-[#111827] to-[#1F2937] px-8 py-10 text-white md:px-12">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.2em] text-orange-300">
              Klaar om te starten?
            </div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Zorg dat reviews niet meer blijven liggen.
            </h2>
            <p className="mt-4 text-slate-300">
              Laat Replyn het grootste deel automatisch afhandelen en houd grip
              op hoe jouw bedrijf online overkomt.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-[#F97316] px-6 py-3 font-medium text-white hover:bg-orange-500">
                Vraag demo aan
              </button>
              <button className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white hover:bg-white/5">
                Neem contact op
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}