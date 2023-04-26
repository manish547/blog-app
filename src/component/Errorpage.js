import React from "react";
import "./Errorpage.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Errorpage = () => {
    const navigate = useNavigate();


    const homepage =() =>{
        navigate('/home')
    }
  return (
    <>
      <div className="mainerror">
        <div className="error-div">
          <h1 className="errorh1">Sorry, page not found!</h1>
          <p className="errorp">
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </p>
          <img
            src="image/error-logo.svg"
            alt="Error 4o4"
            className="errorimg"
          ></img>
          <Button variant="contained" color="primary" className="errorbtn" 
          onClick={homepage}
          >
            Go To Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
