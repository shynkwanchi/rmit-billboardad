import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import { getResponse } from "../../middleware/response";
import './ContactForm.css';

function ModalContact(props) {
  const [senderEmail, setSenderEmail] = useState(null);
  const [billboardOwnerEmail] = useState(props.billboardOwnerEmail);
  const [contactPhone, setContactPhone] = useState(null);
  const [message, setMessage] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("http://localhost:5000/messages/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderEmail: senderEmail,
          billboardOwnerEmail: billboardOwnerEmail,
          contactPhone: contactPhone,
          message: message
        }),
      }).then((res) => getResponse(res));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ModalContactForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                required
                onChange={(e) => {
                  setSenderEmail(e.target.value);
                }}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="ModalContactForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone number"
                required
                onChange={(e) => {
                  setContactPhone(e.target.value);
                }}/>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="ModalContactForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} required
                onChange={(e) => {
                  setMessage(e.target.value);
                }}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalContact;