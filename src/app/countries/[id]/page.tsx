import React from "react";

interface DetailPageProps {
  params: any;
}
const detailPage: React.FC<DetailPageProps> = ({ params }) => {
  return (
    <div className="pt-16">
      <h3>Details about countries {params.id}</h3>
    </div>
  );
};

export default detailPage;
