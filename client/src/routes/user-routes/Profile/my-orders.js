import "./profile.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
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
  return (
    <>
      <h2 className="tab-header">My Orders</h2>
    </>
  );
};

export default MyOrders;
