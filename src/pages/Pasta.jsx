import React from "react";
import "./Shawarma.css";
import swiggy from "../assets/Swiggy.png";        




const restaurants = [
  {
    id: 1,
    name: "Burger it up",
    image: Burger1,
    rating: "4.4",
    time: "25–30 mins",
    food: "Lebanese, Beverages",
    location: "Thoppumpady",
  },
  {
    id: 2,
    name: "Bunly Burgers and Wraps",
    image: Burger2,
    rating: "4.3",
    time: "50–60 mins",
    food: "Turkish, Arabian, American, Beverages",
    location: "Maradu",
  },
  {
    id: 3,
    name: "Seoul Fried Chicken",
    image: Burger3,
    rating: "4.1",
    time: "30–35 mins",
    food: "Arabian, Chinese",
    location: "Ravipuram",
  },
  {
    id: 4,
    name: "Indiana Burgers",
    image: Burger1,
    rating: "4.6",
    time: "40–45 mins",
    food: "Chinese, Arabian, Indian, Ice Cream",
    location: "Panampilly Nagar",
  },
  {
    id: 5,
    name: "Kouzina Kafe",
    image: Burger1,
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


      {/* MAIN CONTENT */}

      <main className="shawarma-container">

        <h1>Burger</h1>

        <p className="shawarma-description">
         Satisfy your cravings with these fresh and flavoursome burgers. 
        </p>


        {/* FILTER BUTTONS */}

        <div className="filter-section">

          <button>Filter <span>☷</span></button>

          <button>Sort By </button>

          <button>Veg/Non-Veg</button>

          <button>Ratings </button>

          <button>Delivery Time </button>

          <button>Cost For Two</button>

        </div>


        {/* RESTAURANTS */}

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