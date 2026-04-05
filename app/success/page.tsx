export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#F8F1E7] px-6 py-16 text-[#1F2937]">
      <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-10 shadow-xl shadow-black/5 ring-1 ring-black/5">
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#10B981]">
          Succes
        </div>
        <h1 className="mt-3 text-4xl font-semibold text-[#111827]">
          Je betaling is gestart.
        </h1>
        <p className="mt-4 text-lg leading-8 text-[#4B5563]">
          Top. De volgende stap is dat we je account en onboarding koppelen aan je betaling.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-2xl bg-[#111827] px-6 py-3 font-medium text-white hover:bg-black"
        >
          Terug naar home
        </a>
      </div>
    </div>
  );
}