"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
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
  Landmark,
} from "lucide-react";
import CardNav from "../../components/CardNav";
import Dock from "../../components/Dock";
import Stepper, { Step } from "../../components/Stepper";
import AnimatedList from "../../components/AnimatedList";
import Folder from "../../components/Folder";
import DomeGallery from "../../components/DomeGallery";
import FlowingMenu from "../../components/FlowingMenu";

const services = [
  {
    id: "pay-taxes",
    title: "Pay Taxes",
    description: "Real property, business, and other local dues.",
    icon: Wallet,
    color:
      "from-emerald-400/15 to-emerald-400/5 border-emerald-400/30 hover:border-emerald-400/60",
  },
  {
    id: "documents",
    title: "Request Documents",
    description: "Barangay clearance, cedula, permits, certificates.",
    icon: FileText,
    color:
      "from-sky-400/15 to-sky-400/5 border-sky-400/30 hover:border-sky-400/60",
  },
  {
    id: "report",
    title: "Report an Issue",
    description: "Road damage, garbage, lights, safety concerns.",
    icon: Megaphone,
    color:
      "from-amber-400/15 to-amber-400/5 border-amber-400/30 hover:border-amber-400/60",
  },
  {
    id: "appointments",
    title: "Book Appointment",
    description: "Meet offices for permits or consultations.",
    icon: CalendarClock,
    color:
      "from-violet-400/15 to-violet-400/5 border-violet-400/30 hover:border-violet-400/60",
  },
  {
    id: "hotlines",
    title: "Emergency Hotlines",
    description: "Police, fire, MDRRMO, rescue contacts.",
    icon: Phone,
    color:
      "from-rose-400/15 to-rose-400/5 border-rose-400/30 hover:border-rose-400/60",
  },
  {
    id: "map",
    title: "Service Map",
    description: "Offices, barangays, evacuation centers.",
    icon: MapPin,
    color:
      "from-teal-400/15 to-teal-400/5 border-teal-400/30 hover:border-teal-400/60",
  },
];

const quickActions = [
  { id: "profile", label: "View Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "tickets", label: "My Requests", icon: Ticket },
  { id: "settings", label: "Account Settings", icon: Settings },
];

export default function DashboardPage() {
  const router = useRouter();
  const [showDocs, setShowDocs] = useState(false);
  const [showAppt, setShowAppt] = useState(false);
  const [showHotlines, setShowHotlines] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showStepper, setShowStepper] = useState(false);
  const newsItems = [
    {
      link: "/advisories/traffic",
      text: "Traffic rerouting on Magsaysay Ave",
      image:
        "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      link: "/advisories/office-hours",
      text: "City Hall half-day on Friday",
      image:
        "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?q=80&w=1200&auto=format&fit=crop",
    },
    {
      link: "/advisories/hotlines",
      text: "MDRRMO hotline update",
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    },
  ];
  const cardNavItems = [
    {
      label: "Services",
      bgColor: "#0f172a",
      textColor: "#ffffff",
      links: [
        {
          label: "Browse Services",
          href: "/services",
          ariaLabel: "Browse services",
        },
        {
          label: "New Request",
          href: "/requests/new",
          ariaLabel: "Create new request",
        },
      ],
    },
    {
      label: "My Requests",
      bgColor: "#111827",
      textColor: "#ffffff",
      links: [
        {
          label: "View Requests",
          href: "/requests",
          ariaLabel: "View requests",
        },
        {
          label: "Track Status",
          href: "/requests/track",
          ariaLabel: "Track status",
        },
      ],
    },
    {
      label: "About LGU",
      bgColor: "#0b1f48",
      textColor: "#ffffff",
      links: [
        { label: "Information", href: "/about", ariaLabel: "About MyLGU" },
        { label: "Contact", href: "/contact", ariaLabel: "Contact" },
      ],
    },
  ];

  const dockItems = [
    {
      icon: <Wallet className="h-5 w-5 text-slate-800 dark:text-white" />,
      label: "Pay",
      onClick: () => (window.location.href = "/payments"),
    },
    {
      icon: <FileText className="h-5 w-5 text-slate-800 dark:text-white" />,
      label: "Docs",
      onClick: () => (window.location.href = "/requests"),
    },
    {
      icon: (
        <CalendarClock className="h-5 w-5 text-slate-800 dark:text-white" />
      ),
      label: "Book",
      onClick: () => (window.location.href = "/appointments"),
    },
    {
      icon: <Megaphone className="h-5 w-5 text-slate-800 dark:text-white" />,
      label: "Report",
      onClick: () => (window.location.href = "/report"),
    },
    {
      icon: <User className="h-5 w-5 text-slate-800 dark:text-white" />,
      label: "Me",
      onClick: () => (window.location.href = "/profile"),
    },
  ];
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-linear-to-b from-white via-slate-100 to-white text-slate-900 dark:from-[#0a1a3a] dark:via-[#0b1f48] dark:to-[#0a1a3a] dark:text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-8 md:py-10 pb-24 md:pb-10">
        {/* Quick actions - desktop overlay */}
        <div className="hidden md:block">
          <CardNav
            logoAlt="MyLGU"
            brandLabel="MyLGU"
            logoIcon={
              <Landmark className="h-6 w-6 text-slate-800 dark:text-white" />
            }
            items={cardNavItems}
          />
        </div>

        {/* Quick actions - mobile dock */}
        <div className="md:hidden fixed inset-x-0 bottom-0 z-60">
          <Dock
            items={dockItems}
            className="border-black/10 bg-white/90 dark:border-white/10 dark:bg-[#0b1f48]/80 backdrop-blur"
          />
        </div>
        {/* Mobile header */}
        <div className="md:hidden mb-4 flex items-center justify-center gap-2">
          <Landmark className="h-6 w-6 text-slate-800 dark:text-white" />
          <span className="text-lg font-semibold tracking-tight">MyLGU</span>
        </div>
        {/* Header removed; CardNav serves as the primary header on desktop */}

        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.45 }}
          className="mt-10 md:mt-28 rounded-2xl border border-black/10 bg-white/80 dark:border-white/10 dark:bg-white/5 p-4 sm:p-5"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center size-10 sm:size-12 rounded-full bg-slate-200 dark:bg-white/10">
                <User className="size-5" />
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-zinc-300/90">
                  Welcome
                </p>
                <p className="text-base sm:text-lg font-medium">
                  Let’s get things done with myLGU
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300/90">
                  Request documents, book appointments, pay dues, or report an
                  issue.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => router.push("/profile")}
                className="rounded-full border border-slate-300 dark:border-white/30 px-3 py-2 text-sm hover:bg_black/5 dark:hover:bg-white/10 transition-colors"
              >
                View Profile
              </button>
              <button
                onClick={() => setShowStepper(true)}
                className="rounded-full bg-white text-black px-3 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors"
              >
                Start a Request
              </button>
            </div>
          </div>
        </motion.section>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:col-span-3"
          >
            <h2 className="text-xl font-semibold tracking-tight">Services</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((s, idx) => (
                <ServiceCard
                  key={s.id}
                  index={idx}
                  {...s}
                  onClick={() => {
                    switch (s.id) {
                      case "pay-taxes":
                        router.push("/dashboard/taxes");
                        break;
                      case "documents":
                        setShowDocs(true);
                        break;
                      case "appointments":
                        setShowAppt(true);
                        break;
                      case "hotlines":
                        setShowHotlines(true);
                        break;
                      case "report":
                        setShowReport(true);
                        break;
                      case "map":
                        setShowMap(true);
                        break;
                    }
                  }}
                />
              ))}
            </div>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          <div className="rounded-2xl border border-black/10 bg-white/80 dark:border-white/10 dark:bg-white/5 p-4 lg:col-span-2">
            <h3 className="text-lg font-semibold">Recent Requests</h3>
            <ul className="mt-4 space-y-3">
              {[
                {
                  title: "Barangay Clearance",
                  status: "Processing",
                  time: "2h ago",
                },
                {
                  title: "Business Permit Renewal",
                  status: "Received",
                  time: "1d ago",
                },
                {
                  title: "Road Repair Report",
                  status: "Queued",
                  time: "3d ago",
                },
              ].map((r, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between rounded-xl border border-black/10 bg-white/80 dark:border-white/10 dark:bg-white/5 px-4 py-3"
                >
                  <span>{r.title}</span>
                  <span className="text-sm text-slate-600 dark:text-zinc-300/90">
                    {r.status} • {r.time}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/80 dark:border-white/10 dark:bg-white/5 p-4">
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
                  className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/80 dark:border-white/10 dark:bg-white/5 px-3 py-3"
                >
                  <a.icon className="size-4 text-emerald-300" />
                  <span className="text-sm text-slate-700 dark:text-zinc-200">
                    {a.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        {/* News Highlights - FlowingMenu */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="hidden md:block mt-10 rounded-2xl border border-black/10 bg-white/80 dark:border-white/10 dark:bg-white/5 overflow-hidden"
        >
          <h3 className="px-4 pt-4 text-lg font-semibold">
            <a href="/advisories" className="hover:underline">
              Highlights
            </a>
          </h3>
          <div className="h-[220px] sm:h-[240px]">
            <FlowingMenu items={newsItems} />
          </div>
        </motion.section>
      </div>

      {showStepper && (
        <div className="fixed inset-0 z-80 flex items-center justify-center bg-black/60 p-3 sm:p-4">
          <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-black/10 bg-white/90 dark:border-white/10 dark:bg-[#0b1f48]/80 backdrop-blur p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Start a Request</h3>
              <button
                onClick={() => setShowStepper(false)}
                className="rounded-full border border-slate-300 dark:border-white/30 px-3 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
            <div className="mt-4">
              <Stepper
                initialStep={1}
                onFinalStepCompleted={() => setShowStepper(false)}
                nextButtonText="Next"
              >
                <Step>
                  <div className="space-y-2">
                    <p className="text-slate-600 dark:text-zinc-300/90">
                      Choose a request type:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "Barangay Clearance",
                        "Business Permit Renewal",
                        "Residency Certificate",
                        "Real Property Tax Payment",
                      ].map((t) => (
                        <button
                          key={t}
                          className="rounded-xl border border-black/10 bg-white px-3 py-2 text-left hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 transition-colors"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </Step>
                <Step>
                  <div className="space-y-2">
                    <p className="text-slate-600 dark:text-zinc-300/90">
                      Enter basic details:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        placeholder="Full Name"
                        className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                      />
                      <input
                        placeholder="Contact Number"
                        className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                      />
                      <input
                        placeholder="Address"
                        className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none sm:col-span-2 dark:bg-white/10 dark:border-white/10"
                      />
                    </div>
                  </div>
                </Step>
                <Step>
                  <div className="space-y-2">
                    <p className="text-slate-600 dark:text-zinc-300/90">
                      Upload supporting documents (optional):
                    </p>
                    <div className="rounded-xl border border-dashed border-black/20 bg-white p-6 text-center dark:border-white/20 dark:bg-white/5">
                      Drop files here
                    </div>
                  </div>
                </Step>
                <Step>
                  <div className="space-y-2">
                    <p className="text-slate-600 dark:text-zinc-300/90">
                      Review and submit
                    </p>
                    <p className="text-sm text-slate-600 dark:text-zinc-300/90">
                      We’ll route your request to the appropriate office.
                    </p>
                  </div>
                </Step>
              </Stepper>
            </div>
          </div>
        </div>
      )}
      {/* Pay Taxes modal removed; navigates to /dashboard/taxes */}

      {/* Request Documents - Stepper */}
      {showDocs && (
        <div className="fixed inset-0 z-80 flex items-center justify-center bg-black/60 p-3 sm:p-4">
          <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-black/10 bg-white/90 dark:border-white/10 dark:bg-[#0b1f48]/80 backdrop-blur p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Request Documents</h3>
              <button
                onClick={() => setShowDocs(false)}
                className="rounded-full border border-slate-300 dark:border-white/30 px-3 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
            <div className="mt-4">
              <Stepper
                initialStep={1}
                onFinalStepCompleted={() => setShowDocs(false)}
                nextButtonText="Next"
              >
                <Step>
                  <div className="space-y-2">
                    <p className="text-slate-600 dark:text-zinc-300/90">
                      Select document type:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "Barangay Clearance",
                        "Cedula",
                        "Business Permit",
                        "Residency Certificate",
                      ].map((t) => (
                        <button
                          key={t}
                          className="rounded-xl border border-black/10 bg-white px-3 py-2 text-left hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 transition-colors"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </Step>
                <Step>
                  <div className="space-y-2">
                    <p className="text-slate-600 dark:text-zinc-300/90">
                      Applicant details:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        placeholder="Full Name"
                        className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                      />
                      <input
                        placeholder="Contact Number"
                        className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                      />
                      <input
                        placeholder="Purpose"
                        className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none sm:col-span-2 dark:bg-white/10 dark:border-white/10"
                      />
                    </div>
                  </div>
                </Step>
                <Step>
                  <div className="space-y-2">
                    <p className="text-slate-600 dark:text-zinc-300/90">
                      Pickup/Delivery:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button className="rounded-lg border border-black/10 bg-white px-3 py-2 hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                        Pickup at City Hall
                      </button>
                      <button className="rounded-lg border border-black/10 bg-white px-3 py-2 hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                        Deliver to Address
                      </button>
                    </div>
                  </div>
                </Step>
                <Step>
                  <div className="space-y-2">
                    <p className="text-slate-600 dark:text-zinc-300/90">
                      Review and submit
                    </p>
                    <p className="text-sm text-slate-600 dark:text-zinc-300/90">
                      We’ll process your document and notify you when it’s
                      ready.
                    </p>
                  </div>
                </Step>
              </Stepper>
            </div>
          </div>
        </div>
      )}

      {/* Book Appointment - Stepper */}
      {showAppt && (
        <div className="fixed inset-0 z-80 flex items-center justify-center bg-black/60 p-3 sm:p-4">
          <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-black/10 bg-white/90 dark:border-white/10 dark:bg-[#0b1f48]/80 backdrop-blur p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Book Appointment</h3>
              <button
                onClick={() => setShowAppt(false)}
                className="rounded-full border border-slate-300 dark:border-white/30 px-3 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
            <div className="mt-4">
              <Stepper
                initialStep={1}
                onFinalStepCompleted={() => setShowAppt(false)}
                nextButtonText="Next"
              >
                <Step>
                  <div className="space-y-2">
                    <p className="text-slate-600 dark:text-zinc-300/90">
                      Choose office:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "Treasurer",
                        "Business Permits",
                        "Assessor",
                        "Mayor’s Office",
                      ].map((t) => (
                        <button
                          key={t}
                          className="rounded-xl border border-black/10 bg-white px-3 py-2 text-left hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 transition-colors"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </Step>
                <Step>
                  <div className="space-y-2">
                    <p className="text-slate-600 dark:text-zinc-300/90">
                      Pick date & time:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="date"
                        className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                      />
                      <input
                        type="time"
                        className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                      />
                    </div>
                  </div>
                </Step>
                <Step>
                  <div className="space-y-2">
                    <p className="text-slate-600 dark:text-zinc-300/90">
                      Contact details:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        placeholder="Full Name"
                        className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                      />
                      <input
                        placeholder="Email"
                        className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
                      />
                    </div>
                  </div>
                </Step>
                <Step>
                  <div className="space-y-2">
                    <p className="text-slate-600 dark:text-zinc-300/90">
                      Confirm appointment
                    </p>
                    <p className="text-sm text-slate-600 dark:text-zinc-300/90">
                      You’ll receive a confirmation and reminders.
                    </p>
                  </div>
                </Step>
              </Stepper>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Hotlines - AnimatedList */}
      {showHotlines && (
        <div className="fixed inset-0 z-80 flex items-center justify-center bg-black/60 p-3 sm:p-4">
          <div className="w-full max-w-md rounded-2xl border border-black/10 bg-white/90 dark:border-white/10 dark:bg-[#0b1f48]/80 backdrop-blur p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Emergency Hotlines</h3>
              <button
                onClick={() => setShowHotlines(false)}
                className="rounded-full border border-slate-300 dark:border-white/30 px-3 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
            <div className="mt-4">
              <AnimatedList
                items={[
                  "PNP – 16677",
                  "BFP – (02) 8426-0219",
                  "MDRRMO – 0917-123-4567",
                  "Ambulance – 911",
                  "Rescue – 8888",
                  "City Hospital ER – (02) 8890-1234",
                  "City Health Office – (02) 8891-5678",
                  "Red Cross – 143",
                  "Coast Guard – (02) 8527-8481",
                  "Traffic Management – 136",
                  "Barangay Hall (San Isidro) – 0999-222-3333",
                  "Barangay Hall (Sta. Cruz) – 0999-444-5555",
                  "Electric Co. (Outage) – 1622",
                  "Waterworks (Leak) – (02) 8892-0000",
                  "DSWD Hotline – 8888-3793",
                ]}
                displayScrollbar
              />
            </div>
          </div>
        </div>
      )}

      {/* Report an Issue - Custom Modal */}
      {showReport && (
        <div className="fixed inset-0 z-80 flex items-center justify-center bg-black/60 p-3 sm:p-4">
          <div className="w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl border border-black/10 bg-white/90 dark:border-white/10 dark:bg-[#0b1f48]/80 backdrop-blur p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Report an Issue</h3>
              <button
                onClick={() => setShowReport(false)}
                className="rounded-full border border-slate-300 dark:border-white/30 px-3 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-2">
              <select className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10">
                <option>Road damage</option>
                <option>Garbage collection</option>
                <option>Street lights</option>
                <option>Safety concern</option>
              </select>
              <textarea
                placeholder="Describe the issue..."
                className="min-h-[100px] w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
              />
              <input
                placeholder="Location (optional)"
                className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none dark:bg-white/10 dark:border-white/10"
              />
              <div className="flex items-center gap-2">
                <button className="rounded-lg border border-black/20 px-3 py-2 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">
                  Attach Photo
                </button>
                <button className="rounded-lg bg-white text-black px-3 py-2 font-medium hover:bg-zinc-200">
                  Submit Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Service Map - DomeGallery */}
      {showMap && (
        <div className="fixed inset-0 z-80 flex items-center justify-center bg-black/60 p-3 sm:p-4">
          <div className="w-full max-w-4xl h-[70vh] rounded-2xl border border-black/10 bg-white/90 dark:border-white/10 dark:bg-[#0b1f48]/80 backdrop-blur p-2">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-lg font-semibold">Service Map</h3>
              <button
                onClick={() => setShowMap(false)}
                className="rounded-full border border-slate-300 dark:border-white/30 px-3 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
            <div className="relative mt-2 h-[calc(100%-40px)]">
              <DomeGallery
                images={[
                  {
                    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
                    alt: "Barangay San Isidro",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop",
                    alt: "Barangay Sta. Cruz",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
                    alt: "City Treasurer’s Office",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop",
                    alt: "Assessor’s Office",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=1200&auto=format&fit=crop",
                    alt: "MDRRMO Command Center",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
                    alt: "Health Center – West",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
                    alt: "City Hall",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      )}
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
  onClick?: () => void;
};

function ServiceCard({
  title,
  description,
  icon: Icon,
  color,
  index,
  onClick,
}: ServiceCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-2xl border bg-linear-to-br ${color} p-4 text-left`}
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-slate-200 dark:bg-white/10 p-2">
          <Icon className="size-5" />
        </div>
        <div>
          <div className="font-medium">{title}</div>
          <p className="mt-1 text-sm text-slate-600 dark:text-zinc-300/90">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-4 text-sm text-slate-600 dark:text-zinc-300/90">
        Proceed →
      </div>
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
