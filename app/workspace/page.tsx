"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function WorkspacePage() {
  const [businessName, setBusinessName] = useState("Replyn Demo Bedrijf");
  const [rating, setRating] = useState("5");
  const [review, setReview] = useState("");
  const [styleNotes, setStyleNotes] = useState(
    "Vriendelijk, professioneel, niet te lang, geen emoji."
  );
  const [notificationEmail, setNotificationEmail] = useState("");

  const [reply, setReply] = useState("");
  const [category, setCategory] = useState("");
  const [autopost, setAutopost] = useState<boolean | null>(null);
  const [mailSent, setMailSent] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadLatestOnboarding = async () => {
      const { data } = await supabase
        .from("onboarding")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (data) {
        if (data.business_name) setBusinessName(data.business_name);
        if (data.style_notes) setStyleNotes(data.style_notes);
        if (data.notification_email) setNotificationEmail(data.notification_email);
      }
    };

    loadLatestOnboarding();
  }, []);

  const handleProcess = async () => {
    if (!review.trim()) {
      alert("Vul eerst een review in.");
      return;
    }

    try {
      setLoading(true);
      setReply("");
      setCategory("");
      setAutopost(null);
      setMailSent(null);

      const res = await fetch("/api/process-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessName,
          rating,
          review,
          styleNotes,
          notificationEmail,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Er ging iets mis.");
        return;
      }

      setReply(data.reply || "");
      setCategory(data.category || "");
      setAutopost(data.autopost);
      setMailSent(data.mailSent);
    } catch (error) {
      console.error(error);
      alert("Verwerken mislukt.");
    } finally {
      setLoading(false);
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
              Interne test
            </div>
            <h1 className="mt-2 text-4xl font-semibold text-[#111827]">
              Review engine
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
              <input
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Bedrijfsnaam"
                className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#F97316]"
              />

              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#F97316]"
              >
                <option value="5">5 sterren</option>
                <option value="4">4 sterren</option>
                <option value="3">3 sterren</option>
                <option value="2">2 sterren</option>
                <option value="1">1 ster</option>
              </select>

              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Plak review hier"
                className="h-40 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#F97316]"
              />

              <textarea
                value={styleNotes}
                onChange={(e) => setStyleNotes(e.target.value)}
                placeholder="Stijlvoorkeuren"
                className="h-28 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#F97316]"
              />

              <input
                value={notificationEmail}
                onChange={(e) => setNotificationEmail(e.target.value)}
                placeholder="Meldingsmail"
                className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#F97316]"
              />

              <button
                onClick={handleProcess}
                disabled={loading}
                className="w-full rounded-2xl bg-[#111827] px-6 py-4 font-medium text-white hover:bg-black disabled:opacity-60"
              >
                {loading ? "Verwerken..." : "Verwerk review"}
              </button>
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-xl shadow-black/5 ring-1 ring-black/5">
            <h2 className="text-2xl font-semibold text-[#111827]">Output</h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {category ? (
                <div className={`rounded-full px-4 py-2 text-sm font-medium ${badgeClass}`}>
                  {category}
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
                  {autopost ? "Automatisch" : "Eerst mailen"}
                </div>
              ) : null}

              {mailSent !== null ? (
                <div
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    mailSent
                      ? "bg-[#ECFDF5] text-[#047857]"
                      : "bg-[#FFF7ED] text-[#9A3412]"
                  }`}
                >
                  {mailSent ? "Mail verstuurd" : "Geen mail verstuurd"}
                </div>
              ) : null}
            </div>

            <div className="mt-6 min-h-[260px] rounded-3xl bg-[#F8F1E7] p-5 leading-8 text-[#1F2937]">
              {reply || "Hier verschijnt de reactie."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}