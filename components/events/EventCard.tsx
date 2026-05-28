import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

        <Link href="/verify">
          <Button className="mt-8 w-full">
            Continue
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}