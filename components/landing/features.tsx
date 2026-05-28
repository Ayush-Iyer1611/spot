import { Card, CardContent } from "@/components/ui/card";

import {
  Car,
  QrCode,
  Building2,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Smart Parking Allocation",
    description:
      "Reserve and manage parking intelligently based on occupancy and event demand.",
  },
  {
    icon: QrCode,
    title: "Universal QR Verification",
    description:
      "Verify tickets from multiple booking platforms using SPOT validation.",
  },
  {
    icon: Building2,
    title: "Venue & Office Integration",
    description:
      "Designed for events, colleges, offices, campuses, and smart venues.",
  },
  {
    icon: Users,
    title: "Group Vehicle Optimization",
    description:
      "Handle group bookings and reduce unnecessary parking allocation.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold">
          Built for Smart Mobility
        </h2>

        <p className="mt-4 text-gray-400">
          A scalable infrastructure layer for modern parking ecosystems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <Card
              key={index}
              className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition"
            >
              <CardContent className="p-6">
                
                <Icon className="mb-4 h-10 w-10 text-green-400" />

                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}