import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div style={{ background: "#0b0b0b", minHeight: "100vh" }}>

      {/* TOP NAVIGATION BAR (AUTO SHOWROOM STYLE) */}
      <Navbar />

      {/* PAGE ROUTES */}
      <Routes>

        {/* HOME - VEHICLE SHOWROOM LANDING */}
        <Route path="/" element={<Home />} />

        {/* SHOP - ALL VEHICLES LISTING */}
        <Route path="/shop" element={<Shop />} />

        {/* ABOUT - DEALERSHIP STORY PAGE */}
        <Route path="/about" element={<About />} />

        {/* CONTACT - VEHICLE INQUIRY PAGE */}
        <Route path="/contact" element={<Contact />} />

      </Routes>

      {/* FOOTER - BRAND INFO + LINKS */}
      <Footer />

    </div>
  );
}

export default App;