"use client";

export default function Stats() {
  return (
    <div className="grid gap-6 md:grid-cols-4">

      <div className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-green-400/40
      hover:bg-white/10
      ">

        <h2 className="text-5xl font-bold text-green-400">
          500+
        </h2>

        <p className="mt-2 text-gray-400">
          Parking Slots
        </p>

      </div>

      <div className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-green-400/40
      hover:bg-white/10
      ">

        <h2 className="text-5xl font-bold text-green-400">
          99%
        </h2>

        <p className="mt-2 text-gray-400">
          Verification Accuracy
        </p>

      </div>

      <div className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-green-400/40
      hover:bg-white/10
      ">

        <h2 className="text-5xl font-bold text-green-400">
          15m
        </h2>

        <p className="mt-2 text-gray-400">
          Arrival Forecasting
        </p>

      </div>

      <div className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-green-400/40
      hover:bg-white/10
      ">

        <h2 className="text-5xl font-bold text-green-400">
          SaaS
        </h2>

        <p className="mt-2 text-gray-400">
          Venue Platform
        </p>

      </div>

    </div>
  );
}