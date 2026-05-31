import Navbar from "@/components/landing/navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      <Navbar />

      <section className="relative px-6 py-32">

        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-transparent to-transparent blur-3xl" />

        <div className="mx-auto max-w-5xl text-center">

          <p className="uppercase tracking-[0.3em] text-blue-400">
            Contact SPOT
          </p>

          <h1 className="mt-6 text-6xl font-bold">
            Let's Build
            <br />
            Smarter Parking
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
            Interested in deploying SPOT for your
            venue, institution or organization?
            We'd love to hear from you.
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-5xl px-6 pb-32">

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold">
              Partnerships
            </h3>

            <p className="mt-3 text-gray-400">
              Venue integrations and collaborations.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold">
              Enterprise
            </h3>

            <p className="mt-3 text-gray-400">
              Office and campus parking solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold">
              Support
            </h3>

            <p className="mt-3 text-gray-400">
              Product assistance and feedback.
            </p>
          </div>

        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <h2 className="text-3xl font-bold">
            Get in Touch
          </h2>

          <p className="mt-4 text-gray-400">
            Reach out for demos, partnerships,
            pilot programs and deployments.
          </p>

          <button className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500">
            Contact Team
          </button>

        </div>

      </section>

    </main>
  );
}