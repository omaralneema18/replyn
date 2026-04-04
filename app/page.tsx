export default function Home() {
  const reviews = [
    {
      id: 1,
      name: "Restaurant De Haven",
      rating: 5,
      text: "Heerlijke service en super vriendelijk personeel.",
      reply:
        "Wat fijn om te lezen, dankjewel voor je mooie woorden. We doen elke dag ons best om iedereen een warme en fijne ervaring te geven, dus het betekent veel dat je dat zo hebt ervaren. Hopelijk mogen we je snel weer verwelkomen.",
      status: "Automatisch geplaatst",
    },
    {
      id: 2,
      name: "Studio Bloom",
      rating: 2,
      text: "Afspraak liep uit en communicatie kon beter.",
      reply:
        "Bedankt dat je de tijd hebt genomen om dit met ons te delen. Het spijt ons dat je afspraak is uitgelopen en dat de communicatie niet was zoals je van ons mocht verwachten. We nemen je feedback serieus en verbeteren dit graag, dus neem gerust contact met ons op zodat we het netjes met je kunnen oplossen.",
      status: "Wacht op controle",
    },
    {
      id: 3,
      name: "Dental Care",
      rating: 4,
      text: "Netjes geholpen en duidelijke uitleg gekregen.",
      reply:
        "Dankjewel voor je review. Fijn om te horen dat je je goed geholpen voelde en dat alles duidelijk werd uitgelegd. We waarderen je vertrouwen enorm en staan graag weer voor je klaar.",
      status: "Concept klaar",
    },
  ];

  const stars = (count: number) => "★".repeat(count) + "☆".repeat(5 - count);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-200">
              R
            </div>
            <div>
              <div className="text-lg font-semibold text-slate-900">Replyn</div>
              <div className="text-xs text-slate-500">
                Automatisch reviewbeheer
              </div>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <a href="#hoe-het-werkt" className="hover:text-slate-900">
              Hoe het werkt
            </a>
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#pricing" className="hover:text-slate-900">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
              Inloggen
            </button>
            <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-200 hover:bg-blue-500">
              Vraag demo aan
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_35%),radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_25%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              Reageer sneller op Google reviews
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Professionele reacties op reviews, automatisch en in jouw stijl.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Replyn helpt bedrijven automatisch reageren op Google reviews met
              nette, menselijke antwoorden die passen bij jouw merk.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white shadow-xl shadow-blue-200 hover:bg-blue-500">
                Vraag demo aan
              </button>
              <button className="rounded-2xl border border-slate-300 px-6 py-3 font-medium text-slate-700 hover:bg-slate-50">
                Bekijk voorbeeld
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
              <div>Geen technische kennis nodig</div>
              <div>Werkt voor lokale bedrijven</div>
              <div>Meer rust en snellere reacties</div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200">
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Dashboard</div>
                    <div className="text-xl font-semibold text-slate-900">
                      Nieuwe reviews
                    </div>
                  </div>
                  <div className="rounded-xl bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
                    +18% snellere reactie
                  </div>
                </div>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="rounded-2xl border border-slate-200 bg-white p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="font-medium text-slate-900">
                            {review.name}
                          </div>
                          <div className="mt-1 text-amber-500">
                            {stars(review.rating)}
                          </div>
                          <div className="mt-3 text-sm text-slate-600">
                            {review.text}
                          </div>
                        </div>
                        <span className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                          {review.status}
                        </span>
                      </div>

                      <div className="mt-4 rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-blue-100">
                        {review.reply}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hoe-het-werkt" className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
            Hoe het werkt
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">
            Van nieuwe review naar professioneel antwoord in drie simpele stappen.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "1. Nieuwe review komt binnen",
              "Replyn haalt nieuwe reviews op zodra ze binnenkomen.",
            ],
            [
              "2. AI schrijft een reactie",
              "Op basis van sterren, sentiment en jouw stijl wordt automatisch een passend antwoord gemaakt.",
            ],
            [
              "3. Klaarzetten of automatisch plaatsen",
              "Jij bepaalt of reacties direct geplaatst worden of eerst gecontroleerd moeten worden.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
            Features
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">
            Alles wat je nodig hebt om reviewbeheer slimmer te maken.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "Menselijke AI-reacties",
              "Geen stijve standaardteksten, maar nette reacties die echt professioneel aanvoelen.",
            ],
            [
              "Controle wanneer jij dat wilt",
              "Kies zelf welke reviews automatisch geplaatst worden en welke eerst nagekeken moeten worden.",
            ],
            [
              "Gemaakt voor groei",
              "Geschikt voor één bedrijf, maar ook uitbreidbaar naar meerdere klanten of locaties.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                ✦
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-500">Inzicht</div>
                <div className="text-2xl font-semibold text-slate-900">
                  Resultaten in één overzicht
                </div>
              </div>
              <div className="rounded-xl bg-blue-50 px-3 py-2 text-sm text-blue-700">
                Live
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-sm text-slate-500">Nieuwe reviews</div>
                <div className="mt-2 text-3xl font-semibold text-slate-900">
                  24
                </div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-sm text-slate-500">Auto geplaatst</div>
                <div className="mt-2 text-3xl font-semibold text-slate-900">
                  18
                </div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-sm text-slate-500">Openstaand</div>
                <div className="mt-2 text-3xl font-semibold text-slate-900">
                  6
                </div>
              </div>
            </div>

            <div className="mt-6 h-64 rounded-3xl bg-gradient-to-br from-slate-100 to-white p-6">
              <div className="flex h-full items-end gap-4">
                {[30, 42, 48, 60, 74, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-2xl bg-gradient-to-t from-blue-500 to-sky-400"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">Instellingen</div>
            <div className="mt-2 text-2xl font-semibold text-slate-900">
              Tone of voice
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Professioneel en vriendelijk",
                "Kort en duidelijk",
                "Bij klachten: excuses en contactmogelijkheid",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-4"
                >
                  <span className="text-slate-700">{item}</span>
                  <span className="h-6 w-11 rounded-full bg-blue-600 p-1">
                    <span className="block h-4 w-4 translate-x-5 rounded-full bg-white" />
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-blue-50 p-4 text-sm leading-6 text-slate-700">
              Jij bepaalt zelf hoe Replyn reageert: formeel, vriendelijk, kort of
              juist persoonlijker. Zo past elke reactie bij het bedrijf.
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200 md:p-10">
          <div className="text-center">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
              Pricing
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">
              Simpel geprijsd, klaar om te testen.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Voor bedrijven die sneller willen reageren op reviews zonder daar
              elke dag tijd aan kwijt te zijn.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
            <div className="text-sm text-slate-500">Starter</div>
            <div className="mt-3 text-5xl font-semibold text-slate-950">
              €49<span className="text-lg text-slate-500">/maand</span>
            </div>

            <div className="mt-6 grid gap-3 text-left text-slate-700 md:grid-cols-2">
              {[
                "Onbeperkt AI conceptreacties",
                "Review inbox per klant",
                "Eigen tone of voice",
                "Handmatige of automatische plaatsing",
                "E-mail meldingen",
                "Uitbreidbaar naar meerdere locaties",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white px-4 py-3 shadow-sm"
                >
                  ✓ {item}
                </div>
              ))}
            </div>

            <button className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-200 hover:bg-blue-500">
              Vraag demo aan
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-6">
        <div className="rounded-[32px] bg-slate-950 px-8 py-10 text-white md:px-12">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.2em] text-blue-300">
              Klaar om te starten?
            </div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Laat zien dat je reviews serieus neemt, zonder dat het je tijd kost.
            </h2>
            <p className="mt-4 text-slate-300">
              Gebruik Replyn om sneller, netter en consistenter te reageren op
              nieuwe Google reviews.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500">
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