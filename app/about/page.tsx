"use client";

import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-linear-to-b from-white via-slate-100 to-white text-slate-900 dark:from-[#0a1a3a] dark:via-[#0b1f48] dark:to-[#0a1a3a] dark:text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">About MyLGU</h1>
          <p className="mt-3 text-slate-600 dark:text-zinc-300/90">
            Faster, smarter local government services.
          </p>
        </motion.header>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-black/10 bg-white/80 p-5 dark:border-white/10 dark:bg-white/5"
          >
            <h2 className="text-lg font-semibold">Our Mission</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-zinc-300/90">
              Deliver convenient access to permits, documents, payments, and advisories—anytime, anywhere.
            </p>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-black/10 bg-white/80 p-5 dark:border-white/10 dark:bg-white/5"
          >
            <h2 className="text-lg font-semibold">What You Can Do</h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-zinc-300/90 space-y-1">
              <li>Request clearances and certificates</li>
              <li>Book appointments</li>
              <li>Report issues</li>
              <li>Pay local taxes and fees</li>
            </ul>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-black/10 bg-white/80 p-5 dark:border-white/10 dark:bg-white/5"
          >
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-zinc-300/90">
              City Hall, Magsaysay Ave. <br />
              Mon–Fri, 8:00 AM – 5:00 PM
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}


