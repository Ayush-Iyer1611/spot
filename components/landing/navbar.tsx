import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

            <h1 className="text-2xl font-bold tracking-tight">
              SPOT
            </h1>
          </div>
        </Link>

        <div className="flex items-center gap-8 text-sm text-gray-400">

          <Link
            href="/events"
            className="hover:text-white transition"
          >
            Events
          </Link>

          <Link
            href="/dashboard"
            className="hover:text-white transition"
          >
            Dashboard
          </Link>

        </div>
      </div>
    </nav>
  );
}