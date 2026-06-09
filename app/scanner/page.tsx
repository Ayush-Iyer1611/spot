"use client";

import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function ScannerPage() {

  useEffect(() => {

    let scanner: Html5Qrcode;

    async function startScanner() {

      try {

        const cameras =
          await Html5Qrcode.getCameras();

        console.log(
          "CAMERAS:",
          cameras
        );

        scanner =
          new Html5Qrcode("reader");

        await scanner.start(
          cameras[0].id,
          {
            fps: 30,
            qrbox: {
              width: 250,
              height: 250,
            },
            aspectRatio: 1.0,
          },
          (decodedText) => {

            console.log(
              "SCANNED:",
              decodedText
            );

            const stored =
              localStorage.getItem(
                "guests"
              );

            console.log(
              "LOCAL STORAGE:",
              stored
            );

          },
          () => {}
        );

      } catch (error) {

        console.error(
          "SCANNER ERROR:",
          error
        );

      }

    }

    startScanner();

    return () => {

      if (scanner) {

        scanner
          .stop()
          .catch(() => {});

      }

    };

  }, []);

  return (

    <main className="min-h-screen bg-black p-10 text-white">

      <h1 className="mb-6 text-4xl font-bold">
        Scanner Device
      </h1>

      <div
        id="reader"
        style={{
          width: "100%",
          maxWidth: "600px",
          minHeight: "400px",
        }}
      />

    </main>

  );

}