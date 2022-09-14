import Card from "../../../components/Card/card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import AddBillBoardModal from '../../../components/Add Billboard Modal/index'

const MyBillboards = () => {
  const [ownerEmail] = useState(sessionStorage.getItem("userEmail"));
  const [billboards, setBillboards] = useState([]);
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

  useEffect(()=>{
    fetch(`http://localhost:5000/billboards/my-billboards/${ownerEmail}`)
    .then(res => res.json())
    .then(data => setBillboards(data))
}, [billboards])

  userToken();

  return (
    <>
      <h2 className="tab-header">My billboards</h2>
      <div className="row filters">
        <div className="col-6 col-sm-3 filter-container">
          Billboard type
          <select className="form-select" aria-label="Select billboard type">
            <option defaultValue="0">All</option>
            <option value="1">Traditional</option>
            <option value="2">Digital</option>
          </select>
        </div>
        <div className="col-6 col-sm-3 filter-container">
          Status
          <select className="form-select" aria-label="Select status">
            <option defaultValue="0">All</option>
            <option value="1">Available</option>
            <option value="2">Occupied</option>
          </select>
        </div>
        <div className="col-12 col-sm-6 col-md-4 btn-container">
          <AddBillBoardModal/>
        </div>
      </div>
      <div className="row" id="items">
        {billboards.map(item => <Card id={item?._id} title={item?.title} description={item?.description} price={item?.price}></Card>)}
      </div>
    </>
  );
};

export default MyBillboards;
