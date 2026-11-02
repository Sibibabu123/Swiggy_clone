import React from "react";
import "./Shawarma.css";
import swiggy from "../assets/Swiggy.png";        
// import  from "../assets/.png";  
// import from "../assets/.png";
// import  from "../assets/.png";
// import  from "../assets/.png";
// import  from "../assets/.png";
// import from "../assets/.png";
// import from "../assets/.png";
// import  from "../assets/.png";


// const restaurants = [
//   {
//     id: 1,
//     name: "",
//     image: ,
//     rating: "4.4",
//     time: "25–30 mins",
//     food: "Lebanese, Beverages",
//     location: "Thoppumpady",
//   },
//   {
//     id: 2,
//     name: "",
//     image:,
//     rating: "4.3",
//     time: "50–60 mins",
//     food: "Turkish, Arabian, American, Beverages",
//     location: "Maradu",
//   },
//   {
//     id: 3,
//     name: "",
//     image: ,
//     rating: "4.1",
//     time: "30–35 mins",
//     food: "Arabian, Chinese",
//     location: "Ravipuram",
//   },
//   {
//     id: 4,
//     name: "",
//     image: ,
//     rating: "4.6",
//     time: "40–45 mins",
//     food: "Chinese, Arabian, Indian, Ice Cream",
//     location: "Panampilly Nagar",
//   },
//   {
//     id: 5,
//     name: "",
//     image: ,
//     rating: "4.2",
//     time: "30–40 mins",
//     food: "Arabian, Fast Food",
//     location: "Kochi",
//   },
//   {
//     id: 6,
//     name: "",
//     image:,
//     rating: "4.3",
//     time: "35–40 mins",
//     food: "Arabian, Beverages",
//     location: "Ernakulam",
//   },
//   {
//     id: 7,
//     name: "",
//     image: ,
//     rating: "4.5",
//     time: "25–35 mins",
//     food: "Indian, Arabian",
//     location: "Kochi",
//   },
//   {
//     id: 8,
//     name: "",
//     image: ,
//     rating: "4.1",
//     time: "30–40 mins",
//     food: "Fast Food, Arabian",
//     location: "Kochi",
//   },
// ];

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

        <h1>Shawarma</h1>

        <p className="shawarma-description">
          Order in deliciously juicy and grilled Shawarmas to curb your cravings!
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