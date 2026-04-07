import Link from "next/link";

export default function ConnectGooglePage() {
  return (
    <div className="min-h-screen bg-[#F8F1E7] px-6 py-16 text-[#1F2937]">
      <div className="mx-auto max-w-4xl rounded-[32px] bg-white p-10 shadow-xl shadow-black/5 ring-1 ring-black/5">
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
          Google koppelen
        </div>

        <h1 className="mt-3 text-4xl font-semibold text-[#111827]">
          Zo koppel je jouw Google reviews
        </h1>

        <p className="mt-5 text-lg leading-8 text-[#4B5563]">
          Je hoeft dit maar één keer te doen. Daarna kunnen wij je reviewreacties
          voor je verwerken.
        </p>

        <div className="mt-10 space-y-6">
          <div className="rounded-3xl bg-[#F8F1E7] p-6">
            <div className="text-lg font-semibold text-[#111827]">
              1. Zorg dat je eigenaar bent van je Google Bedrijfsprofiel
            </div>
            <p className="mt-2 text-[#4B5563]">
              Log in op het Google-account waarmee je jouw bedrijf beheert.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F8F1E7] p-6">
            <div className="text-lg font-semibold text-[#111827]">
              2. Stuur ons je bedrijfsnaam en Google-account e-mailadres
            </div>
            <p className="mt-2 text-[#4B5563]">
              Zo weten wij welk profiel gekoppeld moet worden.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F8F1E7] p-6">
            <div className="text-lg font-semibold text-[#111827]">
              3. Wij helpen je verder met de koppeling
            </div>
            <p className="mt-2 text-[#4B5563]">
              In deze fase doen we dit nog begeleid, zodat alles goed staat voordat
              het automatisch draait.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-[#FFF7ED] p-5 text-sm leading-7 text-[#9A3412]">
          Later maken we dit volledig automatisch. Voor nu is dit de snelste en veiligste manier om klanten live te krijgen.
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            href="/getting-started"
            className="rounded-2xl bg-[#111827] px-6 py-3 font-medium text-white hover:bg-black"
          >
            Terug
          </Link>

          <a
            href="mailto:hallo@replyn.nl"
            className="rounded-2xl border border-black/10 px-6 py-3 font-medium text-[#111827] hover:bg-[#FFF7ED]"
          >
            Neem contact op
          </a>
        </div>
      </div>
    </div>
  );
}