import React from "react";
import { Link } from 'react-router-dom'
import "./Login.css";



function Login() {
    
    return (
        <div className="login-overlay">

            <div className="login-panel">

             
                <Link to='/'> <button className="login-close-btn">
                    ×
                </button></Link>
               

           
                <div className="login-content">

                    <h1>Login</h1>

                    <p className="login-subtitle">
                        or <a href="/signup">create an account</a>
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