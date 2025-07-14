import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Services from "./sections/Services";
import ServiceSummary from "./sections/ServiceSummary";
import ReactLenis from "lenis/react";

const App = () => {
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
    </ReactLenis>
  );
};

export default App;
