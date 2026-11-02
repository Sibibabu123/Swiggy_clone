import React from "react";
import "./Shawarma.css";
import swiggy from "../assets/Swiggy.png";        
import Cake1 from "../assets/Cake1.png"
import Cake2 from "../assets/Cake2.png"
import Cake3 from "../assets/Cake3.png"
import Cake4 from "../assets/Cake4.png"
import Cake5 from "../assets/Cake5.png"
import Cake6 from "../assets/Cake6.png"
import Cake7 from "../assets/Cake7.png"
import Cake8 from "../assets/Cake8.png"
import Cake9 from "../assets/Cake9.png"



const restaurants = [
  {
    id: 1,
    name: "Cold Stone Creamery",
    image: Cake1,
    rating: "4.4",
    time: "25–30 mins",
    food: "Lebanese, Beverages",
    location: "Thoppumpady",
  },
  {
    id: 2,
    name: "Baskin Robins",
    image: Cake2,
    rating: "4.3",
    time: "50–60 mins",
    food: "Turkish, Arabian, American, Beverages",
    location: "Maradu",
  },
  {
    id: 3,
    name: "Milano Icecream",
    image: Cake3,
    rating: "4.1",
    time: "30–35 mins",
    food: "Arabian, Chinese",
    location: "Ravipuram",
  },
   {
    id: 5,
    name: "Sundae Everyday",
    image: Cake9,
    rating: "4.2",
    time: "30–40 mins",
    food: "Arabian, Fast Food",
    location: "Kochi",
  },
  {
    id: 4,
    name: "Ibaco",
    image: Cake4,
    rating: "4.6",
    time: "40–45 mins",
    food: "Chinese, Arabian, Indian, Ice Cream",
    location: "Panampilly Nagar",
  },
  {
    id: 5,
    name: "Sundae Everyday",
    image: Cake5,
    rating: "4.2",
    time: "30–40 mins",
    food: "Arabian, Fast Food",
    location: "Kochi",
  },
  {
    id: 6,
    name: "Wolkano Creamery",
    image: Cake6,
    rating: "4.3",
    time: "35–40 mins",
    food: "Arabian, Beverages",
    location: "Ernakulam",
  },
   {
    id: 6,
    name: "Wolkano Creamery",
    image: Cake6,
    rating: "4.3",
    time: "35–40 mins",
    food: "Arabian, Beverages",
    location: "Ernakulam",
  },
  {
    id: 7,
    name: "Warmoven cake",
    image: Cake7,
    rating: "4.5",
    time: "25–35 mins",
    food: "Indian, Arabian",
    location: "Kochi",
  },
  {
    id: 8,
    name: "Srikrishna sweets",
    image: Cake8,
    rating: "4.1",
    time: "30–40 mins",
    food: "Fast Food, Arabian",
    location: "Kochi",
  },
   {
    id: 5,
    name: "Sundae Everyday",
    image: Cake5,
    rating: "4.2",
    time: "30–40 mins",
    food: "Arabian, Fast Food",
    location: "Kochi",
  },
];

function Shawarma() {
  return (
    <div className="shawarma-page">

      {/* NAVBAR */}

      <nav className="shawarma-navbar">

        <div className="nav-left">

          <img
            src={swiggy}
            alt="Swiggy"
            className="swiggy-logo"
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


      

      <main className="shawarma-container">

        <h1>Shawarma</h1>

        <p className="shawarma-description">
          Order in deliciously juicy and grilled Shawarmas to curb your cravings!
        </p>


        

        <div className="filter-section">

          <button>Filter <span>☷</span></button>

          <button>Sort By </button>

          <button>Veg/Non-Veg</button>

          <button>Ratings </button>

          <button>Delivery Time </button>

          <button>Cost For Two</button>

        </div>


       

        <h2 className="restaurant-heading">
          Restaurants to explore
        </h2>

        <div className="restaurant-grid">

          {restaurants.map((restaurant) => (

            <div className="restaurant-card" key={restaurant.id}>

              <div className="restaurant-image">

                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                />

              </div>

              <div className="restaurant-details">

                <h3>{restaurant.name}</h3>

                <div className="rating-time">

                  <span className="rating-star">★</span>

                  <span>{restaurant.rating}</span>

                  <span>·</span>

                  <span>{restaurant.time}</span>

                </div>

                <p>{restaurant.food}</p>

                <p>{restaurant.location}</p>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default Shawarma;