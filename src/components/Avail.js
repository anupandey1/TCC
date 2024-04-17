import React, { useEffect, useState } from "react";
import "./MainDash.css";
import Cards from "./Cards";
import { db } from "../firebase";
import Sidebar from "./Sidebar";

import {
  collection,
  getDocs,
} from "firebase/firestore";
<p>hiii</p>;

const truckCollectionRef = collection(db, "trucks");
const Avail = () => {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    const fetchTrucks = async () => {
      try {
        const querySnapshort = await getDocs(truckCollectionRef);
        const allTrucks = querySnapshort.docs.map((doc) => doc.data());
        setTrucks(allTrucks);
      } catch (error) {
        console.error("Error getting data");
      }
    };
    fetchTrucks();
  }, []);

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <div className="MainDash">
          <div className="Heading">
            <h1>Truck availability</h1>
          </div>
          <div className="Cardsection">
            <Cards />
          </div>
          <div className="Footer">
            <br />
            Available Trucks:
            <br />
            <table className="bookingtable">
              <thead>
                <tr>
                  <th>Source</th>
                  <th>Destination</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {trucks.map((doc) => {
                  return (
                    <tr key={doc.id}>
                      <td>{doc.source}</td>
                      <td>{doc.destination}</td>
                      <td>{doc.type}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avail;
