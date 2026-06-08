"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [role, setRole] =
    useState<string | null>(null);

  useEffect(() => {

    const savedRole =
      localStorage.getItem("role");

    console.log(
      "ROLE:",
      savedRole
    );

    setRole(savedRole);

  }, []);

  const logout = () => {

    localStorage.removeItem(
      "role"
    );

    setRole(null);

    window.location.href = "/";
  };

  return (

    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link href="/">
          <div className="flex cursor-pointer items-center gap-3">

            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

            <h1 className="text-2xl font-bold tracking-tight">
              SPOT
            </h1>

          </div>
        </Link>

        <div className="flex items-center gap-8 text-sm text-gray-400">

          <Link
            href="/events"
            className="transition hover:text-white"
          >
            Events
          </Link>

          <Link
            href="/about"
            className="transition hover:text-white"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-white"
          >
            Contact
          </Link>

          {role ? (

            <button
              onClick={logout}
              className="rounded-lg border border-red-500/30 px-4 py-2 text-red-400 transition hover:bg-red-500 hover:text-black"
            >
              Logout
            </button>

          ) : (

            <Link
              href="/login"
              className="rounded-lg border border-green-500/30 px-4 py-2 text-green-400 transition hover:bg-green-500 hover:text-black"
            >
              Login
            </Link>

          )}

        </div>

      </div>

    </nav>

  );
}