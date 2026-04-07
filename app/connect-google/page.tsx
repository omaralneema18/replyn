import Link from "next/link";

export default function ConnectGooglePage() {
  return (
    <div className="min-h-screen bg-[#F8F1E7] px-6 py-16 text-[#1F2937]">
      <div className="mx-auto max-w-4xl rounded-[32px] bg-white p-10 shadow-xl shadow-black/5 ring-1 ring-black/5">
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
          Google koppelen
        </div>

        <h1 className="mt-3 text-4xl font-semibold text-[#111827]">
          Koppel jouw Google Bedrijfsprofiel
        </h1>

        <p className="mt-5 text-lg leading-8 text-[#4B5563]">
          Klik hieronder, log in met het Google-account waarmee je jouw bedrijf beheert
          en geef toestemming. Daarna kunnen we de koppeling verder automatiseren.
        </p>

        <div className="mt-10 rounded-3xl bg-[#F8F1E7] p-6">
          <div className="text-lg font-semibold text-[#111827]">
            Wat gebeurt er hierna?
          </div>
          <div className="mt-4 space-y-3 text-[#4B5563]">
            <p>• Je logt in met Google</p>
            <p>• Je geeft toegang aan Replyn</p>
            <p>• Wij slaan de koppeling veilig op</p>
            <p>• Daarna bouwen we de automatische reviewverwerking verder af</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/api/google/start"
            className="rounded-2xl bg-[#F97316] px-6 py-3 font-medium text-white hover:bg-[#EA580C]"
          >
            Koppel met Google
          </a>

          <Link
            href="/getting-started"
            className="rounded-2xl border border-black/10 px-6 py-3 font-medium text-[#111827] hover:bg-[#FFF7ED]"
          >
            Terug
          </Link>
        </div>
      </div>
    </div>
  );
}