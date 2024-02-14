import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/Navbar";
import { useEffect } from "react";

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
      <body className="bg-white dark:bg-gray-900">
        <main>
          <div className="fixed z-10 w-full top-0">
            <Navbar />
          </div>
          <div className="max-w-[1280px] mx-auto">{children}</div>
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
