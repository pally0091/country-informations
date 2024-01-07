/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";

interface DetailPageProps {
  params: any;
}
const DetailPage: React.FC<DetailPageProps> = ({ params }) => {
  const [detail, setDetail] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const url = `https://restcountries.com/v3.1/alpha/${params.id}`;

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDetail(data[0]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(detail?.independent);

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
        <div className="w-[95%] mx-auto border-4 border-double border-indigo-500 rounded-lg p-5 bg-indigo-100 my-5">
          <h1 className="text-indigo-700 text-2xl font-semibold text-center my-5 bg-white p-2 rounded-full shadow-inner shadow-indigo-400 uppercase">
            {detail.name.common}
          </h1>
          <p className="text-center">
            {detail.independent ? "Independent" : "Not Independent"} Country
          </p>
          <p className="text-center capitalize">{detail.status}</p>
          <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-10">
            <div className="w-full md:w-1/2 lg:w-1/2 ">
              <h4 className="text-indigo-700 text-lg mb-2">
                <strong>Official Name:</strong> {detail.name.official}
              </h4>

              <p>
                <strong>Population:</strong>{" "}
                <span className="text-red-600">{detail.population}</span>
              </p>

              <p>
                <strong>Region:</strong> {detail.region}
              </p>

              <p>
                <strong>Subregion:</strong> {detail.subregion}
              </p>

              <p>
                <strong>Capital:</strong> {detail.capital}
              </p>

              <p>
                <strong>Top Level Domain:</strong> ({detail.tld})
              </p>

              <p>
                <strong>Currencies: </strong>
                {detail.currencies
                  ? Object.keys(detail.currencies).map((key) => (
                      <span key={key}>{detail.currencies[key].name}</span>
                    ))
                  : ""}
              </p>

              <p>
                <strong>Languages: </strong>
                {detail.languages
                  ? Object.keys(detail.languages).map((key) => (
                      <span key={key}>{detail.languages[key]}, </span>
                    ))
                  : ""}
              </p>
              <p>
                <strong>Location: </strong>
                <a
                  className="cursor-pointer text-indigo-700"
                  href={detail.maps.googleMaps}
                  target="_blank"
                >
                  Map Link
                </a>
              </p>
              <p>
                <strong>Car Signs:</strong> Car sign used in{" "}
                {detail.name.common}: {detail.car.signs}
              </p>
              <p>
                <strong>Driving Side:</strong> They drive on the{" "}
                {detail.car.side} side of the road.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center items-center gap-10">
              {/* Add flag image */}
              <div className="flex justify-center w-60 h-40 border border-black p-1">
                <img
                  className="w-full h-full shadow-sm shadow-indigo-400"
                  src={detail.flags.png}
                  alt={detail.name.common + " flag"}
                />
              </div>

              {/* Add coat of arms image */}
              <div className="flex justify-center w-60 h-40 border border-black p-1">
                <img
                  className="w-full h-full shadow-sm shadow-indigo-400"
                  src={detail.coatOfArms.png}
                  alt={detail.name.common + " coat of arms"}
                />
              </div>

              {/* Add text */}
              <p className="">
                Here are the flag and coat of arms images for{" "}
                <span className="uppercase font-semibold text-indigo-700">
                  {detail.name.common}
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
