import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import './Book.css';

const Rev = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <div>
          <h1>Revenue Generated</h1>
          <br />
          <h1>Rs.11050</h1>
        </div>
      </div>
    </div>
  );
};

export default Rev;
