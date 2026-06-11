import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Booking from "./Pages/Booking";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import Details from "./Pages/Details";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/details/:name" element={<Details />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;