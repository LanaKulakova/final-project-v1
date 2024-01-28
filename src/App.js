import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Staff from "./Staff";
import Shop from "./Shop";
import Contact from "./Contact";
import './App.css';


function App() {
  return (

<Router>
    <nav>
    <Link to="/home" className="link textcolor" >Home</Link>
    <Link to="/about" className="link textcolor">About </Link>
    <Link to="/staff" className="link textcolor">Staff</Link>
    <Link to="/shop" className="link textcolor">Shop</Link>
    <Link to="/contact" className="link textcolor">Contact</Link>
  </nav>


<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/staff" element={<Staff />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/contact" element={<Contact />} /> 
</Routes> 
</Router>


  )
}

export default App;
