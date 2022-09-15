// import React from "react";
// import { useParams } from "react-router-dom";
// import "./details.css";

// // This is the billboard details page of the web application
// const Details = () => {
//     const {_id} = useParams();
//     return(
//         <p>Billboard's ID: {_id}</p>
//     )
// };

// export default Details;

import "bootstrap/dist/css/bootstrap.min.css";
import "./details.css";
import Slider from "../../../components/Slider/slider";
import ProfileCard from "../../../components/Profile Card/Card";
import Features from "../../../components/Profile Card/MediaTable";
import HomeData from "../../../data/HomeData";
import { useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";

function Details() {
  const { _id } = useParams();
  const [billboards, setBillboard] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/billboards/my-billboards/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setBillboard(data);
      });
  }, []);


  return (
    <main>
      <Slider slides={HomeData} />
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <ProfileCard />
          </div>

          <div className="col p-3">
            <Features />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Details;
