import React from "react";
import { useParams } from "react-router-dom";
import "./details.css";

// This is the billboard details page of the web application
const Details = () => {
    const {_id} = useParams();
    return(
        <p>Billboard's ID: {_id}</p>
    )
};

export default Details;