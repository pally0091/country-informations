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
          <div className="fixed z-10 w-full">
            <Navbar />
          </div>
          {children}
          <footer className="bg-indigo-800 p-1 text-white fixed bottom-0 w-full">
            <p className="text-center">
              &copy; 2024 Your Company. All rights reserved. | Powered by{" "}
              <a
                className="underline"
                href="https://restcountries.com/"
                target="_blank"
              >
                REST Countries
              </a>
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
