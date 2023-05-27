import React, { useState } from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import Sort from "../Sort/Sort";

const Dashboard = () => {
    const [tableStyle,setTableStyle] = useState({
        backgroundColor:'aqua',
        color:'white'
    })
    const [cardStyle,setCardStyle] = useState({})
    const toggleTableHandler = ()=>{
        setTableStyle({
            backgroundColor:'aqua',
            color:'white'
        })
        setCardStyle({})
    }
    const toggleCardHandler = ()=>{
        setCardStyle({
            backgroundColor:'aqua',
            color:'white'
        })
        setTableStyle({})
    }
  return (
    <>
      <Navbar />
      <div className="sort-toggle-container">
        <div className="sort-container">
          <Sort />
        </div>
        <div className="toggle-container">
            <div className="toggle-items" style={tableStyle} onClick={toggleTableHandler}>
                <i class="fa-solid fa-table fa-xl"></i>
            </div>
            <div className="toggle-items" style={cardStyle} onClick={toggleCardHandler}>
                <i class="fa-solid fa-address-card fa-xl"></i>
            </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
