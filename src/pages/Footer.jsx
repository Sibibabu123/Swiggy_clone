import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import swiggy from "../assets/swiggy.png";

function Footer() {
  return (
    <footer className="swiggy-footer">
      <div className="footer-top-container">
       <div className="footer-brand-section">
          <Link to="/" className="footer-logo-wrapper">
            <img src={swiggy} alt="" className="footer-swiggy-logo" />
          </Link>
          <p className="footer-copyright">© 2026 Swiggy Limited</p>
        </div><div className="footer-links-col">
          <h4 className="footer-col-title">Company</h4>
          <Link to="https://careers.swiggy.in/discover-our-world//">About Us</Link>
          <Link to="https://www.swiggy.com/corporate/">Swiggy Corporate</Link>
    <Link to="https://careers.swiggy.in/">Careers</Link>
            <Link to= "https://careers.swiggy.in/meet-our-people/</div>">Team</Link>  
             
     <Link to="https://www.swiggy.com/swiggy-super"> Swiggy One</Link>
         <Link to="https://www.swiggy.com/instamart"> Swiggy Instamart</Link>
        </div>
      <div className="footer-links-col">
          <h4 className="footer-col-title">Contact us</h4>
          <Link to="https://www.swiggy.com/support">Help</Link>
          <Link to="https://partner.swiggy.com/food/login">Partner With Us</Link>
          <Link to="https://partner.swiggy.com/food/login">Ride With Us</Link>

          <div className="footer-legal-group">
            <h4 className="footer-col-title">Legal</h4>
           <Link to="https://www.swiggy.com/support">Terms and conditions</Link>
           <Link to="https://www.swiggy.com/cookie-policy">cookies policy</Link>
           <Link to="https://www.swiggy.com/privacy-policy">privacy policies</Link>
          </div>
        </div>

       
        <div className="footer-links-col">
          <h4 className="footer-col-title">Available in:</h4>
          <Link to="https://www.swiggy.com/city/bangalore">Banglore</Link>
          <Link to="http://swiggy.com/city/gurgaon">Gurgaon</Link>
          <Link to="https://www.swiggy.com/city/hyderabad">Hyderabad</Link>
          <Link to="https://www.swiggy.com/city/delhi">Delhi</Link>
          <Link to="https://www.swiggy.com/city/mumbai">Mumbai</Link>
          <Link to="https://www.swiggy.com/city/pune">Pune</Link>
          
          <button className="footer-cities-btn" type="button">
            685 cities <span className="chevron-down">⌄</span>
          </button>
        </div>

        
        <div className="footer-links-col">
          <h4 className="footer-col-title">Life at Swiggy</h4>
          <Link to="https://blog.swiggy.com/">Explore with swiggy</Link>
          <Link to="https://blog.swiggy.com/category/swiggy-restaurant-awards/">Swiggy News</Link>
          <Link to="https://blog.swiggy.com/category/snackables/campaigns/">Snackables</Link>
          

          <div className="footer-social-group">
            <h4 className="footer-col-title">Social Links</h4>
            <div className="footer-social-icons">
              <Link to="https://www.instagram.com/swiggyindia/?hl=en">Instagram</Link>
             <Link to="https://www.linkedin.com/company/swiggy-in/">Linked.in</Link>
             <Link to="https://www.facebook.com/swiggy.in/">Facebook</Link>
              
            </div>
          </div>
        </div>
      </div>

      <div className="footer-divider-line"></div>

      
      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <h3 className="footer-bottom-heading">
            For better experience, download the Swiggy app now
          </h3>

          <div className="footer-app-badges">
            <Link to="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" className="app-badge-btn" aria-label="Download on App Store">
             
              <svg width="24" height="28" viewBox="0 0 24 28" fill="currentColor" className="badge-icon">
                <path d="M18.71 20.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 18 2.94 13.45 4.7 10.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 7.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.72-.94 2.74 1 .08 2.03-.49 2.65-1.24z"/>
              </svg>
              <div className="badge-copy">
                <span className="badge-subtitle">Download on the</span>
                <span className="badge-title">App Store</span>
              </div>
            </Link>

            <Link to="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920" className="app-badge-btn" aria-label="Get it on Google Play">
              
              <svg width="24" height="26" viewBox="0 0 24 24" className="badge-icon">
                <path fill="#4285F4" d="M3.609 1.814L13.793 12 3.61 22.186a2.03 2.03 0 0 1-.22-.387V2.2a2.03 2.03 0 0 1 .22-.386z"/>
                <path fill="#34A853" d="M17.432 8.358l-3.639 3.642 3.639 3.642 4.135-2.388c.844-.488.844-1.28 0-1.768l-4.135-2.388z"/>
                <path fill="#EA4335" d="M3.609 1.814L13.793 12l3.639-3.642L5.835 1.54C4.84.966 4.07 1.08 3.609 1.814z"/>
                <path fill="#FBBC04" d="M13.793 12L3.609 22.186c.461.734 1.231.848 2.226.274l11.597-6.818-3.639-3.642z"/>
              </svg>
              <div className="badge-copy">
                <span className="badge-subtitle">GET IT ON</span>
                <span className="badge-title">Google Play</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
