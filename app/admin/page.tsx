import { supabaseAdmin } from "@/lib/supabase-admin";

export default async function AdminPage() {
  const { data: customers, error: customersError } = await supabaseAdmin
    .from("customers")
    .select("*")
    .order("created_at", { ascending: false });

  const { data: onboarding, error: onboardingError } = await supabaseAdmin
    .from("onboarding")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-[#F8F1E7] px-6 py-12 text-[#1F2937]">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-semibold text-[#111827]">
          Klantenoverzicht
        </h1>
        <p className="mt-3 text-lg text-[#4B5563]">
          Hier zie je nieuwe aanmeldingen, betalingen en onboarding info.
        </p>

        {/* CUSTOMERS */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-[#111827]">Klanten</h2>

          <div className="mt-4 overflow-x-auto rounded-[28px] bg-white p-6 shadow-xl shadow-black/5 ring-1 ring-black/5">
            {customersError ? (
              <p className="text-red-600">Fout bij laden van klanten.</p>
            ) : !customers || customers.length === 0 ? (
              <p className="text-[#6B7280]">Nog geen klanten gevonden.</p>
            ) : (
              <table className="min-w-full text-left">
                <thead>
                  <tr className="border-b border-black/10 text-sm text-[#6B7280]">
                    <th className="px-4 py-3">Naam</th>
                    <th className="px-4 py-3">Bedrijf</th>
                    <th className="px-4 py-3">E-mail</th>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Facturatie</th>
                    <th className="px-4 py-3">Locaties</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Aangemaakt</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr
                      key={customer.id}
                      className="border-b border-black/5 text-sm"
                    >
                      <td className="px-4 py-4">{customer.name || "-"}</td>
                      <td className="px-4 py-4">{customer.company || "-"}</td>
                      <td className="px-4 py-4">{customer.email || "-"}</td>
                      <td className="px-4 py-4">{customer.plan || "-"}</td>
                      <td className="px-4 py-4">{customer.billing || "-"}</td>
                      <td className="px-4 py-4">{customer.locations || "-"}</td>
                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            customer.status === "paid"
                              ? "bg-[#ECFDF5] text-[#047857]"
                              : "bg-[#FEF2F2] text-[#B91C1C]"
                          }`}
                        >
                          {customer.status || "unknown"}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        {customer.created_at
                          ? new Date(customer.created_at).toLocaleString("nl-NL")
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* ONBOARDING */}
        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-[#111827]">Onboarding</h2>

          <div className="mt-4 overflow-x-auto rounded-[28px] bg-white p-6 shadow-xl shadow-black/5 ring-1 ring-black/5">
            {onboardingError ? (
              <p className="text-red-600">Fout bij laden van onboarding.</p>
            ) : !onboarding || onboarding.length === 0 ? (
              <p className="text-[#6B7280]">Nog geen onboarding inzendingen gevonden.</p>
            ) : (
              <table className="min-w-full text-left">
                <thead>
                  <tr className="border-b border-black/10 text-sm text-[#6B7280]">
                    <th className="px-4 py-3">Bedrijfsnaam</th>
                    <th className="px-4 py-3">Google naam</th>
                    <th className="px-4 py-3">Branche</th>
                    <th className="px-4 py-3">Locaties</th>
                    <th className="px-4 py-3">Meldingsmail</th>
                    <th className="px-4 py-3">Stijl</th>
                    <th className="px-4 py-3">Aangemaakt</th>
                  </tr>
                </thead>
                <tbody>
                  {onboarding.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-black/5 text-sm align-top"
                    >
                      <td className="px-4 py-4">{item.business_name || "-"}</td>
                      <td className="px-4 py-4">{item.google_name || "-"}</td>
                      <td className="px-4 py-4">{item.industry || "-"}</td>
                      <td className="px-4 py-4">{item.locations || "-"}</td>
                      <td className="px-4 py-4">{item.notification_email || "-"}</td>
                      <td className="max-w-sm px-4 py-4 text-[#4B5563]">
                        {item.style_notes || "-"}
                      </td>
                      <td className="px-4 py-4">
                        {item.created_at
                          ? new Date(item.created_at).toLocaleString("nl-NL")
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}