import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx'
import Foodcategories from './pages/Foodcategories.jsx';
import Restaurants from "./pages/Restaurants";
import Cities from './pages/Cities.jsx';
import Footer from "./pages/Footer.jsx";
import SaveFood from './pages/SaveFood.jsx';
import Partner from './pages/Partner.jsx';
import New_image from './pages/New_image.jsx';
import Pothichor from './pages/Pothichor.jsx';
import Shawarma from './pages/Shawarma.jsx';
import Desserts from './pages/Desserts.jsx'
import Biriyani from './pages/Biriyani.jsx';
import Salad from './pages/Salad.jsx'
import Paratha from './pages/Paratha.jsx'
import Burger from './pages/Burger.jsx';
import Pizza from './pages/Pizza.jsx';
import South_Indian from './pages/South_Indian.jsx';
import Dosa from './pages/Dosa.jsx';
import Vada from './pages/Vada.jsx';
import Chinese from './pages/Chinese.jsx';
import Cake from './pages/Cake.jsx';


import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Desserts' element={<Desserts/>}/>
        <Route path="/save-food" element={<SaveFood />} />
        <Route path="/saveeat" element={<SaveFood />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        
        <Route path="/Foodcategories" element={<Foodcategories />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/Cities" element={<Cities />} />
        <Route path="/Partner" element={<Partner />} />
        <Route path="/New_image" element={<New_image />} />
        <Route path="/Pothichor" element={<Pothichor />} />
        <Route path="/Shawarma" element={<Shawarma />} />
        {/* <Route path="/biriyani" element={<Biriyani />} /> */}
        <Route path="/Burger" element={<Burger/>} />
        <Route path="/Pizza" element={<Pizza />} />
        {/* <Route path="/south-indian" element={<SouthIndianPage />} /> */}
        <Route path="/Dosa" element={<Dosa/>} />
        <Route path="/Vada" element={<Vada/>} />
          <Route path='/Salad' element ={<Salad/>}/>
        <Route path='/Paratha' element ={<Paratha/>}/>
        <Route path="/Chinese" element={<Chinese  />} />
        <Route path="/Cake" element={<Cake />} />
        
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
