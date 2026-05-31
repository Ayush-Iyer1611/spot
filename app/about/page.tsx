import Navbar from "@/components/landing/navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      <Navbar />

      {/* Hero */}

      <section className="relative px-6 py-32">

        <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 via-transparent to-transparent blur-3xl" />

        <div className="mx-auto max-w-6xl text-center">

          <p className="text-green-400 uppercase tracking-[0.3em]">
            About SPOT
          </p>

          <h1 className="mt-6 text-6xl font-bold md:text-7xl">
            Parking Intelligence
            <br />
            For Modern Mobility
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">
            SPOT reimagines parking for events,
            campuses, offices and smart venues
            through intelligent reservations,
            predictive analytics and real-time
            occupancy management.
          </p>

        </div>

      </section>

      {/* Vision */}

      <section className="mx-auto max-w-6xl px-6 py-24">

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <h3 className="text-2xl font-bold">
              Problem
            </h3>

            <p className="mt-4 text-gray-400">
              Drivers waste time searching for
              parking while venues have no visibility
              into future occupancy.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <h3 className="text-2xl font-bold">
              Solution
            </h3>

            <p className="mt-4 text-gray-400">
              Ticket-linked reservations,
              smart allocation and live
              parking intelligence.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <h3 className="text-2xl font-bold">
              Impact
            </h3>

            <p className="mt-4 text-gray-400">
              Reduced congestion,
              faster entry,
              improved venue operations.
            </p>
          </div>

        </div>

      </section>

      {/* Founder */}

      <section className="mx-auto max-w-5xl px-6 pb-32">

        <div className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent p-10">

          <p className="text-green-400 uppercase tracking-widest">
            Founder
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Ayush Iyer
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            SPOT was conceptualized and designed by
            Ayush Iyer to address one of the most
            overlooked challenges in urban mobility:
            intelligent parking allocation.
          </p>

        </div>

      </section>

    </main>
  );
}