"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const login = async () => {

    if (
      email === "admin@spot.com" &&
      password === "password123"
    ) {

      localStorage.setItem(
        "role",
        "admin"
      );

      router.push("/admin");
      return;
    }

    if (
      email === "scanner@spot.com" &&
      password === "password123"
    ) {

      localStorage.setItem(
        "role",
        "scanner"
      );

      router.push("/scanner");
      return;
    }

    if (
      email === "user1@spot.com" &&
      password === "password123"
    ) {

      localStorage.setItem(
        "role",
        "user"
      );

      router.push("/events");
      return;
    }

    alert(
      "Invalid Email or Password"
    );

  };

  return (

    <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 p-8">

      <h2 className="mb-6 text-3xl font-bold">
        Login
      </h2>

      <input
        type="email"
        placeholder="Email"
        className="mb-4 w-full rounded-lg border border-white/10 bg-black p-3"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        className="mb-4 w-full rounded-lg border border-white/10 bg-black p-3"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        onClick={login}
        className="w-full rounded-lg bg-green-500 p-3 font-semibold text-black"
      >
        Login
      </button>

    </div>

  );

}