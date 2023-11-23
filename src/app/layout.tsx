import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Country Informations",
  description: "Page Created by Debashis Roy. Using a rest APIs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="fixed w-full">
            <Navbar />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
