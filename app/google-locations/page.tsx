"use client";

import { useState } from "react";
import Link from "next/link";

export default function GoogleLocationsPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const handleLoad = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/google/locations");
      const json = await res.json();
      setData(json);

      if (!res.ok) {
        alert(json.error || "Fout bij ophalen.");
      }
    } catch (error) {
      console.error(error);
      alert("Fout bij ophalen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F1E7] px-6 py-12 text-[#1F2937]">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold text-[#111827]">
            Google locaties
          </h1>
          <Link
            href="/getting-started"
            className="rounded-2xl border border-black/10 px-5 py-3 font-medium hover:bg-white"
          >
            Terug
          </Link>
        </div>

        <button
          onClick={handleLoad}
          disabled={loading}
          className="mt-8 rounded-2xl bg-[#111827] px-6 py-3 font-medium text-white hover:bg-black disabled:opacity-60"
        >
          {loading ? "Laden..." : "Haal locaties op"}
        </button>

        <pre className="mt-8 overflow-auto rounded-3xl bg-white p-6 text-sm shadow-xl shadow-black/5 ring-1 ring-black/5">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}