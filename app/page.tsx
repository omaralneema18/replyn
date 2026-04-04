export default function Home() {
  const reviews = [
    {
      id: 1,
      name: "Restaurant De Haven",
      rating: 5,
      text: "Heerlijke service en super vriendelijk personeel.",
      reply:
        "Wat fijn om te lezen, dankjewel voor je mooie woorden. We doen elke dag ons best om iedereen een warme ervaring te geven. Hopelijk mogen we je snel weer verwelkomen.",
      status: "Automatisch geplaatst",
    },
    {
      id: 2,
      name: "Studio Bloom",
      rating: 2,
      text: "Afspraak liep uit en communicatie kon beter.",
      reply:
        "Bedankt dat je dit met ons deelt. Het spijt ons dat je ervaring niet optimaal was. We nemen dit serieus en kijken graag samen naar een oplossing.",
      status: "Wacht op goedkeuring",
    },
    {
      id: 3,
      name: "Dental Care",
      rating: 4,
      text: "Netjes geholpen en duidelijke uitleg gekregen.",
      reply:
        "Dankjewel voor je review. Fijn om te horen dat alles duidelijk was en dat je goed bent geholpen. We waarderen je vertrouwen.",
      status: "Concept klaar",
    },
  ];

  const stars = (count: number) =>
    "★".repeat(count) + "☆".repeat(5 - count);

  return (
    <div className="min-h-screen bg-[#F8F1E7] text-[#1F2937]">
      <header className="sticky top-0 z-30 border-b border-black/5 bg-[#F8F1E7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F97316] text-lg font-bold text-white shadow-lg shadow-orange-200">
              R
            </div>
            <div>
              <div className="text-lg font-semibold text-[#111827]">Replyn</div>
              <div className="text-xs text-[#6B7280]">
                Automatisch reviewbeheer
              </div>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-[#4B5563] md:flex">
            <a href="#hoe-het-werkt" className="hover:text-[#111827]">
              Hoe het werkt
            </a>
            <a href="#voordelen" className="hover:text-[#111827]">
              Voordelen
            </a>
            <a href="#pricing" className="hover:text-[#111827]">
              Pricing
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
            Replyn reageert automatisch op nieuwe reviews in jouw stijl. 
            geplaatst.
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
              <div className="text-2xl font-semibold text-[#111827]">1-3★</div>
              <div className="mt-1 text-[#6B7280]">Eerst controleren</div>
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
                      <div className="font-medium text-white">{review.name}</div>
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

      <section
        id="hoe-het-werkt"
        className="mx-auto max-w-7xl px-6 py-16"
      >
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
              "Alleen checken bij negatieve reviews",
              "Bij negatieve reviews kun je eerst goedkeuren voordat Replyn reageert.",
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

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[32px] bg-gradient-to-r from-[#F97316] to-[#FB923C] p-8 text-white md:p-10">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-orange-100">
                Waarom dit werkt
              </div>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Reviews worden eindelijk wél opgevolgd.
              </h2>
              <p className="mt-4 text-lg leading-8 text-orange-50">
                Veel bedrijven reageren onregelmatig of helemaal niet op reviews.
                Replyn zorgt dat positieve reviews netjes worden beantwoord,
                terwijl jij alleen hoeft in te grijpen als een review gevoelig is.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="voordelen"
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#10B981]">
            Voordelen
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-[#111827] md:text-4xl">
            Minder gedoe, meer vertrouwen.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "Altijd een reactie",
              "Nieuwe reviews blijven niet meer liggen en krijgen op tijd opvolging.",
            ],
            [
              "Professioneel en consistent",
              "Elke reactie voelt netjes, vriendelijk en passend bij jouw bedrijf.",
            ],
            [
              "Controle waar het telt",
              "Je hoeft niet alles te bekijken — alleen reviews die extra aandacht nodig hebben.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                ✦
              </div>
              <h3 className="text-xl font-semibold text-[#111827]">{title}</h3>
              <p className="mt-3 leading-7 text-[#4B5563]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-sm text-[#6B7280]">Overzicht</div>
                <div className="text-2xl font-semibold text-[#111827]">
                  Resultaten in één oogopslag
                </div>
              </div>
              <div className="rounded-xl bg-emerald-100 px-3 py-2 text-sm text-emerald-700">
                Live
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-[#FFF7ED] p-5">
                <div className="text-sm text-[#9A3412]">Nieuwe reviews</div>
                <div className="mt-2 text-3xl font-semibold text-[#111827]">
                  24
                </div>
              </div>
              <div className="rounded-2xl bg-[#ECFDF5] p-5">
                <div className="text-sm text-[#047857]">Auto geplaatst</div>
                <div className="mt-2 text-3xl font-semibold text-[#111827]">
                  18
                </div>
              </div>
              <div className="rounded-2xl bg-[#FEF2F2] p-5">
                <div className="text-sm text-[#B91C1C]">Controleren</div>
                <div className="mt-2 text-3xl font-semibold text-[#111827]">
                  6
                </div>
              </div>
            </div>

            <div className="mt-6 h-64 rounded-3xl bg-[#F8F1E7] p-6">
              <div className="flex h-full items-end gap-4">
                {[28, 38, 46, 58, 70, 86].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-2xl bg-gradient-to-t from-[#F97316] to-[#FDBA74]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-[#111827] p-6 text-white shadow-sm">
            <div className="text-sm text-slate-400">Instellingen</div>
            <div className="mt-2 text-2xl font-semibold">
              Reacties zoals jij het wilt
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Professioneel en vriendelijk",
                "Korte en duidelijke reacties",
                "Negatieve reviews eerst controleren",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-4"
                >
                  <span className="text-slate-200">{item}</span>
                  <span className="h-6 w-11 rounded-full bg-[#10B981] p-1">
                    <span className="block h-4 w-4 translate-x-5 rounded-full bg-white" />
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-white/5 p-4 text-sm leading-6 text-slate-300">
              Zo blijft alles automatisch lopen, zonder dat je de controle
              verliest op reviews die gevoelig liggen.
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[32px] bg-white p-8 shadow-xl shadow-black/5 ring-1 ring-black/5 md:p-10">
          <div className="text-center">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
              Pricing
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-[#111827] md:text-4xl">
              Simpel geprijsd, makkelijk te testen.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#4B5563]">
              Voor bedrijven die reviews beter willen opvolgen zonder daar extra
              tijd aan kwijt te zijn.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-[#111827] p-8 text-center text-white">
            <div className="text-sm text-slate-400">Starter</div>
            <div className="mt-3 text-5xl font-semibold">
              €49<span className="text-lg text-slate-400">/maand</span>
            </div>

            <div className="mt-6 grid gap-3 text-left text-slate-200 md:grid-cols-2">
              {[
                "Automatische reviewreacties",
                "Negatieve reviews eerst controleren",
                "Tone of voice instellingen",
                "Review inbox per klant",
                "E-mail meldingen",
                "Uitbreidbaar naar meerdere locaties",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/5 px-4 py-3"
                >
                  ✓ {item}
                </div>
              ))}
            </div>

            <button className="mt-8 rounded-2xl bg-[#F97316] px-6 py-3 font-medium text-white hover:bg-orange-500">
              Vraag demo aan
            </button>
          </div>
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
              Laat Replyn het grootste deel automatisch afhandelen en houd alleen
              controle op de reviews die echt aandacht nodig hebben.
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