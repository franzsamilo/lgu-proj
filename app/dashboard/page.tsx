"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Bell,
  CalendarClock,
  FileText,
  MapPin,
  Megaphone,
  Settings,
  ShieldCheck,
  Ticket,
  User,
  Wallet,
  Phone,
  Building2,
} from "lucide-react";

const services = [
  {
    id: "pay-taxes",
    title: "Pay Taxes",
    description: "Real property, business, and other local dues.",
    icon: Wallet,
    color: "from-emerald-400/15 to-emerald-400/5 border-emerald-400/30 hover:border-emerald-400/60",
  },
  {
    id: "documents",
    title: "Request Documents",
    description: "Barangay clearance, cedula, permits, certificates.",
    icon: FileText,
    color: "from-sky-400/15 to-sky-400/5 border-sky-400/30 hover:border-sky-400/60",
  },
  {
    id: "report",
    title: "Report an Issue",
    description: "Road damage, garbage, lights, safety concerns.",
    icon: Megaphone,
    color: "from-amber-400/15 to-amber-400/5 border-amber-400/30 hover:border-amber-400/60",
  },
  {
    id: "appointments",
    title: "Book Appointment",
    description: "Meet offices for permits or consultations.",
    icon: CalendarClock,
    color: "from-violet-400/15 to-violet-400/5 border-violet-400/30 hover:border-violet-400/60",
  },
  {
    id: "hotlines",
    title: "Emergency Hotlines",
    description: "Police, fire, MDRRMO, rescue contacts.",
    icon: Phone,
    color: "from-rose-400/15 to-rose-400/5 border-rose-400/30 hover:border-rose-400/60",
  },
  {
    id: "map",
    title: "Service Map",
    description: "Offices, barangays, evacuation centers.",
    icon: MapPin,
    color: "from-teal-400/15 to-teal-400/5 border-teal-400/30 hover:border-teal-400/60",
  },
];

const quickActions = [
	{ id: "profile", label: "View Profile", icon: User },
	{ id: "notifications", label: "Notifications", icon: Bell },
	{ id: "tickets", label: "My Requests", icon: Ticket },
	{ id: "settings", label: "Account Settings", icon: Settings },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen w-screen bg-linear-to-b from-[#0a1a3a] via-[#0b1f48] to-[#0a1a3a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
		<motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
			<div>
				<div className="flex items-center gap-2">
					<Building2 className="size-6 text-emerald-300" />
					<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">myLGU</h1>
				</div>
				<p className="mt-1 text-zinc-300/90">All-in-one access to local government services.</p>
			</div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white/10 transition-colors"
            >
              Back to Home
            </Link>
				<button className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors">
					New Request
            </button>
          </div>
        </motion.header>

		<motion.section
			initial={{ opacity: 0, y: 8 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.05, duration: 0.45 }}
			className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5"
		>
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div className="flex items-center gap-3">
					<div className="grid place-items-center size-12 rounded-full bg-white/10">
						<User className="size-5" />
					</div>
					<div>
						<p className="text-sm text-zinc-300/90">Welcome</p>
						<p className="text-lg font-medium">Let’s get things done with myLGU</p>
						<p className="text-sm text-zinc-300/90">Request documents, book appointments, pay dues, or report an issue.</p>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<button className="rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white/10 transition-colors">View Profile</button>
					<button className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors">Start a Request</button>
				</div>
			</div>
		</motion.section>

		<div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h2 className="text-xl font-semibold tracking-tight">Services</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((s, idx) => (
                <ServiceCard key={s.id} index={idx} {...s} />
              ))}
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h2 className="text-xl font-semibold tracking-tight">Quick Actions</h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {quickActions.map((a, idx) => (
                <QuickAction key={a.id} index={idx} {...a} />
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="size-5 text-emerald-300" />
                <div>
                  <p className="font-medium">Verified Account</p>
                  <p className="text-sm text-zinc-300/90">Your identity has been verified for transactions.</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-zinc-300/90">
                <Building2 className="size-4" /> City: Naga (Demo)
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 lg:col-span-2">
            <h3 className="text-lg font-semibold">Recent Requests</h3>
            <ul className="mt-4 space-y-3">
              {[
                { title: "Barangay Clearance", status: "Processing", time: "2h ago" },
                { title: "Business Permit Renewal", status: "Received", time: "1d ago" },
                { title: "Road Repair Report", status: "Queued", time: "3d ago" },
              ].map((r, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span>{r.title}</span>
                  <span className="text-sm text-zinc-300/90">{r.status} • {r.time}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h3 className="text-lg font-semibold">Advisories</h3>
            <div className="mt-4 space-y-3">
              {[
                { title: "Traffic rerouting on Magsaysay Ave", icon: MapPin },
                { title: "City Hall half-day on Friday", icon: CalendarClock },
                { title: "Hotline update for MDRRMO", icon: Phone },
              ].map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                >
                  <a.icon className="size-4 text-emerald-300" />
                  <span className="text-sm text-zinc-200">{a.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

 

type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  index: number;
};

function ServiceCard({ title, description, icon: Icon, color, index }: ServiceCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-2xl border bg-gradient-to-br ${color} p-4 text-left`}
    >
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-white/10 p-2">
          <Icon className="size-5" />
        </div>
        <div>
          <div className="font-medium">{title}</div>
          <p className="mt-1 text-sm text-zinc-300/90">{description}</p>
        </div>
      </div>
      <div className="mt-4 text-sm text-zinc-300/90">Proceed →</div>
    </motion.button>
  );
}

type QuickActionProps = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  index: number;
};

function QuickAction({ label, icon: Icon, index }: QuickActionProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.4 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-left"
    >
      <div className="flex items-center gap-2">
        <Icon className="size-4" />
        <span className="text-sm">{label}</span>
      </div>
    </motion.button>
  );
}


