import React from "react";
import { Link } from "react-router-dom";

function ServiceCard({ title, price }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Price: ₹{price}</p>

    </div>
  );
}

export default ServiceCard
55