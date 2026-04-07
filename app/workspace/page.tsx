"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function WorkspacePage() {
  const [businessName, setBusinessName] = useState("Replyn Demo Bedrijf");
  const [rating, setRating] = useState("5");
  const [review, setReview] = useState(
    "Super vriendelijk geholpen en alles werd duidelijk uitgelegd."
  );
  const [styleNotes, setStyleNotes] = useState(
    "Vriendelijk, professioneel, niet te lang, geen emoji."
  );

  const [reply, setReply] = useState("");
  const [category, setCategory] = useState("");
  const [autopost, setAutopost] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleGenerate = async () => {
    if (!review.trim()) {
      alert("Vul eerst een review in.");
      return;
    }

    try {
      setLoading(true);
      setReply("");
      setCategory("");
      setAutopost(null);

      const res = await fetch("/api/generate-reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessName,
          rating,
          review,
          styleNotes,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Er ging iets mis.");
        return;
      }

      setReply(data.reply || "");
      setCategory(data.category || "");
      setAutopost(
        typeof data.autopost === "boolean" ? data.autopost : null
      );
    } catch (error) {
      console.error(error);
      alert("Genereren mislukt.");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!review || !reply || autopost === null) {
      alert("Genereer eerst een reactie.");
      return;
    }

    try {
      setSaving(true);

      const { error } = await supabase.from("review_replies").insert([
        {
          business_name: businessName,
          rating: Number(rating),
          review_text: review,
          style_notes: styleNotes,
          category,
          autopost,
          reply_text: reply,
          status: autopost ? "ready_to_post" : "concept",
        },
      ]);

      if (error) {
        alert(error.message);
        console.error(error);
        return;
      }

      alert("Opgeslagen in Supabase.");
    } catch (error) {
      console.error(error);
      alert("Opslaan mislukt.");
    } finally {
      setSaving(false);
    }
  };

  const badgeClass =
    category === "positief"
      ? "bg-[#ECFDF5] text-[#047857]"
      : category === "neutraal"
      ? "bg-[#FFF7ED] text-[#9A3412]"
      : "bg-[#FEF2F2] text-[#B91C1C]";

  return (
    <div className="min-h-screen bg-[#F8F1E7] px-6 py-12 text-[#1F2937]">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
              Workspace
            </div>
            <h1 className="mt-2 text-4xl font-semibold text-[#111827]">
              Slimme AI review generator
            </h1>
          </div>

          <Link
            href="/"
            className="rounded-2xl border border-black/10 px-5 py-3 font-medium hover:bg-white"
          >
            Terug
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] bg-white p-6 shadow-xl shadow-black/5 ring-1 ring-black/5">
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-[#111827]">
                  Bedrijfsnaam
                </label>
                <input
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#F97316]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#111827]">
                  Aantal sterren
                </label>
                <select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#F97316]"
                >
                  <option value="5">5 sterren</option>
                  <option value="4">4 sterren</option>
                  <option value="3">3 sterren</option>
                  <option value="2">2 sterren</option>
                  <option value="1">1 ster</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-[#111827]">
                  Review
                </label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="mt-2 h-40 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#F97316]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#111827]">
                  Stijlvoorkeuren
                </label>
                <textarea
                  value={styleNotes}
                  onChange={(e) => setStyleNotes(e.target.value)}
                  className="mt-2 h-32 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#F97316]"
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full rounded-2xl bg-[#111827] px-6 py-4 font-medium text-white hover:bg-black disabled:opacity-60"
              >
                {loading ? "Genereren..." : "Genereer slimme reactie"}
              </button>
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-xl shadow-black/5 ring-1 ring-black/5">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
              Output
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-[#111827]">
              Analyse + reactie
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {category ? (
                <div className={`rounded-full px-4 py-2 text-sm font-medium ${badgeClass}`}>
                  Categorie: {category}
                </div>
              ) : null}

              {autopost !== null ? (
                <div
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    autopost
                      ? "bg-[#ECFDF5] text-[#047857]"
                      : "bg-[#FEF2F2] text-[#B91C1C]"
                  }`}
                >
                  {autopost ? "Automatisch plaatsen" : "Eerst als concept"}
                </div>
              ) : null}
            </div>

            <div className="mt-6 min-h-[260px] rounded-3xl bg-[#F8F1E7] p-5 leading-8 text-[#1F2937]">
              {reply || "Hier verschijnt de gegenereerde reactie."}
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <button
                onClick={handleSave}
                disabled={saving || !reply}
                className="rounded-2xl bg-[#111827] px-4 py-3 font-medium text-white hover:bg-black disabled:opacity-60"
              >
                {saving ? "Opslaan..." : "Opslaan in inbox"}
              </button>

              <button className="rounded-2xl border border-black/10 px-4 py-3 font-medium text-[#111827] hover:bg-[#FFF7ED]">
                Nieuwe poging
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}