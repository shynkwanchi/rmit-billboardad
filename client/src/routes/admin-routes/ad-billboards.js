import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Billboards = () => {
  const admin = sessionStorage.getItem("admin");
  const navigate = useNavigate();

  const authenticate = () => {
    if (!admin) {
      navigate("/admin/login");
    }
  };

  useEffect(() => {
    authenticate();
  });

  return (
    <>
      <h1>Billboards</h1>

      <div className="row filters">
        <div className="col-6 col-sm-4 col-md-3 filter-container">
          Billboard type
          <select className="form-select" aria-label="Select billboard type">
            <option defaultValue="0">All</option>
            <option value="1">Traditional</option>
            <option value="2">Digital</option>
          </select>
        </div>

        <div className="col-6 col-sm-4 col-md-3 filter-container">
          Area
          <select className="form-select" aria-label="Select price range">
            <option defaultValue="0">All</option>
            <option value="1">District</option>
            <option value="2">City</option>
            <option value="3">Wall</option>
          </select>
        </div>
        <div className="col-6 col-sm-4 col-md-3 filter-container">
          Price
          <select className="form-select" aria-label="Select area">
            <option defaultValue="0">All</option>
            <option value="1">From 5-15</option>
            <option value="2">From 15-25</option>
            <option value="3">From 25-50</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Billboards;
