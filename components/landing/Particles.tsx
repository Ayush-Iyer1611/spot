"use client";

export default function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {[...Array(20)].map((_, i) => (

        <div
          key={i}
          className="absolute h-2 w-2 animate-pulse rounded-full bg-green-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />

      ))}

    </div>
  );
}