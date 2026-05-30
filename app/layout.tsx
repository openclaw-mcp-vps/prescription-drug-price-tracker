import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RxTracker – Track Prescription Drug Prices Across Pharmacies",
  description: "Monitor prescription prices across local pharmacies and get alerts when prices drop or cheaper alternatives are found. Save money on your medications today."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c73b5d24-8f3d-41a4-98b3-2eeb4505b386"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
