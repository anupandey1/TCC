import React, { useState} from "react";
import "./Booking.css";
import { useNavigate} from "react-router-dom";
import { db } from "../firebase";
import Sidebar2 from "./Sidebar2";
import {
  collection,
  addDoc,
} from "firebase/firestore";

const emp = collection(db, "employees");
const AddEmp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //
  const namChange = (e) => {
    setName(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passChange = (e) => {
    setPass(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();
  const add= async (e) => {
    e.preventDefault();
    try {
      await addDoc(emp, {
        name: name,
        email: email,
        pass: pass,
      });
      console.log("New adding done ");
      setName("");
      setEmail("");
      setPass("");
      navigate("/Manager");
    } catch (error) {
      console.error("Error adding ", error);
    }
  };

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar2/>
        <div className="auth-form-container">
          <h2>Add Details</h2>
          <form className="Booking-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={namChange}
              type="search"
              placeholder="name"
              name="source"
            />
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={emailChange}
              type="search"
              placeholder="email"
              name="email"
            />
            <label htmlFor="pass">Password</label>
            <input
              value={pass}
              onChange={passChange}
              type="search"
              placeholder="password"
              name="password"
            />
            <button onClick={add} type="submit">Add Employee</button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default AddEmp;
