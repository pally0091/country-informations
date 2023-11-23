import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-4 bg-indigo-400 backdrop-blur-md p-4">
      <Link
        className="font-semibold text-lg"
        href="/"
      >
        Home
      </Link>
      <Link
        className="font-semibold text-lg"
        href="/countries"
      >
        Countries
      </Link>
      <Link
        className="font-semibold text-lg"
        href="/regions"
      >
        Regions
      </Link>
      <Link
        className="font-semibold text-lg"
        href="/about"
      >
        About
      </Link>
    </div>
  );
};

export default Navbar;
