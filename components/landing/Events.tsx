import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {events.map((event, index) => (
          <Card
            key={index}
            className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition"
          >
            <CardContent className="p-6">
              
              <div className="flex items-center justify-between mb-6">
                <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

                <span className="text-sm text-gray-400">
                  {event.slots} Slots
                </span>
              </div>

              <h3 className="text-2xl font-semibold">
                {event.title}
              </h3>

              <p className="mt-3 text-gray-400 text-sm">
                {event.venue}
              </p>

              <p className="mt-2 text-gray-500 text-sm">
                {event.date}
              </p>

              <Button className="mt-8 w-full">
                Reserve Parking
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}