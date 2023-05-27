import React, { useContext, useState } from "react";
import "./Sort.css";
import { Context } from "../../ContextProvider";

const Sort = () => {
  const context = useContext(Context)
    const [sortType, setSortType] = useState("");
    const [caret,setCaret] = useState('down')
    const [optionDisplay, setOptionDisplay] = useState('none')
    const handleSort = () => {
      if(caret === 'down'){
          setCaret('up')
          setOptionDisplay('block')
      }
      else{
          setCaret('down')
          setOptionDisplay('none')
      }
    }
    const handleFilterOption = (e)=>{
        setCaret('down')
        setOptionDisplay('none')
        let option = e.target.name
        setSortType(option)
        context.dispatch({type:'SORT',payload:option})
      }
  return (
    <>
      <div className="filter-sort">
        <div className="filter-details" onClick={handleSort}>
          <div style={{ margin: "7px 15px" }}>
            <span className="sort-by">Sort by : </span>
            <span className="sort-type">
              <b>{sortType}</b>
            </span>
          </div>
          <div style={{ margin: "7px 10px" }}>
            <i className={`fa-solid fa-caret-${caret}`}></i>
          </div>
        </div>
        <div className="filter-options" style={{ display: `${optionDisplay}` }}>
          <div className="filter-each-option">
            Name
            <button
              className="filter-each-option-btn"
              name={"Name"}
              onClick={handleFilterOption}
            ></button>
          </div>
          <div className="filter-each-option">
            Age
            <button
              className="filter-each-option-btn"
              name={"Age"}
              onClick={handleFilterOption}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sort;
