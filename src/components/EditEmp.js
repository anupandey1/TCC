import React, { useState} from "react";
import "./Booking.css";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../firebase";
import Sidebar2 from "./Sidebar2";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  query,
  where,
  querySnapshot,
} from "firebase/firestore";

const emp = collection(db, "employees");
const EditEmp = () => {
    const [email, setEmail] = useState("");
    const emailChange = (e) => {
        setEmail(e.target.value);
    };
    const delEmp= async (e) => {
    emp.where("email", "==", email)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(() => {
        deleteDoc().then(() => {
          console.log("Document successfully deleted!");
        }).catch(function(error) {
          console.error("Error removing document: ", error);
        });
      });
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
};
    
    //   const navigate = useNavigate();
    //   const delEmp= async (e) => {
        //     e.preventDefault();
        //     await deleteDoc(doc(db, "employees", ""));
        //   }
return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar2/>
         <div className="auth-form-container">
          <h2>Edit Employee</h2>
          <form className="Booking-form">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={emailChange}
              type="search"
              placeholder="email"
              name="email"
              />
            <button onClick={delEmp} type="submit">Delete Employee</button>
          </form> 
          
        </div>
      </div>
    </div>
  );
  

  
};
export default EditEmp;