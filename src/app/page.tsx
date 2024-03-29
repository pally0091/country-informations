"use client";
import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";

interface Country {
  name: {
    common: string;
  };
  cca2: string;
}
export default function Home() {
  // Example of featured countries
  const featuredCountries = [
    { name: "United States", code: "US" },
    { name: "Canada", code: "CA" },
    { name: "United Kingdom", code: "GB" },
    { name: "Australia", code: "AU" },
  ];
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // console.log(countries);
  const handleSearchChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = featuredCountries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const searchResultCountries = countries.filter((country) =>
    country?.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="w-full py-24 flex flex-col justify-center items-center">
        <h2 className="text-indigo-600 dark:text-indigo-300 font-bold text-3xl md:text-4xl lg:text-5xl">
          Countries Informations
        </h2>
        <h4 className="text-indigo-900 dark:text-indigo-400 text-lg md:text-xl lg:text-xl">
          Provided by Rest country API
        </h4>

        {/* Search Bar */}
        <div className="mt-8 text-center">
          <input
            type="text"
            placeholder="Search for a country..."
            className="p-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Featured Countries Section */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">
            Featured Countries
          </h3>
          <ul>
            {filteredCountries.map((country) => (
              <li key={country.code}>
                <Link href={`/countries/${country.code}`}>
                  <p className="text-indigo-600 dark:text-indigo-300 hover:underline">
                    {country.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Search Results Section */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold dark:text-white mb-4">
            Search Results
          </h3>
          {loading ? (
            <FallingLines
              color="#3c3790"
              width="100"
              visible={true}
            />
          ) : (
            <ul className="h-56 overflow-y-scroll">
              {searchResultCountries.map((country) => (
                <li key={country?.cca2}>
                  <Link href={`/countries/${country?.cca2}`}>
                    <p className="text-indigo-600 dark:text-indigo-300 hover:underline">
                      {country?.name.common}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
