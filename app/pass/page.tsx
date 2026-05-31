import Navbar from "@/components/landing/navbar";
import ParkingPass from "@/components/pass/ParkingPass";

export default function PassPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-24">

        <h1 className="mb-12 text-center text-5xl font-bold">
          Parking Pass
        </h1>

        <ParkingPass />

      </section>

    </main>
  );
}