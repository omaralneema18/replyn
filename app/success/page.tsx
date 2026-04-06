import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#F8F1E7] px-6 py-16 text-[#1F2937]">
      <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-10 shadow-xl shadow-black/5 ring-1 ring-black/5">
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#10B981]">
          Gelukt
        </div>

        <h1 className="mt-3 text-4xl font-semibold text-[#111827]">
          Je aanmelding is ontvangen.
        </h1>

        <p className="mt-4 text-lg leading-8 text-[#4B5563]">
          Top — je proefperiode is gestart. De volgende stap is het instellen van jouw bedrijf en voorkeuren.
        </p>

        <div className="mt-8 space-y-3 text-[#1F2937]">
          <div className="rounded-2xl bg-[#ECFDF5] px-4 py-3">
            ✓ Je account wordt klaargezet
          </div>
          <div className="rounded-2xl bg-[#ECFDF5] px-4 py-3">
            ✓ We stemmen reacties af op jouw bedrijf
          </div>
          <div className="rounded-2xl bg-[#ECFDF5] px-4 py-3">
            ✓ Je kunt direct starten met reviews opvolgen
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <Link
            href="/welcome"
            className="rounded-2xl bg-[#111827] px-6 py-3 font-medium text-white hover:bg-black"
          >
            Ga verder met onboarding
          </Link>

          <Link
            href="/"
            className="rounded-2xl border border-black/10 px-6 py-3 font-medium text-[#111827] hover:bg-[#FFF7ED]"
          >
            Terug naar home
          </Link>
        </div>
      </div>
    </div>
  );
}