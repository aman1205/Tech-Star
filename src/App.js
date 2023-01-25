import React from "react";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Services from "./Component/Services";
import Footer from "./Component/Footer";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/contact.scss";
import "./styles/footer.scss";
import "./styles/mediaquery.scss";




function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route  path="/"  element={ <Home/> } />
      <Route  path="/contact"  element={ <Contact/> } />
      <Route  path="/services"  element={ <Services/> } />
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
