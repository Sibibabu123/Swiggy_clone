
import React, { useRef } from "react";
import "./Restaurants.css";


import cityView from "../assets/City view lounge.png";
import Arabickhana from "../assets/Arabickhana.png";
import  HoneycaneSugarcane from "../assets/Honeycane Sugarcane.png";
import EnteMeal from "../assets/EnteMeal.png";
import Adhira_appacoffee from "../assets/Adhira_appacoffee.png";
import Tharavadu from '../assets/Tharavadu.png';
import fresstrees from '../assets/fresstrees.png';
import Sulthan from '../assets/Sulthan.png';
import Jugos from '../assets/Jugos.png';



function Restaurants() {
  const sliderRef = useRef(null);

  const restaurants = [
    {
      id: 1,
      name: "City View Lounge",
      image:cityView,
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
      image:Arabickhana,
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
      name: "HoneycaneSugarcane...",
    image:HoneycaneSugarcane,
      rating: "4.5",
      category: "Bakery · Beverages",
      location: "The Classic Fort, Panampilly Nagar, Kochi",
      price: "₹200 for two",
      distance: "5.2 km",
      offer: "Flat 25% off on pre-booking",
      more: "+ 3 more",
    },
    {
       id: 3,
      name: "fresstrees",
    image:fresstrees,
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
      name: "EnteMeal",
      image:EnteMeal,
      rating: "",
      category: "Kerala · South Indian",
      location: "Adona Building, Ernakulam, Kochi",
      price: "",
      distance: "",
      offer: "Flat 20% off on pre-booking",
      more: "",
    },
    {
    id: 4,
    name: "Jugos",
    image:Jugos,
    rating: 4.8/5,
    category:"",
    location:"ChakolasOrangePark, Edachira, Thengod, Kakkanad",
    distance: "",
    offer: "Nonelisted",
    more: "",
    },
    {
      id: 4,
      name: "AdhiraAppaCoffee",
      image:Adhira_appacoffee,
      rating: 4.3/5,
      category: "CoffeeShop",
      location:"PanampillyNagar, Kochi, Ernakulam, Keralam" ,
      price: "Moderate",
      distance: "",
      offer: "Nonelisted",
      more: "",
    },
    {
      id: 1,
      name: "Tharavadu",
      image:Tharavadu,
      rating: "3.9",
      category: "South Indian ",
      location: "Hotel Presidency, Ernakulam, Kochi",
      price: "₹1200 for two",
      distance: "8.8 km",
      offer: "Flat 35% off on pre-booking",
      more: "+ 3 more",
    },
    {
id: 4,
      name: "Sulthan",
      image:Sulthan,
      rating: 4.3/5,
      category: "CoffeeShop / Cafe",
      location:"PanampillyNagar, Kochi, Ernakulam, Keralam" ,
      price: "Moderate",
      distance: "",
      offer: "Nonelisted",
      more: "",
    }

   
  ];

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "right" ? 350 : -350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="dineout-section">
      <div className="dineout-header">
        <h2>Discover best restaurants on Dineout</h2>

        <div className="dineout-arrows">
          <button
            onClick={() => scrollSlider("left")}
            aria-label="Previous restaurants"
          >
            ←
          </button>

          <button
            onClick={() => scrollSlider("right")}
            aria-label="Next restaurants"
          >
            →
          </button>
        </div>
      </div>

      <div className="dineout-slider" ref={sliderRef}>
        {restaurants.map((restaurant) => (
          <div className="dineout-card" key={restaurant.id}>
            <div className="dineout-image">
              <img src={restaurant.image} alt={restaurant.name} />

              {restaurant.id !== 2 && restaurant.id !== 4 && (
                <span className="girf-badge">GIRF SPECIAL</span>
              )}

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
                {restaurant.more && <b>{restaurant.more}</b>}
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
     
    </section>
   
  );
}

export default Restaurants;

