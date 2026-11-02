import React from "react";
import FoodCategories from "./FoodCategories.jsx";
import BiryaniImage from "../assets/Biryani.png";
import ShalimarBiriyani from "../assets/Shalimar Biriyani.png";
import EmpirePlaza from "../assets/Empire_plaza.png";
import Chillies from "../assets/Chillies.png";
import SanJoe from "../assets/san joe.png";
import MalabarResto from "../assets/Malabar_restaurant.png";
import Bekhtash from "../assets/Bekhtash.png";
import Sulthan from "../assets/Sulthan.png";

const biryaniRestaurants = [
  {
    id: 1,
    name: "Shalimar Biriyani",
    image: ShalimarBiriyani,
    rating: "4.5",
    time: "20–25 mins",
    food: "Thalassery Biryani, Malabar, Chicken Biryani",
    location: "Kakkanad",
    price: 260,
    isVeg: false
  },
  {
    id: 2,
    name: "Empire Plaza",
    image: EmpirePlaza,
    rating: "4.4",
    time: "30–35 mins",
    food: "Dum Biryani, Mutton Biryani, Arabian",
    location: "Maradu",
    price: 320,
    isVeg: false
  },
  {
    id: 3,
    name: "Chillies Restaurant",
    image: Chillies,
    rating: "4.3",
    time: "25–30 mins",
    food: "Hyderabadi Biryani, Andhra Spices",
    location: "Vyttila",
    price: 290,
    isVeg: false
  },
  {
    id: 4,
    name: "Sulthan Biriyani",
    image: Sulthan,
    rating: "4.6",
    time: "35–40 mins",
    food: "Kozhikodan Dum Biryani, Kebab Combos",
    location: "Panampilly Nagar",
    price: 350,
    isVeg: false
  },
  {
    id: 5,
    name: "San Joe Kitchen",
    image: SanJoe,
    rating: "4.2",
    time: "25–35 mins",
    food: "Beef Biryani, Kerala Style Biryani",
    location: "Ernakulam",
    price: 240,
    isVeg: false
  },
  {
    id: 6,
    name: "Malabar Restaurant",
    image: MalabarResto,
    rating: "4.4",
    time: "30–40 mins",
    food: "Pothu Biryani, Ghee Rice & Chicken",
    location: "Kochi",
    price: 280,
    isVeg: false
  },
  {
    id: 7,
    name: "Bektash Grill & Biryani",
    image: Bekhtash,
    rating: "4.3",
    time: "40–45 mins",
    food: "Arabian Kabsa, Mandi & Biryani",
    location: "Edappally",
    price: 380,
    isVeg: false
  }
];

function Biriyani() {
  return (
    <FoodCategories
      title="Biryani"
      description="Taste these delectable classics, crafted to perfection with fragrant rice and secret spices!"
      bannerFoodImage={BiryaniImage}
      customRestaurants={biryaniRestaurants}
    />
  );
}

export default Biriyani;
