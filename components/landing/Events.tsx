import EventCard from "@/components/events/EventCard";

const events = [
  {
    title: "Interstellar Re-Release",
    venue: "PVR Orion Mall",
    date: "June 12, 2026",
    slots: 120,
  },
  {
    title: "TechX Bengaluru",
    venue: "BIEC Convention Center",
    date: "June 18, 2026",
    slots: 450,
  },
  {
    title: "BMSCE Cultural Fest",
    venue: "BMS College of Engineering",
    date: "July 2, 2026",
    slots: 300,
  },
];

export default function Events() {
  return (
    <section className="px-8 pb-24">

      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold">
          Active Events
        </h2>

        <p className="mt-4 text-gray-400">
          Smart parking enabled venues powered by SPOT.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            venue={event.venue}
            date={event.date}
            slots={event.slots}
          />
        ))}

      </div>
    </section>
  );
}