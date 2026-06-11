import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Fast & Reliable AC Services</h1>
        <p>Repair | Installation | Gas Refill</p>
        <Link to="/booking">
          <button>Book Now</button>
        </Link>
      </div>
      <div className="services">
        <h2>Our Services</h2>

        <div className="card-container">
          <div className="card">
            <h3>AC Repair</h3>
            <p>Quick repair at your doorstep</p>
            <Link to="/booking">
              <button>Book</button>
            </Link>
          </div>

          <div className="card">
            <h3>AC Installation</h3>
            <p>Professional installation service</p>
            <Link to="/booking">
              <button>Book</button>
            </Link>
          </div>

          <div className="card">
            <h3>Gas Refill</h3>
            <p>Affordable gas refill service</p>
            <Link to="/booking">
              <button>Book</button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;