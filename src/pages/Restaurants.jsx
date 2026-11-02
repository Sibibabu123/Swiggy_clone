
import React, { useRef } from "react";
import "./Restaurants.css";
import { Link } from "react-router-dom";


import cityView from "../assets/City view lounge.png";
import Arabickhana from "../assets/Arabickhana.png";
import HoneycaneSugarcane from "../assets/Honeycane Sugarcane.png";
import EnteMeal from "../assets/EnteMeal.png";
import Adhira_appacoffee from "../assets/Adhira_appacoffee.png";
import Tharavadu from "../assets/Tharavadu.png";
import fresstrees from "../assets/fresstrees.png";
import Sulthan from "../assets/Sulthan.png";
import Jugos from "../assets/Jugos.png";

function Restaurants() {

  const scrollRef = useRef(null);

  const restaurants = [
    {
      id: 1,
      name: "Be3 Resto and cafe",
      image: cityView,
      path:"https://www.swiggy.com/restaurants/kochi/fort-kochi/be3-resto-cafe-625605/dineout",
      rating: "3.9",
      category: "North Indian · Chinese",
      location: "Hotel Presidency, Ernakulam, Kochi",
      price: "₹1200 for two",
      distance: "8.8 km",
      offer: "Flat 35% off on pre-booking",
      more: "+ 3 more",
    },
    {
      id: 2,
      name: "Arabic Khana",
      image: Arabickhana,
      path:"https://www.swiggy.com/restaurants/kochi/fort-kochi/arabic-khana-607494/dineout",
      rating: "3.8",
      category: "Middle Eastern · South Indian",
      location: "Fort Kochi, Kochi",
      price: "₹800 for two",
      distance: "1.7 km",
      offer: "Flat 10% off on pre-booking",
      more: "+ 1 more",
    },
    {
      id: 3,
      name: "Roso origin",
      image: HoneycaneSugarcane,
      path:"https://www.swiggy.com/restaurants/kochi/panampilly-nagar/rosso-orgin-1153701/dineout",
      rating: "4.5",
      category: "Bakery · Beverages",
      location: "The Classic Fort, Panampilly Nagar, Kochi",
      price: "₹200 for two",
      distance: "5.2 km",
      offer: "Flat 25% off on pre-booking",
      more: "+ 3 more",
    },
    {
      id: 4,
      name: "Raintree multicuisine restaurant",
      image: fresstrees,
      path:"https://www.swiggy.com/restaurants/kochi/fort-kochi/raintree-multicuisine-restaurant-877533/dineout",
      rating: "4.5",
      category: "Bakery · Beverages",
      location: "Panampilly Nagar, Kochi",
      price: "₹200 for two",
      distance: "5.2 km",
      offer: "Flat 25% off on pre-booking",
      more: "+ 3 more",
    },
    {
      id: 5,
      name: "Mughal kitchen",
      image: EnteMeal,
      path:"https://www.swiggy.com/restaurants/kochi/fort-kochi/mughlai-kitchen-685997/dineout",
      rating: "",
      category: "Kerala · South Indian",
      location: "Adona Building, Ernakulam, Kochi",
      price: "",
      distance: "",
      offer: "Flat 20% off on pre-booking",
      more: "",
    },
    {
      id: 6,
      name: "cafe du mahe",
      image: Jugos,
      path:"https://www.swiggy.com/restaurants/kochi/fort-kochi/cafe-du-mahe-649221/dineout",
      rating: "4.8",
      category: "",
      location: "Chakolas Orange Park, Edachira, Kakkanad",
      price: "",
      distance: "",
      offer: "Non listed",
      more: "",
    },
    {
      id: 7,
      name: "Adhira Appa Coffee",
      image: Adhira_appacoffee,
      path:"https://www.swiggy.com/restaurants/kochi/panampilly-nagar/adhira-appa-coffee-1366643/dineout",
      rating: "4.3",
      category: "Coffee Shop",
      location: "Panampilly Nagar, Kochi",
      price: "Moderate",
      distance: "",
      offer: "Non listed",
      more: "",
    },
    {
      id: 8,
      name: "Tharavadu",
      image: Tharavadu,
      path:"https://www.swiggy.com/restaurants/kochi/willingdon-island/tharavadu-multi-cuisine-restaurant-402217/dineout",
      rating: "3.9",
      category: "South Indian",
      location: "Hotel Presidency, Ernakulam, Kochi",
      price: "₹1200 for two",
      distance: "8.8 km",
      offer: "Flat 35% off on pre-booking",
      more: "+ 3 more",
    },
    {
      id: 9,
      name: "Latest recipie",
      image: Sulthan,
      path:"https://www.swiggy.com/restaurants/kochi/maradu/latest-recipe-303050/dineout",
      rating: "4.3",
      category: "Coffee Shop / Cafe",
      location: "Panampilly Nagar, Kochi",
      price: "Moderate",
      distance: "",
      offer: "Non listed",
      more: "",
    },
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -500 : 500;

      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="dineout-section">

      <div className="dineout-container">

        <div className="dineout-header">

          <h2>Discover best restaurants on Dineout</h2>

          <div className="dineout-arrows">

            <button
              type="button"
              className="dineout-arrow-btn"
              onClick={() => handleScroll("left")}
              aria-label="Scroll Left"
            >
              ←
            </button>

            <button
              type="button"
              className="dineout-arrow-btn"
              onClick={() => handleScroll("right")}
              aria-label="Scroll Right"
            >
              →
            </button>

          </div>

        </div>

        {/* Horizontal Scroll Area */}

        <div className="dineout-scroll-area" ref={scrollRef}>

          {/* Two Row Grid */}

          <div className="dineout-grid-2rows">

            {restaurants.map((restaurant) => (

              <div className="dineout-card" key={restaurant.id}>

                <div className="dineout-image">

             <a
  href={restaurant.path}
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={restaurant.image}
    alt={restaurant.name}
  />
</a>

                  <span className="girf-badge">
                    GIRF SPECIAL
                  </span>

                  <div className="dineout-image-info">

                    <h3>{restaurant.name}</h3>

                    {restaurant.rating && (
                      <span className="dineout-rating">
                        ★ {restaurant.rating}
                      </span>
                    )}

                  </div>

                </div>

                <div className="dineout-details">

                  <div className="dineout-info-row">
                    <span>{restaurant.category}</span>
                    <span>{restaurant.price}</span>
                  </div>

                  <div className="dineout-info-row">
                    <span>{restaurant.location}</span>
                    <span>{restaurant.distance}</span>
                  </div>

                  <div className="booking-offer">
                    <span>♧</span>
                    <strong>{restaurant.offer}</strong>
                    {restaurant.more && (
                      <b>{restaurant.more}</b>
                    )}
                  </div>

                  <div className="bank-offer">
                    Up to 10% off with bank offers
                  </div>

                  <p className="paytm-offer">
                    Get extra ₹125 off using PAYTMNEW
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      <div className="restaurant-divider"></div>

    </section>
  );
}

export default Restaurants;


