/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import CountryCard from "@/components/CountryCard";
import React, { useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";

const CountriesPage: React.FC = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  // console.log(countries);
  return (
    <div className="pt-16">
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

export default CountriesPage;
