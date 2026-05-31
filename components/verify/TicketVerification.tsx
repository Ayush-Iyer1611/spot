"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TicketVerification() {
  const [ticketId, setTicketId] = useState("");
  const [name, setName] = useState("");
  const [verified, setVerified] = useState(false);

  const verifyTicket = () => {
    if (
      ticketId.toLowerCase() === "spot123" &&
      name.toLowerCase() === "ayush"
    ) {
      setVerified(true);
    } else {
      alert("Ticket not found in guest list");
    }
  };

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8">
      
      <h2 className="text-2xl font-bold">
        Ticket Verification
      </h2>

      <p className="mt-2 text-gray-400">
        Verify event access before reserving parking.
      </p>

      <div className="mt-8 space-y-4">

        <input
          placeholder="Ticket ID"
          value={ticketId}
          onChange={(e) => setTicketId(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-black p-3"
        />

        <input
          placeholder="Attendee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-black p-3"
        />

        <Button
          className="w-full"
          onClick={verifyTicket}
        >
          Verify Ticket
        </Button>
      </div>

      {verified && (
        <div className="mt-8 rounded-xl border border-green-500/20 bg-green-500/10 p-4">
          
          <p className="font-medium text-green-400">
            ✓ Ticket Verified
          </p>

          <p className="mt-2 text-sm text-gray-300">
            Eligible for parking reservation.
          </p>

          <Link href="/reserve">
            <Button className="mt-4">
              Continue
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}