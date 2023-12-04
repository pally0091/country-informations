/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface CountryCardProps {
  country: any;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const { name, status, cca2, region, subregion, flags } = country;
  return (
    <div className="border border-indigo-500">
      <div className="flex flex-row  justify-between p-2">
        <div className="w-44 h-36 border p-1">
          <img
            className="w-full h-full shadow-md shadow-indigo-400"
            src={flags.png}
            alt=""
          />
        </div>
        <div className="w-1/2 text-right">
          <h2 className="text-xl font-semibold">{name.common}</h2>
          <p className="text-sm uppercase underline">{status}</p>
          <h4 className="text-lg font-semibold">Region: {region}</h4>
          <h5 className="text-base">Subregion: {subregion}</h5>
        </div>
      </div>
      <Link href={`/countries/${cca2}`}>
        <button className="bg-indigo-600 text-center text-white w-full hover:bg-indigo-500 transition-all duration-300">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default CountryCard;
