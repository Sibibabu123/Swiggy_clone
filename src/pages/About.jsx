
import React from "react";
import "./About.css";
import swiggylogo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="about-page">

    
      <header className="about-navbar">

          <div className="image_logo">
                  <img src={swiggylogo} alt="Swiggy Logo" />
                </div>
          
                       

        <nav className="about-nav-links">
          <a href="#about" className="active">About Swiggy</a>
          <a href="#business">Our Businesses</a>
          <a href="#delivery">Delivering For Everyone</a>
          <a href="#news">Newsroom</a>
          <a href="#governance">Governance </a>
          <a href="#investors">Investor Relations </a>
          <a href="#sustainability">Sustainability </a>
          <a href="#contact">Contact Us</a>
        </nav>
<Link to='/'> <button className="About-close-btn">
                            ×
                        </button></Link>
      </header>

     
      <main className="about-hero" id="about">

        <div className="about-content">
          <h1>ABOUT US</h1>

          <p>
            Swiggy is a new-age consumer-first organization offering
            an easy-to-use convenience platform, accessible through
            a unified app.
          </p>
        </div>

        
        <div className="map-background">

         
          <div className="map-curve curve-one"></div>
          <div className="map-curve curve-two"></div>

          
          <div className="map-marker food-marker">
            <div className="marker-circle">
              <span className="marker-emoji"></span>
            </div>
            <span className="marker-dot"></span>
            <h3>Food</h3>
          </div>

          
          <div className="map-marker instamart-marker">
            <div className="marker-circle">
              <span className="marker-emoji"></span>
            </div>
            <span className="marker-dot"></span>
            <h3>Instamart</h3>
          </div>

        
          <div className="map-marker bottom-left-marker">
            <div className="marker-circle">
              <span className="marker-emoji"></span>
            </div>
          </div>

  
          <div className="map-marker bottom-right-marker">
            <div className="marker-circle">
              <span className="marker-emoji"></span>
            </div>
          </div>

      
          <div className="central-swiggy-logo">
            <span>S</span>
          </div>

        </div>
      </main>

    </div>
  );
}

export default About;

