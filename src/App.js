import React from "react";
import AboutSection from "./AboutSection";
import './App.css';  
import Navbar from "./Navbar";
import StatsSection from "./StatsSection";
import VisionMissionSection from "./VisionMissionSection";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutSection />
      <StatsSection />
      <VisionMissionSection />
      <Footer />
    </div>
  );
}

export default App;
