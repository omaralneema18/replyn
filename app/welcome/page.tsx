"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function WelcomePage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    businessName: "",
    googleName: "",
    industry: "",
    locations: "",
    notificationEmail: "",
    styleNotes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!form.businessName || !form.googleName || !form.notificationEmail) {
      alert("Vul minimaal bedrijfsnaam, Google naam en e-mail voor meldingen in.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.from("onboarding").insert([
        {
          business_name: form.businessName,
          google_name: form.googleName,
          industry: form.industry,
          locations: form.locations,
          notification_email: form.notificationEmail,
          style_notes: form.styleNotes,
        },
      ]);

      if (error) {
        alert("Opslaan onboarding mislukt.");
        console.error(error);
        return;
      }

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Er ging iets mis bij het versturen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F1E7] px-6 py-12 text-[#1F2937]">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[32px] bg-white p-8 shadow-xl shadow-black/5 ring-1 ring-black/5 md:p-10">
          {!submitted ? (
            <>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F97316]">
                Onboarding
              </div>

              <h1 className="mt-3 text-4xl font-semibold text-[#111827]">
                Stel je account in
              </h1>

              <p className="mt-4 text-lg leading-8 text-[#4B5563]">
                Geef de basis door, dan zorgen wij dat jouw account en reacties goed worden ingericht.
              </p>

              <div className="mt-8 space-y-5">
                <input
                  name="businessName"
                  placeholder="Bedrijfsnaam"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#F97316]"
                />

                <input
                  name="googleName"
                  placeholder="Naam op Google (exact)"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#F97316]"
                />

                <input
                  name="industry"
                  placeholder="Branche"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#F97316]"
                />

                <input
                  name="locations"
                  placeholder="Aantal locaties"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#F97316]"
                />

                <input
                  name="notificationEmail"
                  placeholder="E-mail voor meldingen"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#F97316]"
                />

                <textarea
                  name="styleNotes"
                  placeholder="Hoe moeten reacties klinken?"
                  onChange={handleChange}
                  className="h-40 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#F97316]"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="mt-8 w-full rounded-2xl bg-[#111827] px-6 py-4 text-white"
              >
                {loading ? "Bezig..." : "Account instellen"}
              </button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-semibold text-[#111827]">
                Opgeslagen 🎉
              </h2>

              <p className="mt-4 text-lg text-[#4B5563]">
                Je onboarding staat nu in Supabase.
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/"
                  className="rounded-2xl bg-[#111827] px-6 py-3 font-medium text-white hover:bg-black"
                >
                  Terug naar home
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}