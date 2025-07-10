import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <section id="home" className="min-h-screen" />
      <section id="services" className="min-h-screen bg-red-500" />
    </div>
  );
};

export default App;
