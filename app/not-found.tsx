import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full grid place-items-center bg-linear-to-b from-white via-slate-100 to-white text-slate-900 dark:from-[#0a1a3a] dark:via-[#0b1f48] dark:to-[#0a1a3a] dark:text-white px-6">
      <div className="text-center">
        <div className="text-6xl font-bold">404</div>
        <p className="mt-2 text-slate-600 dark:text-zinc-300/90">Page not found</p>
        <div className="mt-6">
          <Link href="/" className="rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-medium hover:bg-slate-800 dark:bg-white dark:text-[#0a1a3a] dark:hover:bg-zinc-200">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}


