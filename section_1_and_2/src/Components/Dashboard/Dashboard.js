import React, { useState } from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import Sort from "../Sort/Sort";
import Card from "../Card/Card";
import Table from "../Table/Table";

const Dashboard = () => {
  const [checkFilter, setCheckFilter] = useState(false);
  const [checkToggle,setCheckToggle] = useState(false)
  const [tableStyle, setTableStyle] = useState({
    backgroundColor: "aqua",
    color: "white",
  });
  const [cardStyle, setCardStyle] = useState({});
  const toggleTableHandler = () => {
    setTableStyle({
      backgroundColor: "aqua",
      color: "white",
    });
    setCardStyle({});
    setCheckToggle(false)
  };
  const toggleCardHandler = () => {
    setCardStyle({
      backgroundColor: "aqua",
      color: "white",
    });
    setTableStyle({});
    setCheckToggle(true)
  };
  return (
    <>
      <Navbar />
      <div className="sort-toggle-container">
        <div className="sort-container">
          <Sort />
        </div>
        <div className="filter-message-container">
          {checkFilter && (
            <div className="filter-message">
              <h4>You are viewing filtered results!</h4>
            </div>
          )}
        </div>
        <div className="toggle-container">
          <div
            className="toggle-items"
            style={tableStyle}
            onClick={toggleTableHandler}
          >
            <i className="fa-solid fa-table fa-xl"></i>
          </div>
          <div
            className="toggle-items"
            style={cardStyle}
            onClick={toggleCardHandler}
          >
            <i className="fa-solid fa-address-card fa-xl"></i>
          </div>
        </div>
      </div>
      <div className="detail-container">
        {checkToggle?<Card/>:<Table/>}
      </div>
    </>
  );
};

export default Dashboard;
