import React from "react";
import Biriyani from "../assets/Biriyani.png";
import Biriyani1 from "../assets/Biriyani1.png";
import Biriyani2 from "../assets/Biriyani2.png";
import Biriyani3 from "../assets/Biriyani3.png";



const biryaniRestaurants = [
  {
    id: 1,
    name: "Shalimar Biriyani",
    image: Biriyani1,
    rating: "4.5",
    time: "20–25 mins",
    food: "Thalassery Biryani, Malabar, Chicken Biryani",
    location: "Kakkanad",
    price: 260,
    isVeg: false
  },
  {
    id: 2,
    name: "Empire Plaza",
    image: Biriyani1,
    rating: "4.4",
    time: "30–35 mins",
    food: "Dum Biryani, Mutton Biryani, Arabian",
    location: "Maradu",
    price: 320,
    isVeg: false
  },
  {
    id: 3,
    name: "Chillies Restaurant",
    image: Biriyani2,
    rating: "4.3",
    time: "25–30 mins",
    food: "Hyderabadi Biryani, Andhra Spices",
    location: "Vyttila",
    price: 290,
    isVeg: false
  },
  {
    id: 4,
    name: "Sulthan Biriyani",
    image: Biriyani3,
    rating: "4.6",
    time: "35–40 mins",
    food: "Kozhikodan Dum Biryani, Kebab Combos",
    location: "Panampilly Nagar",
    price: 350,
    isVeg: false
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

        <h1>Biriyani</h1>

        <p className="shawarma-description">
          Order in deliciously juicy and tasty Biriyani to curb your cravings!
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

          {biryaniRestaurants.map((restaurant) => (

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
