import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { name } = useParams();

  return (
    <div className="section">
      <h2>{name}</h2>
      <p>Service Details for {name}</p>
      <p>⏱ Time: 1-2 Hours</p>
      <p>✔ Includes full inspection and repair</p>
    </div>
  );
};

export default Details
