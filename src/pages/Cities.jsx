
import React, { useState } from "react";
import "./Cities.css";
import { Link } from "react-router-dom";

function Cities() {
  const [showMore, setShowMore] = useState(false);

  const cities = [
    <Link to="https://www.swiggy.com/city/bangalore">Bangalore</Link>,
    <Link to="https://www.swiggy.com/city/gurgaon">Gurgaon</Link>,
    <Link to="https://www.swiggy.com/city/hyderabad">Hyderabad</Link>,
    <Link to="https://www.swiggy.com/city/delhi">Delhi</Link>,
    <Link to="https://www.swiggy.com/city/mumbai">Mumbai</Link>,
    <Link to="https://www.swiggy.com/city/pune">Pune</Link>,
    <Link to="https://www.swiggy.com/city/kolkata">Kolkata</Link>,
    <Link to="https://www.swiggy.com/city/chennai"> Chennai</Link>,
    <Link to="https://www.swiggy.com/city/ahmedabad"> Ahmedabad</Link>,
    <Link to="https://www.swiggy.com/city/chandigarh">Chandigarh</Link>,
    <Link to="https://www.swiggy.com/city/jaipur">Jaipur</Link>,
    <Link to="https://www.swiggy.com/city/kochi"> Kochi</Link>,
    <Link to="https://www.swiggy.com/city/coimbatore">Coimbatore</Link>,
    <Link to="https://www.swiggy.com/city/thiruvananthapuram/order-online"> Thiruvananthapuram,</Link>,
    <Link to="https://www.swiggy.com/city/lucknow">Lucknow</Link>,
    <Link to="https://www.swiggy.com/city/nagpur">Nagpur</Link>
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

