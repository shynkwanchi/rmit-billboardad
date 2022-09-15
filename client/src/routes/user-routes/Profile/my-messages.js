import "./profile.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyMessages = () => {
  const [userEmail] = useState(sessionStorage.getItem("userEmail"));
  const [messages, setMessages] = useState([]);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const userToken = () => {
    if (!token) {
      navigate("/login");
    }
  };

  useEffect(() => {
    userToken();
  }, []);

  userToken();

  useEffect(()=>{
    fetch(`http://localhost:5000/messages/my-messages/${userEmail}`)
    .then(res => res.json())
    .then(data => setMessages(data))
  }, [])

  return (
    <main>
      <table className="col-12 mes-contain">
        <tr className="row mes-detail">
          <th className="col list-mes">From</th>
          <th className="col list-mes">Phone Number</th>
          <th className="col list-mes">Messages</th>
          <th className="col list-mes">At</th>
          <th className="col list-mes">Read</th>
        </tr>
        {messages.map(message =>
            <tr>
              <td>{message?.senderEmail}</td>
              <td>{message?.contactPhone}</td>
              <td>{message?.message}</td>
              <td>{message?.dateCreated}</td>
            </tr>
        )}
      </table>
    </main>
  );
};

export default MyMessages;
