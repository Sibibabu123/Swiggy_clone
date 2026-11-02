import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Foodcategories.css";

import Pottichur from "../assets/Pothichor.png";
import Biriyani from "../assets/Biryani.png";
import SouthIndian from "../assets/South Indian.png";
import Cake from "../assets/Cake.png";
import NorthIndian from "../assets/North Indian.png";
import Burger from "../assets/Burger.png";
import Pizza from "../assets/Pizza.png";
import Desserts from "../assets/Desserts.png";
import Paratha from "../assets/Paratha.png";
import Rolls from "../assets/Rolls.png";
import Parotta from "../assets/Parotta.png";
import Salad from "../assets/Salad.png";
import IceCream from "../assets/Ice Cream.png";
import Shawarma from "../assets/Shawarma.png";
import Chinese from "../assets/Chinese.png";
import Dosa from "../assets/Dosa.png";
import Pasta from "../assets/Pasta.png";
import Vada from "../assets/Vada.png";
import Juice from "../assets/Juice.png";
import Appam from "../assets/Appam.png";
import Momo from "../assets/Momo.png";
import Idli from "../assets/Idli.png";

function Foodcategories() {
  const scrollRef = useRef(null);

  // Exact 2-row pairing matching Swiggy screenshots
  const categories = [
    { name: "", image: Pottichur, path: "/Pothichor" },
    { name: "", image: Desserts, path: "/desserts" },
    { name: "", image: Biriyani, path: "/biriyani" },
    { name: "", image: Chinese, path: "/chinese" },
    { name: "", image: SouthIndian, path: "/south-indian" },
    { name: "", image: Paratha, path: "/north-indian" },
    { name: "", image: Cake, path: "/desserts" },
    { name: "", image: Rolls, path: "/Shawarma" },
    { name: "", image: NorthIndian, path: "/north-indian" },
    { name: "", image: Parotta, path: "/Pothichor" },
    { name: "", image: Burger, path: "/burger" },
    { name: "", image: Salad, path: "/south-indian" },
    { name: "", image: Pizza, path: "/pizza" },
    { name: "", image: IceCream, path: "/desserts" },
    { name: "", image: Shawarma, path: "/Shawarma" },
    { name: "", image: Dosa, path: "/dosa" },
    { name: "", image: Chinese, path: "/chinese" },
    { name: "", image: Pasta, path: "/pizza" },
    { name: "", image: Juice, path: "/desserts" },
    { name: "", image: Vada, path: "/south-indian" },
    { name: "", image: Momo, path: "/chinese" },
    { name: "", image: Idli, path: "/south-indian" },
    { name: "", image: Appam, path: "/south-indian" },
    { name: "", image: Juice, path: "/desserts" }
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -500 : 500;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="categories-wrapper">
      <div className="categories-container">
        <div className="category-header">
          <h2 className="category-title">Order our best food options</h2>

          <div className="category-arrows">
            <button
              type="button"
              className="arrow-btn"
              onClick={() => handleScroll("left")}
              aria-label="Scroll Left"
            >
              ←
            </button>
            <button
              type="button"
              className="arrow-btn"
              onClick={() => handleScroll("right")}
              aria-label="Scroll Right"
            >
              →
            </button>
          </div>
        </div>

        <div className="category-scroll-area" ref={scrollRef}>
          <div className="category-grid-2rows">
            {categories.map((item, index) => (
              <div className="category-card" key={index}>
                {item.path ? (
                  <Link to={item.path} className="category-link" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="category-img-container">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <p className="category-name">{item.name}</p>
                  </Link>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="category-img-container">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <p className="category-name">{item.name}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="category-divider"></div>
    </section>
  );
}

export default Foodcategories;
