import Navbar from "@/components/landing/navbar";
import AdminDashboard from "@/components/admin/AdminDashboard";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-12 flex items-center justify-between">

          <h1 className="text-5xl font-bold">
            Parking Operations Center
          </h1>

          <a
            href="/admin/setup"
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500"
          >
            New Event
          </a>

        </div>

        <AdminDashboard />

      </section>

    </main>
  );
}