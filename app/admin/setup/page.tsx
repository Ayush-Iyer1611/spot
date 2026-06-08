"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useEventStore } from "@/store/useEventStore";

export default function SetupPage() {

  const router = useRouter();

  const setEvent =
    useEventStore(
      (state) => state.setEvent
    );

  const [form, setForm] =
    useState({

      eventName: "",
      venue: "",

      eventDate: "",

      startTime: "",
      endTime: "",

      totalSlots: 0,

      carSlots: 0,
      bikeSlots: 0,
      evSlots: 0,
      vipSlots: 0,

      parkingFee: 0,
    });

  const submit = () => {

  console.log("SUBMIT CLICKED");

  console.log(form);

  localStorage.setItem(
    "event",
    JSON.stringify(form)
  );

  console.log(
    localStorage.getItem("event")
  );

  setEvent(form);

  router.push("/admin");
};

  return (

    <main className="min-h-screen bg-black text-white p-8">

      <div className="mx-auto max-w-4xl">

        <h1 className="mb-10 text-5xl font-bold">
          Event Setup Wizard
        </h1>

        <div className="grid gap-4">

          <input
            placeholder="Event Name"
            className="rounded-lg bg-white/5 p-4"
            onChange={(e) =>
              setForm({
                ...form,
                eventName:
                  e.target.value,
              })
            }
          />

          <input
            placeholder="Venue"
            className="rounded-lg bg-white/5 p-4"
            onChange={(e) =>
              setForm({
                ...form,
                venue:
                  e.target.value,
              })
            }
          />

          <input
            type="date"
            className="rounded-lg bg-white/5 p-4"
            onChange={(e) =>
              setForm({
                ...form,
                eventDate:
                  e.target.value,
              })
            }
          />

          <input
            type="time"
            className="rounded-lg bg-white/5 p-4"
            onChange={(e) =>
              setForm({
                ...form,
                startTime:
                  e.target.value,
              })
            }
          />

          <input
            type="time"
            className="rounded-lg bg-white/5 p-4"
            onChange={(e) =>
              setForm({
                ...form,
                endTime:
                  e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Total Slots"
            className="rounded-lg bg-white/5 p-4"
            onChange={(e) =>
              setForm({
                ...form,
                totalSlots:
                  Number(
                    e.target.value
                  ),
              })
            }
          />

          <input
            type="number"
            placeholder="Car Slots"
            className="rounded-lg bg-white/5 p-4"
            onChange={(e) =>
              setForm({
                ...form,
                carSlots:
                  Number(
                    e.target.value
                  ),
              })
            }
          />

          <input
            type="number"
            placeholder="Bike Slots"
            className="rounded-lg bg-white/5 p-4"
            onChange={(e) =>
              setForm({
                ...form,
                bikeSlots:
                  Number(
                    e.target.value
                  ),
              })
            }
          />

          <input
            type="number"
            placeholder="EV Slots"
            className="rounded-lg bg-white/5 p-4"
            onChange={(e) =>
              setForm({
                ...form,
                evSlots:
                  Number(
                    e.target.value
                  ),
              })
            }
          />

          <input
            type="number"
            placeholder="VIP Slots"
            className="rounded-lg bg-white/5 p-4"
            onChange={(e) =>
              setForm({
                ...form,
                vipSlots:
                  Number(
                    e.target.value
                  ),
              })
            }
          />

          <input
            type="number"
            placeholder="Parking Fee"
            className="rounded-lg bg-white/5 p-4"
            onChange={(e) =>
              setForm({
                ...form,
                parkingFee:
                  Number(
                    e.target.value
                  ),
              })
            }
          />

          <button
            onClick={submit}
            className="mt-4 rounded-lg bg-blue-600 p-4 font-semibold"
          >
            Create Event
          </button>

        </div>

      </div>

    </main>
  );
}