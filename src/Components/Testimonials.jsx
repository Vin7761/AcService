import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const reviews = [
    { name: "Rahul", text: "⭐⭐⭐⭐⭐ Best AC service, very fast!" },
    { name: "Amit", text: "⭐⭐⭐⭐ Very affordable and quick." },
    { name: "Sneha", text: "⭐⭐⭐⭐⭐ Excellent work!" },
    { name: "Priya", text: "⭐⭐⭐⭐⭐ Very professional service!" },
    { name: "Rohan", text: "⭐⭐⭐⭐ Good experience overall." },
    { name: "Neha", text: "⭐⭐⭐⭐⭐ Quick response and great support!" },
  ];

  return (
    <div className="test-section">
      <h2>Customer Reviews</h2>

      <div className="test-container">
        {reviews.map((r, i) => (
          <div className="test-card" key={i}>
            <p>{r.text}</p>
            <h4>- {r.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testimonials
