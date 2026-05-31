"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSpotStore } from "@/store/useSpotStore";

type EventCardProps = {
  title: string;
  venue: string;
  date: string;
  slots: number;
};

export default function EventCard({
  title,
  venue,
  date,
  slots,
}: EventCardProps) {

  const setEvent = useSpotStore(
    (state) => state.setEvent
  );
  const router = useRouter();

  return (
    <Card className="border-white/10 bg-white/5 text-white transition hover:bg-white/10">

      <CardContent className="p-6">

        <div className="mb-6 flex items-center justify-between">

          <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

          <span className="text-sm text-gray-400">
            {slots} Slots
          </span>

        </div>

        <h2 className="text-2xl font-semibold">
          {title}
        </h2>

        <p className="mt-3 text-sm text-gray-400">
          {venue}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          {date}
        </p>

        <Button
  className="mt-8 w-full"
  onClick={() => {
    setEvent(title);
    router.push("/verify");
  }}
>
  Reserve Parking
</Button>

      </CardContent>
    </Card>
  );
}