/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Country {
  region: string;
}

const regionPage: React.FC = () => {
  const [regions, setRegions] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const countries: Country[] = await res.json();
        const uniqueRegions = Array.from(
          new Set(countries.map((country: any) => country.region))
        );
        setRegions(uniqueRegions.filter(Boolean));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  // console.log(regions);
  return (
    <div className="pt-16 text-center">
      <h3 className="text-xl font-semibold mb-4">List of Regions:</h3>
      <ul className="w-[95%] md:w-2/5 lg:w-1/5 mx-auto">
        {regions.map((region) => (
          <Link
            key={region}
            href={`/regions/${region}`}
          >
            <li className="border my-1 border-indigo-500 text-indigo-700 text-lg hover:bg-indigo-500 hover:text-white transition-all duration-500">
              {region}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default regionPage;
