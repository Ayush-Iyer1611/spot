import Navbar from "@/components/landing/navbar";
import ParkingReservation from "@/components/reserve/ParkingReservation";

export default function ReservePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-24">

        <h1 className="mb-12 text-center text-5xl font-bold">
          Reserve Parking
        </h1>

        <ParkingReservation />

      </section>
    </main>
  );
}