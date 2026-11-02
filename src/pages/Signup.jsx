
import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import logimage from'../assets/logimage.png';

function Signup({ closeSignup }) {

  return (
    <div className="signup-overlay" onClick={closeSignup}>

      <div
        className="signup-sidebar"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="close-btn"
          onClick={closeSignup}
        >
          ×
        </button>

        <div className="signup-content">

          <h2>Sign up</h2>

          <p>
            or <Link to="/Login">login to your account</Link>
          </p>

          <div className="signup-image">
            <img src={logimage} alt="Signup" />
          </div>

          <form>

            <input
              type="tel"
              placeholder="Phone number"
              required
            />

            <input
              type="text"
              placeholder="Name"
              required
            />

            <input
              type="email"
              placeholder="Email"
              required
            />

            <button type="submit" className="continue-btn">
              CONTINUE
            </button>

          </form>

          <small>
            By creating an account, I accept the Terms & Conditions
            and Privacy Policy.
          </small>

        </div>
      </div>
    </div>
  );
}

export default Signup;
