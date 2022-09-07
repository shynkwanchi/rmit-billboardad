import React from "react";
import { Link } from "react-router-dom";
import thumbnail from "../../assets/ElonMusk.jpg";
import "./card.css";

const Card = props => {
    return (
        <div className="col-12 col-sm-6 col-md-4 item-container">
            <Link exact to={`/details/${props.id}`}>
                <div className="image-container">
                    <img src={thumbnail} alt="item-thumbnail" />
                </div>
                <p className="title">{props.title}</p>
                <p className="description">{props.description}</p>
                <p className="price">${props.price}</p>
            </Link>
        </div>
    )
}

export default Card;