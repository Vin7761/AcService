import { useState } from "react";
import "./Booking.css";
function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload stop

    if(name === "" || phone === "" || service === ""){
      alert("Please fill all fields!");
      return;
    }

    alert(`Booked Successfully!
Name: ${name}
Phone: ${phone}
Service: ${service}`);
    setName("");
    setPhone("");
    setService("");
  };

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Book AC Service</h2>

        <input 
          type="text" 
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          type="text" 
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <select 
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select Service</option>
          <option>AC Repair</option>
          <option>AC Installation</option>
          <option>AC Cleaning</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Booking

