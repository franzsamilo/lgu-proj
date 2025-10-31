"use client";
import { useRef } from "react";
import Link from "next/link";
import Hyperspeed from "../components/Hyperspeed";
import Masonry from "../components/Masonry";
import Aurora from "../components/Aurora";
import VariableProximity from "../components/VariableProximity";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const masonryItems = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      url: "#",
      height: 600,
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop",
      url: "#",
      height: 520,
    },
    {
      id: "3",
      img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
      url: "#",
      height: 680,
    },
    {
      id: "4",
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop",
      url: "#",
      height: 480,
    },
    {
      id: "5",
      img: "https://images.unsplash.com/photo-1503265192943-9d7eea6fc97e?q=80&w=1200&auto=format&fit=crop",
      url: "#",
      height: 700,
    },
    {
      id: "6",
      img: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=1200&auto=format&fit=crop",
      url: "#",
      height: 560,
    },
    {
      id: "7",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
      url: "#",
      height: 640,
    },
    {
      id: "8",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
      url: "#",
      height: 540,
    },
  ];
  const galleryItems = [
    ...masonryItems,
    ...masonryItems.map((i) => ({ ...i, id: `a-${i.id}` })),
    ...masonryItems.map((i) => ({ ...i, id: `b-${i.id}` })),
  ];
  return (
    <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory bg-[#0a1a3a] font-sans">
      {/* Section 1: Greeting with Hyperspeed */}
      <section className="relative isolate overflow-hidden h-screen snap-start bg-linear-to-b from-[#0a1a3a] via-[#0b1f48] to-[#0a1a3a]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Aurora
            colorStops={["#1e293b", "#2563eb", "#22d3ee"]}
            amplitude={1.2}
            blend={0.6}
          />
        </div>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Hyperspeed
            effectOptions={{ cameraX: -2, cameraY: 7, cameraZ: -7 }}
          />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <div ref={heroRef} className="mx-auto max-w-4xl px-6 text-center mt-12 md:mt-24">
            <VariableProximity
              label="Welcome to MyLGU"
              fromFontVariationSettings="'wght' 500"
              toFontVariationSettings="'wght' 900"
              containerRef={heroRef}
              className="block text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            />
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-zinc-300/90">
              Your local government services, faster and smarter.
            </p>
          </div>
        </div>
        <a
          href="#highlights"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-zinc-300/70 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <svg
            className="h-6 w-6 animate-bounce"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
          <span className="mt-2 text-xs tracking-wide">Scroll down</span>
        </a>
      </section>

      {/* Section 2: Masonry showcase */}
      <section id="highlights" className="relative isolate overflow-hidden h-screen snap-start flex items-center justify-center bg-linear-to-b from-[#0a1a3a] via-[#0b1f48] to-[#0a1a3a]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Aurora
            colorStops={["#1e293b", "#2563eb", "#22d3ee"]}
            amplitude={1.2}
            blend={0.6}
          />
        </div>
        <div className="relative z-10 h-[80vh] w-full max-w-6xl px-6">
          <div className="mb-6">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Explore Highlights
            </h2>
            <p className="mt-2 text-base sm:text-lg leading-relaxed text-zinc-300/90">
              Projects, places, and moments around our LGU.
            </p>
          </div>
          <Masonry items={galleryItems} />
        </div>
      </section>

      {/* Section 3: CTA with Aurora background */}
      <section className="relative isolate overflow-hidden h-screen snap-start bg-linear-to-b from-[#0a1a3a] via-[#0b1f48] to-[#0a1a3a]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Aurora
            colorStops={["#1e293b", "#2563eb", "#22d3ee"]}
            amplitude={1.2}
            blend={0.6}
          />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-300/90">
              Access personalized services and manage your requests.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="rounded-full bg-white text-black px-6 py-3 font-medium transition-colors hover:bg-zinc-200"
              >
                Open Dashboard
              </Link>
              <Link
                href="/register"
                className="rounded-full border border-white/40 text-white px-6 py-3 font-medium transition-colors hover:bg-white/10"
              >
                Create an Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
