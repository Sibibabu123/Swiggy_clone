import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import About from './pages/About.jsx';
import Foodcategories from './pages/Foodcategories.jsx';
import Restaurants from "./pages/Restaurants";
import Cities from './pages/Cities.jsx';
import Footer from "./pages/Footer.jsx";
import SaveFood from './pages/SaveFood.jsx';
import Partner from './pages/Partner.jsx';
import New_image from './pages/New_image.jsx';
import Pothichor from './pages/Pothichor.jsx';
import Shawarma from './pages/Shawarma.jsx';
// import Biriyani from './pages/Biriyani.jsx';
// import BurgerPage from './pages/BurgerPage.jsx';
// import PizzaPage from './pages/PizzaPage.jsx';
// import SouthIndianPage from './pages/SouthIndianPage.jsx';
// import DosaPage from './pages/DosaPage.jsx';
// import ChinesePage from './pages/ChinesePage.jsx';
// import CakeDessertsPage from './pages/CakeDessertsPage.jsx';
// import NorthIndianPage from './pages/NorthIndianPage.jsx';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/save-food" element={<SaveFood />} />
        <Route path="/saveeat" element={<SaveFood />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Foodcategories" element={<Foodcategories />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/Cities" element={<Cities />} />
        <Route path="/Partner" element={<Partner />} />
        <Route path="/New_image" element={<New_image />} />
        <Route path="/Pothichor" element={<Pothichor />} />
        <Route path="/Shawarma" element={<Shawarma />} />
        {/* <Route path="/biriyani" element={<Biriyani />} />
        <Route path="/burger" element={<BurgerPage />} />
        <Route path="/pizza" element={<PizzaPage />} />
        <Route path="/south-indian" element={<SouthIndianPage />} />
        <Route path="/dosa" element={<DosaPage />} />
        <Route path="/chinese" element={<ChinesePage />} />
        <Route path="/desserts" element={<CakeDessertsPage />} />
        <Route path="/north-indian" element={<NorthIndianPage />} /> */}
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
