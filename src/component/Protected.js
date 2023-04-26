import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Singup from "./Singup";
import { useState } from "react";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  
  useEffect(() => {
    let Singup = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : "";
    if (!Singup) {
      setLoggedIn(false)
      navigate("/");
    }else{
      setLoggedIn(true)
    }
  });

  return <div>{loggedIn ? <Component /> : <Singup />}</div>;
};

export default Protected;
