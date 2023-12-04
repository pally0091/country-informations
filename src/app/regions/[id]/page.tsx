/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import CountryCard from "@/components/CountryCard";
import React, { useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";

interface RegionPageProps {
  params: any;
}

const RegionPage: React.FC<RegionPageProps> = ({ params }: any) => {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-16">
      <h3 className="text-lg font-semibold mb-4 text-center my-5">
        Countries of <span className="text-indigo-500">{params.id}</span> region
      </h3>
      {loading ? (
        <div className="flex mt-10 items-center justify-center">
          <FallingLines
            color="#3c3790"
            width="100"
            visible={true}
          />
        </div>
      ) : (
        <div className="mt-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {countries.map((country: any) => (
            <CountryCard
              key={country.cca2}
              country={country}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RegionPage;
