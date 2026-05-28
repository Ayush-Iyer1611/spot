import Navbar from "@/components/landing/navbar";
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
  {
    title: "Startup Nexus Summit",
    venue: "KTPO Convention Hall",
    date: "July 14, 2026",
    slots: 180,
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-24">
        
        <div className="mb-16">
          
          <h1 className="text-5xl font-bold tracking-tight">
            Active Events
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            Browse SPOT-enabled venues and reserve
            parking intelligently before arrival.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          
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
    </main>
  );
}