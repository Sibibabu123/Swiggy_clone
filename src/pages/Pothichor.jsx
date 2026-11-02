import React, { useState } from "react";
import "./Pothichor.css";
import swiggy from "../assets/swiggy.png";
import PothichorImage from "../assets/Pothichor.png";
import Empire_plaza from "../assets/Empire_plaza.png";
import Dhevakeeyam_Ootusala from '../assets/Dhevakeeyam_Ootusala.png';
import Manna_restaurant from "../assets/Manna_restaurant.png";
import Shap_food_restaurant from "../assets/Shap_food_restaurant.png";
import Chillies from "../assets/Chillies.png";



const restaurants = 
[
  {
    id: 1,
    name: "Empire Plaza",
    image: Empire_plaza,
    rating: "4.4",
    time: "35-40 mins",
    cuisine: "Arabian, South Indian, Biryani",
    location: "Maradu",
  },
  {
    id: 2,
    name: "Dhevakeeyam Ootusala",
    image: Dhevakeeyam_Ootusala,
    rating: "4.5",
    time: "25-30 mins",
    cuisine: "Indian",
    location: "Vyttila",
  },

  {
    id: 3,
    name: "Manna Restaurant",
    image:  Manna_restaurant,
    rating: "4.5",
    time: "30-35 mins",
    cuisine: "South Indian, Kerala, Biryani, Chinese",
    location: "Panampilly Nagar",
  },{

  
    id: 4,
    name: "Chillies",
    image: Chillies,
    rating: "4.3",
    time: "30-35 mins",
    cuisine: "South Indian, Biryani, Indian, Andhra",
    location: "Vyttila",
  },
  
  {
    id: 5,
    name: "Empire plaza",
    image:  Empire_plaza,
    rating: "4.2",
    time: "30-35 mins",
    cuisine: "Kerala, South Indian",
    location: "Kochi",
  },
  {
    id: 6,
    name: "Shaap food restaurant",
    image:Shap_food_restaurant ,
    rating: "4.4",
    time: "25-30 mins",
    cuisine: "South Indian, Kerala",
    location: "Ernakulam",
  },
  {
    id: 7,
    name: "Pothichor",
   image: PothichorImage,
    rating: "4.3",
    time: "30-40 mins",
    cuisine: "Indian, Kerala",
    location: "Kochi",
  },
  {
    id: 8,
    name: "Shap food restaurant",
    image: Shap_food_restaurant,
    rating: "4.5",
    time: "25-35 mins",
    cuisine: "Malabar, Biryani",
    location: "Edappally",
  },
];

function Pothichoru() {

  const [sort, setSort] = useState("default");

  const sortedRestaurants = [...restaurants].sort((a, b) => {
    if (sort === "rating") {
      return Number(b.rating) - Number(a.rating);
    }
    if (sort === "name") {
      return a.name.localeCompare(b.name);
    }
    return a.id - b.id;
  });

  return (
    <div className="pothi-page">

      {/* NAVBAR */}

      <nav className="shawarma-navbar">
      
              <div className="nav-left">
      
                <img
                  src={swiggy}
                  alt="swiggy"
                  className="swiggy"
                />
      
                <div className="location">
                  <span>Other</span>
                  
                </div>
      
              </div>
      
              <div className="nav-right">
      
                <div className="nav-item">
                  <span>▢</span>
                  Swiggy Corporate
                </div>
      
                <div className="nav-item">
                  <span>⌕</span>
                  Search
                </div>
      
                <div className="nav-item offers-item">
                  <span>◉</span>
                  Offers
                  <sup>NEW</sup>
                </div>
      
                <div className="nav-item">
                  <span>◎</span>
                  Help
                </div>
      
                <div className="nav-item">
                  <span>♙</span>
                  Sign In
                </div>
      
              </div>
      
            </nav>

      {/* MAIN CONTENT */}

      <main className="pothi-container">

        <div className="pothi-heading">

          <h1>Pothichoru</h1>

          <p>
            Flavours wrapped in nostalgia and banana leaves
          </p>

        </div>


        {/* SORT DROPDOWN */}

        <div className="pothi-sort">

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >

            <option value="default">Sort By</option>

            <option value="rating">Rating</option>

            <option value="name">Name</option>

          </select>

        </div>


        {/* RESTAURANT CARDS */}

        <div className="pothi-grid">

          {sortedRestaurants.map((restaurant) => (

            <div className="pothi-card" key={restaurant.id}>

              <div className="pothi-image">

                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                />

              </div>

              <div className="pothi-details">

                <h3>{restaurant.name}</h3>

                <div className="pothi-rating">

                  <span className="rating-star">★</span>

                  <span>
                    {restaurant.rating} · {restaurant.time}
                  </span>

                </div>

                <p className="pothi-cuisine">
                  {restaurant.cuisine}
                </p>

                <p className="pothi-location">
                  {restaurant.location}
                </p>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default Pothichoru ;