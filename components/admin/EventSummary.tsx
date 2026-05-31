export default function EventSummary() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-sm uppercase tracking-widest text-blue-400">
            Active Event
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Interstellar Re-Release
          </h2>

          <p className="mt-3 text-gray-400">
            PVR Orion Mall • Bengaluru
          </p>

        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">

          <div>
            <p className="text-gray-500">
              Event Date
            </p>

            <p className="font-semibold">
              June 12, 2026
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              Start Time
            </p>

            <p className="font-semibold">
              7:00 PM
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              Parking Window
            </p>

            <p className="font-semibold">
              6:00 PM - 10:30 PM
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              Status
            </p>

            <p className="font-semibold text-green-400">
              Live
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}