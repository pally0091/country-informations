"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const Navbar: React.FC = () => {
  const router = usePathname();

  return (
    <div className="flex justify-center items-center gap-4 bg-indigo-400 bg-opacity-50 backdrop-blur-md p-4">
      <Link
        href="/"
        passHref
      >
        <p
          className={`font-semibold text-lg ${
            router === "/" ? "text-white" : "text-gray-800"
          }`}
        >
          Home
        </p>
      </Link>
      <Link
        href="/countries"
        passHref
      >
        <p
          className={`font-semibold text-lg ${
            router === "/countries" ? "text-white" : "text-gray-800"
          }`}
        >
          Countries
        </p>
      </Link>
      <Link
        href="/regions"
        passHref
      >
        <p
          className={`font-semibold text-lg ${
            router === "/regions" ? "text-white" : "text-gray-800"
          }`}
        >
          Regions
        </p>
      </Link>
      <Link
        href="/about"
        passHref
      >
        <p
          className={`font-semibold text-lg ${
            router === "/about" ? "text-white" : "text-gray-800"
          }`}
        >
          About
        </p>
      </Link>
    </div>
  );
};

export default Navbar;
