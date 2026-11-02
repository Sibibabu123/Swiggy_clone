
import React, { useState } from "react";
import "./Cities.css";

function Cities() {
  const [showMore, setShowMore] = useState(false);

  const cities = [
    "Bangalore",
    "Gurgaon",
    "Hyderabad",
    "Delhi",
    "Mumbai",
    "Pune",
    "Kolkata",
    "Chennai",
    "Ahmedabad",
    "Chandigarh",
    "Jaipur",
    "Kochi",
    "Coimbatore",
    "Thiruvananthapuram",
    "Lucknow",
    "Indore",
  ];

  const visibleCities = showMore ? cities : cities.slice(0, 11);

  return (
    <section className="cities-section">
      <h2>Cities with food delivery</h2>

      <div className="cities-grid">
        {visibleCities.map((city, index) => (
          <button className="city-button" key={index}>
            Order food online in {city}
          </button>
        ))}

        <button
          className="city-button show-more-button"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
          <span className={showMore ? "arrow-up" : "arrow-down"}></span>
        </button>
      </div>
    </section>
  );
}

export default Cities;

