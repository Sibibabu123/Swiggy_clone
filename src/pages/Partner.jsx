
import React, { useState } from "react";
 
import '../pages/Partner.css';
import swiggyLogo from "../assets/logo.png";

function Partner() {

  const [activeTab, setActiveTab] = useState("Food Delivery");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [message, setMessage] = useState("");

  

  const partnerData = {

    "Food Delivery": {
      heading: "Get your restaurant delivery-ready in 24hrs!",
      steps: [
        "Install the Swiggy Owner App",
        "Login/Register using your phone number",
        "Enter restaurant details"
      ],
      documents: [
        "FSSAI License copy",
        "Your Restaurant menu",
        "Bank details",
        "GSTIN",
        "PAN card copy"
      ]
    },

    "Dineout": {
      heading: "Get your restaurant listed on Dineout!",
      steps: [
        "Register your restaurant",
        "Submit restaurant details",
        "Complete verification"
      ],
      documents: [
        "Restaurant details",
        "Restaurant menu",
        "Business contact information",
        "Bank details",
        "PAN card copy"
      ]
    },

    "Toing": {
      heading: "Get started with your Toing partnership!",
      steps: [
        "Register your business",
        "Submit business details",
        "Complete verification"
      ],
      documents: [
        "Business details",
        "Menu information",
        "Contact information",
        "Bank details",
        "PAN card copy"
      ]
    }

  };

  const currentData = partnerData[activeTab];

 
  const sendOTP = () => {

    if (!/^[6-9][0-9]{9}$/.test(mobile)) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setOtpSent(true);
    setMessage("Demo OTP: 123456");

  };

 

  const verifyOTP = () => {

    if (otp === "123456") {

      setVerified(true);
      setMessage("Mobile number verified successfully!");

    } else {

      setMessage("Invalid OTP. Please try again.");

    }

  };

  
  const resetForm = () => {

    setMobile("");
    setOtp("");
    setOtpSent(false);
    setVerified(false);
    setMessage("");

  };

  return (

    <div className="partner-page">

      
      <section className="partner-hero">

        <div className="hero-container">

          

          <div className="hero-left">

            <div className="partner-logo">

              <img
                src={swiggyLogo}
                alt="Swiggy Logo"
                className="partner-logo-image"
              />

              <h4>PARTNER WITH SWIGGY!</h4>

              <div className="orange-arrow"></div>

            </div>

            <h1>
              Increase your online
              <br />
              orders
            </h1>

            <div className="hero-line"></div>

          </div>


          {/* REGISTRATION FORM */}

          <div className="registration-card">

            <h2>Get Started</h2>

            {!verified ? (

              <>

                <label>
                  Enter a mobile number or restaurant ID
                  <br />
                  to continue
                </label>

                {!otpSent ? (

                  <>

                    <div className="input-container">

                      <input
                        type="tel"
                        placeholder="Enter Mobile Number"
                        value={mobile}
                        maxLength={10}
                        onChange={(e) =>
                          setMobile(
                            e.target.value.replace(/\D/g, "")
                          )
                        }
                      />

                      <span className="info-icon">ⓘ</span>

                    </div>

                    <button
                      className="continue-btn"
                      onClick={sendOTP}
                    >
                      Continue
                    </button>

                  </>

                ) : (

                  <>

                    <p className="otp-description">
                      Demo OTP: 123456
                    </p>

                    <div className="input-container">

                      <input
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={otp}
                        maxLength={6}
                        onChange={(e) =>
                          setOtp(
                            e.target.value.replace(/\D/g, "")
                          )
                        }
                      />

                    </div>

                    <button
                      className="continue-btn"
                      onClick={verifyOTP}
                    >
                      Verify OTP
                    </button>

                    <button
                      className="resend-btn"
                      onClick={resetForm}
                    >
                      Change mobile number
                    </button>

                  </>

                )}

                <p className="form-message">
                  {message}
                </p>

              </>

            ) : (

              <div className="success-message">

                <div className="success-icon">✓</div>

                <h2>Verified Successfully!</h2>

                <p>Your mobile number is verified.</p>

                <p>{mobile}</p>

                <button
                  className="continue-btn"
                  onClick={resetForm}
                >
                  Done
                </button>

              </div>

            )}

            <p className="terms">
              By logging in, I agree to Swiggy's
              <a href="#terms"> terms & conditions</a>
            </p>

          </div>

        </div>

      </section>


      {/* NAVIGATION TABS */}

      <div className="partner-tabs">

        {["Food Delivery", "Dineout", "Toing"].map((tab) => (

          <button
            key={tab}
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>

        ))}

      </div>


      {/* INFORMATION SECTION */}

      <section className="partner-information">

        {/* LEFT SECTION */}

        <div className="steps-section">

          <p className="steps-small">
            In just 3 easy steps
          </p>

          <h2>
            {currentData.heading}
          </h2>

          <div className="small-orange-line"></div>

          <div className="steps-card">

            {currentData.steps.map((step, index) => (

              <div className="step-item" key={index}>

                <div className="step-dot"></div>

                <div className="step-content">

                  <span>STEP {index + 1}</span>

                  <h3>{step}</h3>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* RIGHT SECTION */}

        <div className="documents-section">

          <p>
            <strong>
              For an easy form filling process,
            </strong>

            <br />

            you can keep these documents handy.
          </p>

          <div className="document-divider"></div>

          <ul>

            {currentData.documents.map((document, index) => (

              <li key={index}>

                <span>{document}</span>

                {document === "FSSAI License copy" && (

                  <a
                    href="https://foscos.fssai.gov.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apply Here
                  </a>

                )}

                {document === "GSTIN" && (

                  <a
                    href="https://www.gst.gov.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apply Here
                  </a>

                )}

              </li>

            ))}

          </ul>

        </div>

      </section>

    </div>

  );

}

export default Partner;

