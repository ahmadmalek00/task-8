import React from "react";
import Navbar from "./componenet/Navbar";
import SectionWithTextAndImage from "./componenet/SectionWithTextAndImage";
import CardsSection from "./componenet/CardsSection";
import Servises from "./componenet/Servises";
import Footer from "./componenet/Footer";


import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <SectionWithTextAndImage />
      <CardsSection />
      <Servises />
   <Footer /> 
    </>
  );
}

export default App;
