"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-32">

      {/* Animated Glow */}

      <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-green-500/10 via-transparent to-transparent blur-3xl" />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

        <Badge className="mb-6 border border-white/20 bg-white/10 text-white">
          Smart Parking & Organized Ticketing
        </Badge>

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          Parking Intelligence
          <br />
          For Modern Venues
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400"
        >
          SPOT transforms parking management for
          events, campuses, offices and smart venues
          through intelligent reservation,
          QR verification and predictive
          occupancy analytics.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
          }}
          className="mt-10"
        >

          <p className="text-lg font-medium text-green-400">
            Smart Parking • Real-Time Analytics • Venue Intelligence
          </p>

        </motion.div>

      </div>

    </section>
  );
}