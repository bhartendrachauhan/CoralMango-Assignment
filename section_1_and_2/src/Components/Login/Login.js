import React, { useContext, useState } from "react";
import "./Login.css";
import { checkFormData } from "../../utils/LoginValidation";
import { useNavigate } from "react-router-dom";
import { Context } from "../../ContextProvider";

const Login = () => {
  const context = useContext(Context)
  const navigate = useNavigate()
  const [helper,setHelper] = useState({
    email:'',
    password:''
  })
  const [formData,setFormData] = useState({
    email:'',
    password:''
  })
  const [checkLogin,setCheckLogin] = useState(false)
  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const submitHandler = ()=>{
    setHelper({
      email:'',
      password:''
    })
    setCheckLogin(false)
    const validationResult = checkFormData(formData)
    if (Object.keys(validationResult).length > 0) {
      setHelper({ ...validationResult });
    } else{
      if(formData.email != "demo@coralmango.com" || formData.password != "demo123"){
        setCheckLogin(true)
      }
      else{
        setCheckLogin(false)
        context.dispatch({type:'LOGIN'})
        navigate('/',{replace:true})
      }
    }
  }
  return (
    <>
      <div className="login-outer-container">
        <div className="login-container">
          <div className="login-message-container">
            {checkLogin && <div className="login-message-box">
              Invalid Credentials
            </div>}
          </div>
          <i className="fa-solid fa-lock fa-3x"></i>
          <h2 style={{ marginBottom: "40px" }}>Login</h2>
          <div className="login-each-container">
            <i className="fa-solid fa-envelope fa-lg"></i>
            <input
              type="text"
              className="login-each-input"
              placeholder="Email"
              onChange={changeHandler}
              value={formData.email}
              name="email"
            />
          </div>
          <div className="helper-text">{helper.email}</div>
          <div className="login-each-container">
            <i className="fa-solid fa-key fa-lg"></i>
            <input
              type="password"
              className="login-each-input"
              placeholder="Password"
              onChange={changeHandler}
              value={formData.password}
              name="password"
            />
          </div>
          <div className="helper-text">{helper.password}</div>
          <div className="login-button-container">
            Login
            <button className="login-button" onClick={submitHandler}></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
