import React from "react";

interface CountryCardProps {
  country: any;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const { name } = country;
  return (
    <div>
      <p>{name.common}</p>
    </div>
  );
};

export default CountryCard;
