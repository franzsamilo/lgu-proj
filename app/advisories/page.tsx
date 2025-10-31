"use client";

import { motion } from "motion/react";
import AnimatedList from "../../components/AnimatedList";

export default function AdvisoriesPage() {
  const items = [
    "Traffic rerouting on Magsaysay Ave – Nov 3-5",
    "City Hall half-day on Friday – Staff training",
    "MDRRMO hotline update – Additional numbers",
    "Water service advisory – Valve maintenance",
    "Health advisory – Free flu shots at health centers",
    "Job fair next week – City Gym",
    "Public market renovation schedule",
    "Power outage notice – Zone 3, Nov 10",
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-linear-to-b from-white via-slate-100 to-white text-slate-900 dark:from-[#0a1a3a] dark:via-[#0b1f48] dark:to-[#0a1a3a] dark:text-white">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight"
        >
          Advisories
        </motion.h1>
        <p className="mt-3 text-slate-600 dark:text-zinc-300/90">Latest updates from the LGU.</p>

        <div className="mt-6">
          <AnimatedList items={items} displayScrollbar />
        </div>
      </div>
    </div>
  );
}


