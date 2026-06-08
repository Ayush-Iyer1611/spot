"use client";
import { useGuestStore } from "@/store/useGuestStore";
import { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";


export default function ScannerPage() {
 
  
  const guests =
  useGuestStore(
    (state) => state.guests
  );

const [result, setResult] =
  useState<any>(null);

  useEffect(() => {
    
    

    let scanner: Html5Qrcode;

    async function startScanner() {

      try {
        

        const cameras =
          await Html5Qrcode.getCameras();

        scanner =
          new Html5Qrcode("reader");

        await scanner.start(
          cameras[0].id,
          {
            fps: 10,
            qrbox: 250,
          },
          (decodedText) => {
             console.log("SCANNED:", decodedText);
console.log("GUESTS:", guests);
console.log(
  "TOTAL GUESTS:",
  guests.length
);

  const guest =
    guests.find(
      (g) =>
        g.ticketId === decodedText
    );

  if (!guest) {

    setResult({
      error:
        "Guest Not Found",
    });

    return;
  }

  setResult({
    success: true,
    guest,
  });

},
          () => {}
        );

      }

      catch (error) {

        console.error(error);

      }

    }

    startScanner();

    return () => {

      if (scanner) {
        scanner.stop();
      }

    };

  }, [guests]);

  return (

    <main className="min-h-screen bg-black p-10 text-white">

      <h1 className="mb-6 text-4xl font-bold">
        Scanner Device
      </h1>

      <div
        id="reader"
        style={{
          width: "100%",
          maxWidth: "500px",
          minHeight: "300px",
        }}
      />
      {result && (

  <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">

    {result.error ? (

      <div className="text-red-400">

        ❌ {result.error}

      </div>

    ) : (

      <div>

        <h2 className="mb-4 text-2xl font-bold text-green-400">

          ✅ VERIFIED

        </h2>

        <p>
          Name: {result.guest.name}
        </p>

        <p>
          Vehicle: {result.guest.vehicleType}
        </p>

        <p>
          Ticket: {result.guest.ticketId}
        </p>

        <p>
          Arrival: {result.guest.arrivalTime}
        </p>

      </div>

    )}

  </div>

)}

    </main>

  );

}