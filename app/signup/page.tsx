import Navbar from "@/components/landing/navbar";
import AuthForm from "@/components/auth/AuthForm";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-6 py-24">
        <AuthForm />
      </section>
    </main>
  );
}