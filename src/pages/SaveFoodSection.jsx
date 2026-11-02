import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SaveFoodSection.css";

import biryaniImg from "../assets/Biryani.png";
import pizzaImg from "../assets/pizza.png";
import mealsImg from "../assets/EnteMeal.png";
import cakeImg from "../assets/cake.png";

const HOME_SURPLUS_ITEMS = [
  {
    id: 1,
    name: "Freshly prepared Chicken Biryani",
    restaurant: "ABC Restaurant",
    rating: "4.4",
    image: biryaniImg,
    originalPrice: 180,
    offerPrice: 120,
    quantity: 5,
    secondsLeft: 42 * 60,
    discount: "33% OFF",
    isVeg: false,
  },
  {
    id: 2,
    name: "Supreme Veg Pizza Combo",
    restaurant: "Pizza Corner Kochi",
    rating: "4.3",
    image: pizzaImg,
    originalPrice: 260,
    offerPrice: 129,
    quantity: 3,
    secondsLeft: 48 * 60,
    discount: "50% OFF",
    isVeg: true,
  },
  {
    id: 3,
    name: "Kerala Traditional Sadhya Meals",
    restaurant: "Ente Meal Ernakulam",
    rating: "4.6",
    image: mealsImg,
    originalPrice: 150,
    offerPrice: 79,
    quantity: 6,
    secondsLeft: 21 * 60,
    discount: "47% OFF",
    isVeg: true,
  },
  {
    id: 4,
    name: "Dutch Chocolate Truffle Pastry",
    restaurant: "Sweet Bake Studio",
    rating: "4.5",
    image: cakeImg,
    originalPrice: 140,
    offerPrice: 70,
    quantity: 4,
    secondsLeft: 35 * 60,
    discount: "50% OFF",
    isVeg: true,
  },
];

function SaveFoodSection() {
  const [timers, setTimers] = useState(() => {
    const initial = {};
    HOME_SURPLUS_ITEMS.forEach((item) => {
      initial[item.id] = item.secondsLeft;
    });
    return initial;
  });

  const [quantities, setQuantities] = useState(() => {
    const initial = {};
    HOME_SURPLUS_ITEMS.forEach((item) => {
      initial[item.id] = item.quantity;
    });
    return initial;
  });

  const [notification, setNotification] = useState("");

 
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((id) => {
          if (next[id] > 0) next[id] -= 1;
        });
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (secs) => {
    if (secs <= 0) return "Expired";
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}m ${s < 10 ? "0" : ""}${s}s`;
  };

  const handleQuickAdd = (item) => {
    if (quantities[item.id] <= 0) return;
    setQuantities((prev) => ({
      ...prev,
      [item.id]: prev[item.id] - 1,
    }));
    setNotification(`Added "${item.name}" to cart! Saved ₹${item.originalPrice - item.offerPrice}`);
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <section className="home-savefood-section" id="save-food-section">
      {notification && (
        <div className="home-toast">{notification}</div>
      )}

      <div className="home-savefood-header">
        <div>
          <div className="badge-row">
            <span className="initiative-tag"> SAVEEAT INITIATIVE</span>
            <span className="waste-badge">Food Waste Reduction</span>
          </div>
          <h2>Save Food, Save Money</h2>
          <p className="section-subtext">
            Rescue freshly prepared surplus meals from top restaurants before closing hours at up to <strong>50% OFF</strong>!
          </p>
        </div>

        <Link to="/save-food" className="view-all-link">
          Explore All Surplus Deals →
        </Link>
      </div>

      <div className="home-surplus-cards">
        {HOME_SURPLUS_ITEMS.map((item) => {
          const timeLeft = timers[item.id] || 0;
          const currentQty = quantities[item.id];
          const isSoldOut = currentQty <= 0;
          const isExpired = timeLeft <= 0;

          return (
            <div key={item.id} className="home-surplus-card">
              <div className="card-top-tag">
                <span className="discount-pill">{item.discount}</span>
                <span className={`home-veg-dot ${item.isVeg ? "veg" : "nonveg"}`}>
                  ●
                </span>
              </div>

              <div className="home-food-img-wrap">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="home-card-info">
                <h4 className="food-name">{item.name}</h4>
                <p className="restaurant-line">
                  {item.restaurant} • <span className="star-tag">★ {item.rating}</span>
                </p>

                <div className="home-price-strip">
                  <span className="home-deal-price">₹{item.offerPrice}</span>
                  <span className="home-old-price">₹{item.originalPrice}</span>
                </div>

                <div className="urgency-strip">
                  <span className={`stock-text ${currentQty <= 3 ? "low" : ""}`}>
                    {isSoldOut ? "Sold Out" : `Only ${currentQty} left`}
                  </span>
                  <span className="timer-text">
                    ⏳ {formatTime(timeLeft)}
                  </span>
                </div>

                <button
                  className="quick-add-btn"
                  disabled={isSoldOut || isExpired}
                  onClick={() => handleQuickAdd(item)}
                >
                  {isSoldOut ? "Sold Out" : isExpired ? "Expired" : "ADD TO CART"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SaveFoodSection;

