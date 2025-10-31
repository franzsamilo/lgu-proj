"use client";

import { motion } from "motion/react";
import { CalendarClock, FileText, MapPin, Megaphone, Phone, Wallet } from "lucide-react";
import Link from "next/link";

const svc = [
  { id: "pay-taxes", title: "Pay Taxes", desc: "Real property, business, community tax.", icon: Wallet, href: "/dashboard/taxes", color: "from-emerald-400/15 to-emerald-400/5 border-emerald-400/30 hover:border-emerald-400/60" },
  { id: "documents", title: "Request Documents", desc: "Clearances, certificates, permits.", icon: FileText, href: "/dashboard", color: "from-sky-400/15 to-sky-400/5 border-sky-400/30 hover:border-sky-400/60" },
  { id: "appointments", title: "Book Appointment", desc: "Meet offices for permits or consults.", icon: CalendarClock, href: "/dashboard", color: "from-violet-400/15 to-violet-400/5 border-violet-400/30 hover:border-violet-400/60" },
  { id: "hotlines", title: "Emergency Hotlines", desc: "Police, fire, rescue contacts.", icon: Phone, href: "/dashboard", color: "from-rose-400/15 to-rose-400/5 border-rose-400/30 hover:border-rose-400/60" },
  { id: "report", title: "Report an Issue", desc: "Roads, garbage, lights, safety.", icon: Megaphone, href: "/dashboard", color: "from-amber-400/15 to-amber-400/5 border-amber-400/30 hover:border-amber-400/60" },
  { id: "map", title: "Service Map", desc: "Offices, barangays, centers.", icon: MapPin, href: "/dashboard", color: "from-teal-400/15 to-teal-400/5 border-teal-400/30 hover:border-teal-400/60" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-linear-to-b from-white via-slate-100 to-white text-slate-900 dark:from-[#0a1a3a] dark:via-[#0b1f48] dark:to-[#0a1a3a] dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight"
        >
          Services
        </motion.h1>
        <p className="mt-3 text-slate-600 dark:text-zinc-300/90">Explore available services below.</p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {svc.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className={`rounded-2xl border bg-linear-to-br ${s.color} p-4`}
            >
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-slate-200 dark:bg-white/10 p-2">
                  <s.icon className="size-5" />
                </div>
                <div>
                  <div className="font-medium">{s.title}</div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-zinc-300/90">{s.desc}</p>
                </div>
              </div>
              <div className="mt-4">
                <Link href={s.href} className="text-sm font-medium text-slate-800 hover:underline dark:text-white">
                  Open →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


