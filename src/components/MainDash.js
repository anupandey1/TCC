import React, { useEffect, useState } from 'react'
import './MainDash.css'
import Cards from './Cards'
import { db } from "../firebase"

import {
  collection,
  getDocs,
} from "firebase/firestore"

const bookRef = collection(db, "mybooking");
const MainDash = () => {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    const fetchTrucks = async () => {
      try {
        const querySnapshort = await getDocs(bookRef);
        const allTrucks = querySnapshort.docs.map((doc) => doc.data());
        setTrucks(allTrucks);
      } catch (error) {
        console.error("Error getting data");
      }
    };
    fetchTrucks();
  }, []);

  return (
    <div className="MainDash">
      <div className="Heading">
        Dashboard
      </div>
      <div className='Cardsection'>
        <Cards />
      </div>
      <div className="Footer">
  
        <br />
        My Bookings
        <br />
        <table className='bookingtable'>
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
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MainDash
