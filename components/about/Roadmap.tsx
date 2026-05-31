"use client";

import { motion } from "framer-motion";

export default function Roadmap() {
  return (

    <div className="space-y-10">

      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="border-l-2 border-green-400 pl-6"
      >

        <h3 className="text-2xl font-bold">
          Phase 1
        </h3>

        <p className="mt-2 text-gray-400">
          Smart Parking Reservations
        </p>

      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="border-l-2 border-green-400 pl-6"
      >

        <h3 className="text-2xl font-bold">
          Phase 2
        </h3>

        <p className="mt-2 text-gray-400">
          QR Ticket Verification
        </p>

      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="border-l-2 border-green-400 pl-6"
      >

        <h3 className="text-2xl font-bold">
          Phase 3
        </h3>

        <p className="mt-2 text-gray-400">
          Priority Pass & Dynamic Allocation
        </p>

      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        className="border-l-2 border-green-400 pl-6"
      >

        <h3 className="text-2xl font-bold">
          Phase 4
        </h3>

        <p className="mt-2 text-gray-400">
          AI Parking Intelligence
        </p>

      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.4,
        }}
        className="border-l-2 border-green-400 pl-6"
      >

        <h3 className="text-2xl font-bold">
          Phase 5
        </h3>

        <p className="mt-2 text-gray-400">
          FASTag & Smart Gate Integration
        </p>

      </motion.div>

    </div>
  );
}