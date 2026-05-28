import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent blur-3xl" />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        
        <Badge className="mb-6 border border-white/20 bg-white/10 text-white">
          Smart Parking & Organized Ticketing
        </Badge>

        <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Parking Intelligence
          <br />
          for Modern Venues
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
          SPOT transforms parking management for events,
          campuses, offices, and smart venues through
          intelligent reservation, QR verification,
          and occupancy optimization.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          
          <Link href="/events">
            <Button size="lg">
              Explore Events
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 text-white hover:bg-white hover:text-black"
            >
              Admin Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}