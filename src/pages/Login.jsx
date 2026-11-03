import React from "react";
import "./Login.css";
import logimage from "../assets/logimage.png";

function Login({ closeLogin, openSignup }) {

return ( <div className="auth-overlay" onClick={closeLogin}>


  <div
    className="login-panel"
    onClick={(e) => e.stopPropagation()}
  >

    <button
      className="login-close-btn"
      onClick={closeLogin}
    >
      ×
    </button>

    <div className="login-image">
      <img src={logimage} alt="Login" />
    </div>

    <div className="login-content">

      <h1>Login</h1>

      <p className="login-subtitle">
        or{" "}
        <button
          type="button"
          className="auth-link"
          onClick={openSignup}
        >
          create an account
        </button>
      </p>

      <form className="login-form">

        <input
          type="tel"
          placeholder="Phone number"
          maxLength="10"
          required
        />

        <button
          type="submit"
          className="login-submit-btn"
        >
          LOGIN
        </button>

      </form>

      <p className="login-terms">
        By clicking on Login, I accept the
        <strong> Terms &amp; Conditions </strong>
        and <strong>Privacy Policy</strong>.
      </p>

    </div>

  </div>

</div>


);
}

export default Login;
