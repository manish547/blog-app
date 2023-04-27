import React, { useState } from "react";

import "./singup.css";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { VisibilityOff } from "@mui/icons-material";
import { Button, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const [showpass, setShowpass] = useState(true);
  const [input, setInput] = useState({
    email: "",
    user: "",
    password: "",
  });

  

  const navigation = useNavigate();

  const [isVerified, setIsVerified] = useState({
    email: false,
    user: false,
    password: false,
  });

  /* handle input value change */
  const hendleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const passwordPattern =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{5,12}$/;
    const emailReX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regex = /^[a-zA-Z0-9_-]{5,12}$/;

    if (name === "email" && emailReX.test(value)) {
      setIsVerified((prevData) => ({
        ...prevData,
        email: true,
      }));

      setInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else if (name === "user" && regex.test(value)) {
      setIsVerified((prevData) => ({
        ...prevData,
        user: true,
      }));

      setInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else if (name === "password" && passwordPattern.test(value)) {
      setIsVerified((prevData) => ({
        ...prevData,
        password: true,
      }));

      setInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setIsVerified((prevData) => ({
        ...prevData,
        [name]: false,
      }));
    }

    setInput((prevState) => ({
      ...prevState,
      [name]: value,
      
    }));
 
  };

  const btntoggle = () => {
    setShowpass(!showpass);
  };

  /* handle form submit */
  const HeandleSubmit = (e) => {
    e.preventDefault();
    if (isVerified.email && isVerified.password && isVerified.user) {
      localStorage.setItem("userData", JSON.stringify(input));
      navigation("/home");
      console.log(input);

      setInput({
        email: "",
        user: "",
        password: "",
      });
    } else {
      setInput({
        email: "",
        user: "",
        password: "",
      });
      setIsVerified((prev) => {
        return {
          email: input.email.length>5 ? prev.email : false,
          user: input.user ? prev.user.length>5 : false,
          password: input.password.length>5 ? prev.password : false,
        };
      });
    }
  };

  return (
    <>
      <div className="singin-from">
        <div className="sidebar">
          <h3 className="sidebarh3">Hi, Welcome Back</h3>
          <img src="/image/login.png" alt="logo" />
        </div>
        <div className="maindiv1">
          <div className="maindiv2">
            <div className="heading-wrapper">
              {/* heading  */}
              <h3 className="h3">Sing in to Blog-Post</h3>
              <p className="p">
                Don't Have An Account? <span>Get started</span>
              </p>
            </div>
            <div className="media-wrapper">
              {/* social media icon */}
              <div className="social-div">
                <Button className="btn1">
                  <img src="/image/logo/logo_1.svg" alt="images-logo" />
                </Button>
              </div>
              <div className="social-div">
                <Button className="btn2">
                  <img src="/image/logo/logo_2.svg" alt="images-logo" />
                </Button>
              </div>
              <div className="social-div">
                <Button className="btn3">
                  <img
                    src="/image/logo/logo_3.svg"
                    className="imgtag"
                    alt="images-logo"
                  />
                </Button>
              </div>
            </div>

            <div className="line-or">
              <hr></hr>
              <label className="or">OR</label>
            </div>

            <form className="sing-form" onSubmit={HeandleSubmit}>
              <div className="input-div">
                <div className="vaid-div">
                  <div
                    className={
                      isVerified.email || input.email.length === 0
                        ? "hidden"
                        : "error"
                    }
                  >
                    <img src="/image/val-logo.svg" alt="logo" />
                    Enter valid Email
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="email"
                    name="email"
                    value={input.email}
                    onChange={hendleInput}
                  ></input>
                </div>

                <div className="vaid-div">
                  <div
                    className={
                      isVerified.user || input.user.length < 1
                        ? "hidden"
                        : "error"
                    }
                  >
                    <img src="/image/val-logo.svg" alt="logo" />
                    Enter valid Username
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Your User Name"
                    className="user"
                    name="user"
                    value={input.user}
                    onChange={hendleInput}
                  ></input>
                </div>
                <div className="vaid-div">
                  <div
                    className={
                      isVerified.password || input.password.length < 1
                        ? "hidden"
                        : "error"
                    }
                  >
                    <img src="/image/val-logo.svg" alt="logo" />
                    Enter valid Password
                  </div>
                  <div className="pass-div">
                    <input
                      type={showpass ? "password" : "text"}
                      placeholder="Password"
                      className="password"
                      name="password"
                      value={input.password}
                      onChange={hendleInput}
                    />
                    <span className="visibilityoff" onClick={btntoggle}>
                      {showpass ? <VisibilityRoundedIcon /> : <VisibilityOff />}
                    </span>
                  </div>
                </div>
              </div>
              <div className="chackbox">
                <div className="check-div">
                  <Checkbox className="check-inout" />
                </div>
                <label className="forgot-pass">Forgot Password?</label>
              </div>
              <div className="login-div">
                <button type="submit" className="btn-login">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singup;
