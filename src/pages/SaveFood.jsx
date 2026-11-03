import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SaveFood.css";
import swiggylogo from "../assets/Logo.png";
import Biriyani from "../assets/Biriyani.png";
import pizzaImg from "../assets/Pizza.png";
import mealsImg from "../assets/EnteMeal.png";
import pothichorImg from "../assets/Pothichor.png";
import cakeImg from "../assets/Cake.png";
import burgerImg from "../assets/Burger.png";
import arabicImg from "../assets/Arabickhana.png";
import parottaImg from "../assets/Parotta.png";

const INITIAL_SURPLUS_ITEMS = [
  {
    id: 1,
    name: "Freshly prepared Chicken Biryani",
    restaurant: "ABC Restaurant",
    rating: "4.4",
    category: "Biryani",
    image: Biriyani,
    originalPrice: 180,
    offerPrice: 120,
    quantity: 5,
    initialSeconds: 42 * 60, 
    badge: "Chef Special",
    isVeg: false,
    closingTime: "10:30 PM",
  },
  {
    id: 2,
    name: "Supreme Veg Pizza Combo",
    restaurant: "Pizza Corner Kochi",
    rating: "4.3",
    category: "Pizza",
    image: pizzaImg,
    originalPrice: 260,
    offerPrice: 129,
    quantity: 3,
    initialSeconds: 48 * 60, 
    badge: "50% OFF",
    isVeg: true,
    closingTime: "11:00 PM",
  },
  {
    id: 3,
    name: "Kerala Traditional Sadhya Meals",
    restaurant: "Ente Meal Ernakulam",
    rating: "4.6",
    category: "Meals",
    image: mealsImg,
    originalPrice: 150,
    offerPrice: 79,
    quantity: 6,
    initialSeconds: 21 * 60, 
    badge: "Hot Deal",
    isVeg: true,
    closingTime: "03:30 PM",
  },
  {
    id: 4,
    name: "Dutch Chocolate Truffle Pastry",
    restaurant: "Sweet Bake Studio",
    rating: "4.5",
    category: "Bakery",
    image: cakeImg,
    originalPrice: 140,
    offerPrice: 70,
    quantity: 4,
    initialSeconds: 35 * 60, 
    badge: "Fresh Bake",
    isVeg: true,
    closingTime: "10:00 PM",
  },
  {
    id: 5,
    name: " Pothichor",
    restaurant: "Kochi Kitchen",
    rating: "4.5",
    category: "Meals",
    image: pothichorImg,
    originalPrice: 190,
    offerPrice: 99,
    quantity: 2,
    initialSeconds: 15 * 60, 
    badge: "Only 2 Left!",
    isVeg: false,
    closingTime: "04:00 PM",
  },
  {
    id: 6,
    name: "Crispy Chicken Zinger Burger",
    restaurant: "Burger Town",
    rating: "4.2",
    category: "Fast Food",
    image: burgerImg,
    originalPrice: 210,
    offerPrice: 110,
    quantity: 7,
    initialSeconds: 52 * 60, 
    badge: "Late Night Deal",
    isVeg: false,
    closingTime: "11:30 PM",
  },
  {
    id: 7,
    name: "Arabian Shawarma & Al Faham Platter",
    restaurant: "Arabic Khana Fort Kochi",
    rating: "4.4",
    category: "Fast Food",
    image: arabicImg,
    originalPrice: 280,
    offerPrice: 149,
    quantity: 4,
    initialSeconds: 28 * 60, 
    badge: "47% OFF",
    isVeg: false,
    closingTime: "10:45 PM",
  },
  {
    id: 8,
    name: "Malabar Layered Parotta (Pack of 5)",
    restaurant: "Hotel Presidency",
    rating: "4.1",
    category: "Meals",
    image: parottaImg,
    originalPrice: 100,
    offerPrice: 49,
    quantity: 8,
    initialSeconds: 38 * 60, 
    badge: "Save 51%",
    isVeg: true,
    closingTime: "11:00 PM",
  },
];

function SaveFood() {
  
  const [selectedCategory, setSelectedCategory] = useState("All");

 
  const [searchQuery, setSearchQuery] = useState("");

 
  const [foodItems, setFoodItems] = useState(() => {
    const saved = localStorage.getItem("swiggy_saveeat_items");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_SURPLUS_ITEMS;
      }
    }
    return INITIAL_SURPLUS_ITEMS;
  });

  
  const [countdowns, setCountdowns] = useState(() => {
    const initialTimers = {};
    INITIAL_SURPLUS_ITEMS.forEach((item) => {
      initialTimers[item.id] = item.initialSeconds;
    });
    return initialTimers;
  });

  
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("swiggy_saveeat_cart");
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  
  const [isCartOpen, setIsCartOpen] = useState(false);

  
  const [impactStats, setImpactStats] = useState(() => {
    const savedStats = localStorage.getItem("swiggy_saveeat_impact");
    if (savedStats) {
      try {
        return JSON.parse(savedStats);
      } catch (e) {
        return { mealsSaved: 342, foodKgSaved: 148, moneySaved: 48500 };
      }
    }
    return { mealsSaved: 342, foodKgSaved: 148, moneySaved: 48500 };
  });

 
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdowns((prev) => {
        const updated = { ...prev };
        Object.keys(updated).forEach((id) => {
          if (updated[id] > 0) {
            updated[id] = updated[id] - 1;
          }
        });
        return updated;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

 
  useEffect(() => {
    localStorage.setItem("swiggy_saveeat_items", JSON.stringify(foodItems));
  }, [foodItems]);

  useEffect(() => {
    localStorage.setItem("swiggy_saveeat_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("swiggy_saveeat_impact", JSON.stringify(impactStats));
  }, [impactStats]);

  
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3200);
  };

 
  const formatTime = (totalSeconds) => {
    if (!totalSeconds || totalSeconds <= 0) return "Expired";
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds < 10 ? "0" : ""}${seconds}s`;
  };

  
  const handleAddToCart = (item) => {
    if (item.quantity <= 0) {
      showToast("Sorry, this surplus deal is out of stock!");
      return;
    }

   
    setFoodItems((prev) =>
      prev.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
      )
    );

   
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, cartQty: c.cartQty + 1 } : c
        );
      } else {
        return [...prev, { ...item, cartQty: 1 }];
      }
    });

    showToast(`Added "${item.name}" to cart! You saved ₹${item.originalPrice - item.offerPrice}!`);
  };

  const handleRemoveFromCart = (item) => {
   
    setFoodItems((prev) =>
      prev.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );

    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (!existing) return prev;
      if (existing.cartQty === 1) {
        return prev.filter((c) => c.id !== item.id);
      } else {
        return prev.map((c) =>
          c.id === item.id ? { ...c, cartQty: c.cartQty - 1 } : c
        );
      }
    });
  };

  
  const handleCheckout = () => {
    if (cart.length === 0) return;

    const totalRescued = cart.reduce((sum, item) => sum + item.cartQty, 0);
    const totalMoneySaved = cart.reduce(
      (sum, item) => sum + (item.originalPrice - item.offerPrice) * item.cartQty,
      0
    );

   
    setImpactStats((prev) => ({
      mealsSaved: prev.mealsSaved + totalRescued,
      foodKgSaved: prev.foodKgSaved + totalRescued * 0.45,
      moneySaved: prev.moneySaved + totalMoneySaved,
    }));

    setCart([]);
    setIsCartOpen(false);
    showToast("🎉 Order placed! You rescued " + totalRescued + " meals & saved ₹" + totalMoneySaved + "!");
  };

  
  const filteredItems = foodItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.restaurant.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cartTotalCount = cart.reduce((sum, item) => sum + item.cartQty, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.offerPrice * item.cartQty, 0);
  const cartOriginalTotal = cart.reduce((sum, item) => sum + item.originalPrice * item.cartQty, 0);
  const cartSavings = cartOriginalTotal - cartSubtotal;

  return (
    <div className="savefood-page">
      
      {toastMessage && (
        <div className="savefood-toast">
          {toastMessage}
        </div>
      )}

      
      <header className="savefood-navbar">
        <div className="savefood-nav-left">
          <Link to="/" className="nav-logo">
            <img src={swiggylogo} alt="Swiggy" />
          </Link>
          <div className="brand-tagline">
            <span className="initiative-pill">SAVEEAT</span>
            <span className="initiative-sub">Food Waste Reduction</span>
          </div>
        </div>

        <nav className="savefood-nav-links">
          <Link to="/" className="nav-back-link">
            ← Back to Swiggy Home
          </Link>

          
          <button
            className="cart-trigger-btn"
            onClick={() => setIsCartOpen(true)}
            aria-label="View Cart"
          >
            🛒 Cart ({cartTotalCount})
          </button>
        </nav>
      </header>

     
      <section className="savefood-hero">
        <div className="hero-content">
          <div className="hero-badge">🌱 SWIGGY SAVEEAT INITIATIVE</div>
          <h1>
            Save Food. Save Money. <br />
            <span>Reduce Avoidable Waste.</span>
          </h1>
          <p>
            Connect surplus prepared food from top local restaurants with conscious foodies at up to <strong>60% OFF</strong> before closing time.
          </p>
          <div className="hero-credits">
            
          </div>
        </div>

       
        <div className="hero-impact-strip">
          <div className="impact-card">
            <div className="impact-icon">🍱</div>
            <div className="impact-num">{impactStats.mealsSaved}+</div>
            <div className="impact-label">Meals Rescued</div>
          </div>
          <div className="impact-card">
            <div className="impact-icon">🌱</div>
            <div className="impact-num">{Math.round(impactStats.foodKgSaved)} kg</div>
            <div className="impact-label">Food Waste Prevented</div>
          </div>
          <div className="impact-card">
            <div className="impact-icon">💰</div>
            <div className="impact-num">₹{impactStats.moneySaved.toLocaleString()}+</div>
            <div className="impact-label">Saved by Customers</div>
          </div>
          <div className="impact-card">
            <div className="impact-icon">🏪</div>
            <div className="impact-num">24+</div>
            <div className="impact-label">Partner Outlets</div>
          </div>
        </div>
      </section>

      
      <main className="savefood-main">
        <section className="marketplace-section">
          <div className="section-toolbar">
            <div>
              <h2>🔥 Live Surplus Food Deals Near You</h2>
              <p className="toolbar-sub">
                Freshly prepared, safe-to-eat meals nearing end of service. Grab them before countdown expires!
              </p>
            </div>

            
            <div className="surplus-search-box">
              <input
                type="text"
                placeholder="Search surplus meal or restaurant..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          
          <div className="category-filter-bar">
            {["All", "Biryani", "Meals", "Pizza", "Fast Food", "Bakery"].map(
              (cat) => (
                <button
                  key={cat}
                  className={`category-pill ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              )
            )}
          </div>

         
          <div className="surplus-grid">
            {filteredItems.map((item) => {
              const timeLeft = countdowns[item.id] || 0;
              const isUrgent = timeLeft > 0 && timeLeft < 20 * 60; // < 20 mins
              const isExpired = timeLeft <= 0;
              const isOutOfStock = item.quantity <= 0;
              const discountPct = Math.round(
                ((item.originalPrice - item.offerPrice) / item.originalPrice) * 100
              );

              return (
                <div
                  key={item.id}
                  className={`surplus-card ${isExpired || isOutOfStock ? "dimmed" : ""}`}
                >
                 
                  <div className="card-image-wrap">
                    <img src={item.image} alt={item.name} />
                    <span className="discount-tag">{discountPct}% OFF</span>
                    {item.badge && <span className="custom-badge">{item.badge}</span>}

                    <span
                      className={`veg-indicator ${item.isVeg ? "veg" : "non-veg"}`}
                      title={item.isVeg ? "Pure Veg" : "Non Veg"}
                    >
                      ●
                    </span>
                  </div>

                  
                  <div className="card-body">
                    <div className="card-header">
                      <div>
                        <h3 className="food-title">{item.name}</h3>
                        <p className="restaurant-meta">
                          {item.restaurant} • <span className="rating-pill">★ {item.rating}</span>
                        </p>
                      </div>
                    </div>

                    <div className="price-row">
                      <div className="prices">
                        <span className="offer-price">₹{item.offerPrice}</span>
                        <span className="original-price">₹{item.originalPrice}</span>
                      </div>
                      <div className="savings-badge">
                        Save ₹{item.originalPrice - item.offerPrice}
                      </div>
                    </div>

                   
                    <div className="status-row">
                      <div className={`stock-badge ${item.quantity <= 3 ? "urgent" : ""}`}>
                        {isOutOfStock ? "Out of Stock" : `Only ${item.quantity} left`}
                      </div>

                      <div className={`timer-badge ${isUrgent ? "pulse-urgent" : ""} ${isExpired ? "expired" : ""}`}>
                        ⏳ {isExpired ? "Offer Expired" : `Available for ${formatTime(timeLeft)}`}
                      </div>
                    </div>

                   
                    <div className="card-footer">
                      <button
                        className="add-cart-btn"
                        disabled={isExpired || isOutOfStock}
                        onClick={() => handleAddToCart(item)}
                      >
                        {isOutOfStock
                          ? "SOLD OUT"
                          : isExpired
                          ? "EXPIRED"
                          : "ADD TO CART"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="empty-state">
              <p>No surplus deals match your filter right now.</p>
              <button
                className="category-pill active"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </main>

     
      {isCartOpen && (
        <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <h3> Your Surplus Food Cart</h3>
              <button
                className="close-drawer-btn"
                onClick={() => setIsCartOpen(false)}
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart-drawer">
                <p>Your surplus cart is empty!</p>
                <p className="empty-sub">Explore delicious surplus deals and save money.</p>
              </div>
            ) : (
              <div className="cart-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item-row">
                    <img src={item.image} alt={item.name} className="cart-item-thumb" />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="cart-item-rest">{item.restaurant}</p>
                      <div className="cart-item-price">
                        ₹{item.offerPrice * item.cartQty}{" "}
                        <span className="cart-orig-strike">
                          ₹{item.originalPrice * item.cartQty}
                        </span>
                      </div>
                    </div>

                    <div className="cart-qty-controls">
                      <button onClick={() => handleRemoveFromCart(item)}>-</button>
                      <span>{item.cartQty}</span>
                      <button onClick={() => handleAddToCart(item)}>+</button>
                    </div>
                  </div>
                ))}

                <div className="cart-summary">
                  <div className="summary-row">
                    <span>Original Bill Total</span>
                    <span>₹{cartOriginalTotal}</span>
                  </div>
                  <div className="summary-row savings-text">
                    <span>Surplus Discount Savings</span>
                    <span>-₹{cartSavings}</span>
                  </div>
                  <div className="summary-row total-row">
                    <span>Total Amount to Pay</span>
                    <span>₹{cartSubtotal}</span>
                  </div>

                  <div className="surplus-impact-note">
                    🌱 You are rescuing <strong>{cartTotalCount} meals</strong> from going to waste!
                  </div>

                  <button className="checkout-btn" onClick={handleCheckout}>
                    Proceed to Rescue Meals (₹{cartSubtotal})
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

     
      <footer className="savefood-footer">
        <p>
          <strong>SaveEat (Food Waste Reduction Feature)</strong> 
        </p>
      </footer>
    </div>
  );
}

export default SaveFood;
