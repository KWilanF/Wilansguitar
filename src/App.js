import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Chords from "./pages/Chords"
import Songs from "./pages/Songs"


function App() {
  return (
    <Router>
      <Header />
      <main style={{ marginTop: "80px", padding: "20px" }}>
<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chords" element={<Chords />} />
          <Route path="/songs" element={<Songs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
