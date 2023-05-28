import React, { useContext, useState, useEffect } from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import Sort from "../Sort/Sort";
import Card from "../Card/Card";
import Table from "../Table/Table";
import { Context } from "../../ContextProvider";
import Loader from '../../utils/loader.gif'

const Dashboard = () => {
  const context = useContext(Context);
  const [loader, setLoader] = useState(false);
  const [checkFilter, setCheckFilter] = useState(false);
  const [checkToggle, setCheckToggle] = useState(false);
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
    setCheckToggle(false);
  };
  const toggleCardHandler = () => {
    setCardStyle({
      backgroundColor: "aqua",
      color: "white",
    });
    setTableStyle({});
    setCheckToggle(true);
  };
  useEffect(() => {
    setLoader(true)
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = await fetch("https://coralmango.com/api/react-test");
    const response = await api.json();
    context.dispatch({ type: "SET_DATA", payload: response });
  };
  return (
    <>
      <Navbar setCheckFilter={setCheckFilter} />
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
      <div className="media-container">
        <div>
          {checkFilter && (
            <div className="filter-message">
              <h4>You are viewing filtered results!</h4>
            </div>
          )}
        </div>
      </div>
      <div className="detail-container">
        {loader?
        <div>
          <img style={{width:'100px'}} src={Loader} alt="loading..."/>
        </div>:
        <>
        {checkToggle ? <Card /> : <Table />}
        </>
        }
      </div>
    </>
  );
};

export default Dashboard;
