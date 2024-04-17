import React from "react";
import Logo from "../images/logo.png";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Sidebar = () => {
  const navigate = useNavigate();

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>TCC_support</span>
      </div>

      {/* menu */}
      <div className="menu">

        <div className="Add employee">
          <Link to="/AddEmp">
            <button className="B2">Add employee</button>
          </Link>
        </div>

        
        <div className="Edit employee">
          <Link to="/EditEmp">
            <button className="B2">Edit employee</button>
          </Link>
        </div>


        <div className="Dashboard">
          <Link to="/Manager">
            <button className="B1">Dashboard</button>
          </Link>
        </div>

        <div className="Availbility">
          <Link to="/Avail">
            <button className="B2">Availblity</button>
          </Link>
        </div>

        <div className="Booking">
          <Link to="/Book">
            <button className="B2">Booking</button>
          </Link>
        </div>

        <div className="Booking">
          <Link to="/Rev">
            <button className="B2">Revenue</button>
          </Link>
        </div>

        <div className="SignOut">
          {/* <Link to="/"> */}
          <button className="B3" onClick={userSignOut}>
            Sign Out
          </button>
          {/* </Link> */}
        </div>
        <a href="https://tcc-support-a146d.web.app/">
          <button>Github link</button>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
