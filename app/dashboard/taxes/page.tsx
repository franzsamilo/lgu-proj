"use client";

import { useState } from "react";
import Folder from "../../../components/Folder";

type TaxType = {
  id: string;
  label: string;
  color: string;
};

const TAX_TYPES: TaxType[] = [
  { id: "rpt", label: "Real Property Tax", color: "#22d3ee" },
  { id: "business", label: "Business Tax", color: "#a78bfa" },
  { id: "community", label: "Community Tax (Cedula)", color: "#34d399" },
  { id: "penalties", label: "Penalties/Surcharges", color: "#f59e0b" },
  { id: "others", label: "Other Fees", color: "#f472b6" },
];

export default function TaxesPage() {
  const [active, setActive] = useState<TaxType | null>(null);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-linear-to-b from-white via-slate-100 to-white text-slate-900 dark:from-[#0a1a3a] dark:via-[#0b1f48] dark:to-[#0a1a3a] dark:text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Pay Taxes
          </h1>
          <a
            href="/dashboard"
            className="rounded-full border border-slate-300 dark:border-white/30 px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            Back
          </a>
        </div>

        <p className="mt-2 text-zinc-300/90">
          Choose a tax type to proceed. Hover over folders to preview; click to
          open details.
        </p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {TAX_TYPES.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t)}
              className="group flex flex-col items-center gap-2"
            >
              <Folder
                color={t.color}
                size={1.1}
                items={[
                  <div
                    key="1"
                    className="w-full h-full grid place-items-center text-xs text-black/80"
                  >
                    {t.label.split(" ")[0]}
                  </div>,
                  <div
                    key="2"
                    className="w-full h-full grid place-items-center text-xs text-black/80"
                  >
                    Tax
                  </div>,
                  <div
                    key="3"
                    className="w-full h-full grid place-items-center text-xs text-black/80"
                  >
                    Bill
                  </div>,
                ]}
              />
              <span className="text-center text-xs sm:text-sm opacity-90 group-hover:opacity-100">
                {t.label}
              </span>
            </button>
          ))}
        </div>

        {active && (
          <div className="fixed inset-0 z-80 flex items-center justify-center bg-black/60 p-3 sm:p-4">
            <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-black/10 bg-white/90 dark:border-white/10 dark:bg-[#0b1f48]/80 backdrop-blur p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{active.label}</h3>
                <button
                  onClick={() => setActive(null)}
                  className="rounded-full border border-slate-300 dark:border-white/30 px-3 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {active.id === "rpt" && (
                  <>
                    <input
                      placeholder="Taxpayer Name"
                      className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                    />
                    <input
                      placeholder="ARP/TD No."
                      className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                    />
                    <input
                      placeholder="Year"
                      className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                    />
                    <input
                      placeholder="Parcel No."
                      className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                    />
                  </>
                )}
                {active.id === "business" && (
                  <>
                    <input
                      placeholder="Business Name"
                      className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                    />
                    <input
                      placeholder="TIN"
                      className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                    />
                    <input
                      placeholder="Permit No."
                      className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                    />
                    <input
                      placeholder="Tax Due"
                      className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                    />
                  </>
                )}
                {active.id === "community" && (
                  <>
                    <input
                      placeholder="Full Name"
                      className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                    />
                    <input
                      placeholder="Address"
                      className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none sm:col-span-2 dark:bg-white/10 dark:border-white/10"
                    />
                  </>
                )}
                {active.id === "penalties" && (
                  <>
                    <input
                      placeholder="Reference No."
                      className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                    />
                    <input
                      placeholder="Amount"
                      className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                    />
                  </>
                )}
                {active.id === "others" && (
                  <>
                    <input
                      placeholder="Fee Type"
                      className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                    />
                    <input
                      placeholder="Amount"
                      className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                    />
                  </>
                )}
                <textarea
                  placeholder="Remarks (optional)"
                  className="min-h-[100px] w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none sm:col-span-2 dark:bg-white/10 dark:border-white/10"
                />
                <div className="flex items-center gap-2 sm:col-span-2">
                  <button className="rounded-lg border border-black/20 px-3 py-2 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">
                    Attach File
                  </button>
                  <button className="rounded-lg bg-white text-black px-3 py-2 font-medium hover:bg-zinc-200">
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
