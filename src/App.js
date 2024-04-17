import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {AddConsignment} from "./components/AddConsignment";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import Manager from "./components/Manager";
import Dashboard from "./components/Dashboard";
import Book from "./components/Book";
import Avail from "./components/Avail";
import Status from "./components/Status";
import AddEmp from "./components/AddEmp";
import EditEmp from "./components/EditEmp";

function App() {
 
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/AddConsignment" element={<AddConsignment />} />
          <Route path="/Manager" element={<Manager />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/AddEmp" element={<AddEmp />} />
          <Route path="/Avail" element={<Avail />} />
          <Route path="/EditEmp" element={<EditEmp />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/Status" element={<Status />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
