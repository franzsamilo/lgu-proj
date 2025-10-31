"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  User,
  Mail,
  Phone,
  Landmark,
  ShieldCheck,
  Lock,
  Palette,
  CalendarClock,
  Ticket,
} from "lucide-react";

type TabKey = "overview" | "requests" | "appointments" | "settings";

export default function ProfilePage() {
  const [active, setActive] = useState<TabKey>("overview");

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-linear-to-b from-white via-slate-100 to-white text-slate-900 dark:from-[#0a1a3a] dark:via-[#0b1f48] dark:to-[#0a1a3a] dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="grid place-items-center size-14 sm:size-16 rounded-full bg-slate-200 dark:bg-white/10">
              <User className="size-7" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">My Profile</h1>
              <p className="text-sm text-slate-600 dark:text-zinc-300/90">Manage your information, preferences, and activity</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-full border border-slate-300 dark:border-white/30 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
              Download Data
            </button>
            <button className="rounded-full bg-white text-black px-3 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors">
              Edit Profile
            </button>
          </div>
        </motion.header>

        {/* Tabs */}
        <div className="mt-6 flex w-full overflow-x-auto gap-2">
          {[
            { key: "overview", label: "Overview" },
            { key: "requests", label: "Requests" },
            { key: "appointments", label: "Appointments" },
            { key: "settings", label: "Settings" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key as TabKey)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm border transition-colors ${
                active === t.key
                  ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-[#0a1a3a] dark:border-white"
                  : "bg-white/80 text-slate-700 border-black/10 hover:bg-black/5 dark:bg-white/5 dark:text-zinc-200 dark:border-white/10 dark:hover:bg-white/10"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6">
          {active === "overview" && <Overview />}
          {active === "requests" && <Requests />}
          {active === "appointments" && <Appointments />}
          {active === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.45 }}
      className={`rounded-2xl border border-black/10 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Overview() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <h2 className="text-lg font-semibold">Profile Information</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field icon={<User className="size-4" />} label="Full Name" value="Juan Dela Cruz" />
          <Field icon={<Mail className="size-4" />} label="Email" value="juan.dela.cruz@example.com" />
          <Field icon={<Phone className="size-4" />} label="Contact" value="0917 123 4567" />
          <Field icon={<Landmark className="size-4" />} label="Address" value="Brgy. San Isidro, City" />
        </div>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold">Account Status</h2>
        <div className="mt-4 space-y-3 text-sm">
          <Tag icon={<ShieldCheck className="size-4 text-emerald-400" />} label="Verified" />
          <Tag icon={<Lock className="size-4 text-sky-400" />} label="2FA Enabled" />
          <Tag icon={<Palette className="size-4 text-violet-400" />} label="Theme: Auto" />
        </div>
      </Card>
      <Card className="lg:col-span-3">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <ul className="mt-3 divide-y divide-black/10 dark:divide-white/10 text-sm">
          {[
            "Requested Barangay Clearance",
            "Booked appointment with Treasurer",
            "Paid Real Property Tax",
            "Updated profile details",
          ].map((item, i) => (
            <li key={i} className="py-3 flex items-center justify-between">
              <span>{item}</span>
              <span className="text-slate-600 dark:text-zinc-300/90">{i + 1}d ago</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

function Requests() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card>
        <h2 className="text-lg font-semibold flex items-center gap-2"><Ticket className="size-4" /> Open Requests</h2>
        <ul className="mt-3 space-y-3 text-sm">
          {[
            { title: "Business Permit Renewal", status: "Processing" },
            { title: "Residency Certificate", status: "Received" },
          ].map((r, i) => (
            <li key={i} className="rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-3 flex items-center justify-between">
              <span>{r.title}</span>
              <span className="text-slate-600 dark:text-zinc-300/90">{r.status}</span>
            </li>
          ))}
        </ul>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold">History</h2>
        <ul className="mt-3 space-y-3 text-sm">
          {[
            { title: "Barangay Clearance", status: "Completed" },
            { title: "Road Repair Report", status: "Closed" },
          ].map((r, i) => (
            <li key={i} className="rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-3 flex items-center justify-between">
              <span>{r.title}</span>
              <span className="text-slate-600 dark:text-zinc-300/90">{r.status}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

function Appointments() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card>
        <h2 className="text-lg font-semibold flex items-center gap-2"><CalendarClock className="size-4" /> Upcoming</h2>
        <ul className="mt-3 space-y-3 text-sm">
          {[
            { title: "Treasurer – Payment", when: "Nov 10, 9:30 AM" },
            { title: "Business Permits – Verification", when: "Nov 14, 1:00 PM" },
          ].map((a, i) => (
            <li key={i} className="rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-3 flex items-center justify-between">
              <span>{a.title}</span>
              <span className="text-slate-600 dark:text-zinc-300/90">{a.when}</span>
            </li>
          ))}
        </ul>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold">Past</h2>
        <ul className="mt-3 space-y-3 text-sm">
          {[
            { title: "Assessor – Assessment", when: "Oct 20, 10:00 AM" },
          ].map((a, i) => (
            <li key={i} className="rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-3 flex items-center justify-between">
              <span>{a.title}</span>
              <span className="text-slate-600 dark:text-zinc-300/90">{a.when}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

function Settings() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <h2 className="text-lg font-semibold">Personal Details</h2>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <input placeholder="Full Name" className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10" />
          <input placeholder="Email" className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10" />
          <input placeholder="Contact" className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10" />
          <input placeholder="Address" className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none sm:col-span-2 dark:bg-white/10 dark:border-white/10" />
        </div>
        <div className="mt-3 flex items-center gap-2">
          <button className="rounded-full border border-slate-300 dark:border-white/30 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors">Cancel</button>
          <button className="rounded-full bg-white text-black px-3 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors">Save Changes</button>
        </div>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold">Security</h2>
        <div className="mt-3 space-y-2 text-sm">
          <ToggleRow label="Two-factor authentication" defaultChecked />
          <ToggleRow label="Email notifications" defaultChecked />
          <ToggleRow label="Login alerts" />
        </div>
      </Card>
    </div>
  );
}

function Field({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-3">
      <div className="text-xs text-slate-600 dark:text-zinc-400 flex items-center gap-2">
        {icon}
        {label}
      </div>
      <div className="mt-1 text-sm">{value}</div>
    </div>
  );
}

function Tag({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function ToggleRow({ label, defaultChecked = false }: { label: string; defaultChecked?: boolean }) {
  return (
    <label className="flex items-center justify-between rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2">
      <span className="text-sm">{label}</span>
      <input type="checkbox" defaultChecked={defaultChecked} className="h-4 w-4" />
    </label>
  );
}


