import Navbar from "@/components/landing/navbar";
import AdminDashboard from "@/components/admin/AdminDashboard";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-24">

        <h1 className="mb-12 text-5xl font-bold">
          Parking Operations Center
        </h1>

        <AdminDashboard />

      </section>

    </main>
  );
}