import React, { useState, useRef } from "react";
import "./Booking.css";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import Sidebar from "./Sidebar";
import { collection, addDoc } from "firebase/firestore";

const consigns = collection(db, "consignments");

export const AddConsignment = () => {
  const [source, setSource] = useState("");
  const [destination, setDest] = useState("");
  const [date, setDate] = useState("");
  const [vol, setVolume] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };
  const srcChange = (e) => {
    setSource(e.target.value);
  };
  const dstChange = (e) => {
    setDest(e.target.value);
  };
  const volChange = (e) => {
    setVolume(e.target.value);
  };

  const navigate = useNavigate();
  const addnow = async (e) => {
    e.preventDefault();
    try {
      await addDoc(consigns, {
        vol: vol,
        source: source,
        destination: destination,
        date: date,
      });
      console.log("New adding done ");
      setVolume("");
      setSource("");
      setDest("");
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error adding ", error);
    }
  };

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <div className="auth-form-container">
          <h2>Add Consignments</h2>
          <form className="Booking-form">
            <label htmlFor="volume">Volume</label>
            <input
              value={vol}
              onChange={volChange}
              type="search"
              placeholder="v in cubic mtrs"
              id="vol"
              name="vol"
            />
            <label htmlFor="source">Source</label>
            <input
              value={source}
              onChange={srcChange}
              type="search"
              placeholder="source"
              id="source"
              name="source"
            />
            <label htmlFor="destination">Destination</label>
            <input
              value={destination}
              onChange={dstChange}
              type="search"
              placeholder="destination"
              id="destination"
              name="destination"
            />
            <label htmlFor="date">Pickup Date</label>
            <input
              value={date}
              type="date"
              onChange={handleChange}
              ref={dateInputRef}
            />
            <button onClick={addnow} type="submit">
              Submit
            </button>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
};
