import React from "react";
import "./Card.css";
import Card from "react-bootstrap/Card";
import ModalContact from "../Modal Form Contact/ContactForm";

const ProfileCard = () => {
  const cardDetail =
  {
    image: "https://i.insider.com/50f967f56bb3f7830a000019",
    title: "Lebron James",
    text: "THE GOAT",
  }

  return (
    <Card style={{ width: "18rem" }} className="box">
      <Card.Img variant="top" src={cardDetail.image} className="image-box" />
      <Card.Body>
        <Card.Title>{cardDetail.title}</Card.Title>
        {/* <Card.Text>{card.text}</Card.Text> */}
        <ModalContact />
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;