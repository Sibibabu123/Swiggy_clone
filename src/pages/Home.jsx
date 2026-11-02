import React from 'react';
import './Home.css';
import swiggylogo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import SaveFoodSection from './SaveFoodSection.jsx';
import Foodcategories from './Foodcategories.jsx';
import Restaurants from "./Restaurants";
import Cities from '../pages/Cities.jsx';
import New_image from './New_image';
import Signup from "./Signup";
import { useState } from "react";

import Partner from '../pages/Partner.jsx';
import Footer from '../pages/Footer.jsx';
import veg_bck from '../assets/veg_bck.png';
import sushi_bck from'../assets/sushi_bck.png';
import image1 from '../assets/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png';
import image2 from '../assets/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png';
import image3 from '../assets/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png';

function Home() {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="home_page">

      <header className="navbar">

        <div className="image_logo">
          <Link to="/">
            <img src={swiggylogo} alt="Swiggy Logo" />
          </Link>
        </div>

        <nav className="nav_links"> 
          <Link to="/save-food" className="nav-link save-food-link">
            <span className="save-leaf"></span> Save Food
            <span className="save-badge">SaveEat</span>
          </Link>

          <Link to="https://www.swiggy.com/corporate/" className="nav-link">
            Swiggy Partner
          </Link>

          <Link to="/Partner" className="nav-link">
            Partner with Us
          </Link>

          <Link to="/New_image">
            <button className="app-btn">
              Get the App ↗
            </button>
          </Link>

          <button onClick={() => setShowSignup(true)} className='sign-btn'>
  Sign Up
</button>

        </nav>
      </header>

      
      <section className="hero_section">

        <h1>
          Order food & groceries. Discover
          <br />
          best restaurants. Swiggy it!
        </h1>
 <div className='veg_bck_1'>
  <img src={veg_bck} alt="" width='270px'className='veg_bck' />
 </div>
        
        <div className="search-container">
        

          <div className="location-box">

            <i className="bi bi-geo-alt-fill location-icon"></i>
            
 
            <input
              type="text"
              placeholder="Enter your delivery location"
              className="location-input"
            />

            <i className="bi bi-chevron-down dropdown-icon"></i>

          </div>

          <div className="restaurant-search-box">

            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              className="restaurant-input"
            />
            

            <i className="bi bi-search search-icon"></i>
           
            

          </div>

        </div>
        <div className='veg_bck_2'>
            <img src={sushi_bck} alt="" width='260px'className='veg_bck_2' />
        </div>
         

      </section>

      
      <div className="homeimage">
        <Link to="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1"> <img src={image1} alt="Food promotion 1" className='instamart' /></Link>


       <Link to="https://www.swiggy.com/dineout"> <img src={image2} alt="Food promotion 2" className='dineout' /></Link>
       
<Link to="https://www.swiggy.com/restaurants"> <img src={image3} alt="Food promotion 3" className='food_delivery'/>
</Link>
       
      </div>

     
      <SaveFoodSection />

      <Foodcategories />
      <Restaurants />
      <New_image/>
      <Cities />
      <Footer/>

      
     {showSignup && (
  <Signup closeSignup={() => setShowSignup(false)} />
)}
      
      
       
    </div>
  );
}

export default Home;
