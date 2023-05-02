import React, { useEffect, useState } from "react";

import "./Sidebar.css";
import {
  BookOnline,
  Home,
  Login,
  NotificationsActive,
  TableChart,
} from "@mui/icons-material";
import Singout from "./Singout";

const tableData = [
  {
    index: 0,
    title: "Home",
    linkTo: "home",
    icon: <Home />,
  },
  {
    index: 1,
    title: "Table",
    linkTo: "table",
    icon: <TableChart />,
  },
  {
    index: 2,
    title: "Notifications",
    linkTo: "notifications",
    icon: <NotificationsActive />,
  },
  {
    index: 3,
    title: "Sing-out",
    linkTo: "singin",
    icon: <Login />,
  },
];

const Sidebar = ({ Selected, Toactive }) => {
  const [toopen, setToopen] = useState(false);
  const [toactive, setToactive] = useState(false);
  const [todark, setTodark] = useState(true);

 useEffect(() => {
  let constData =  JSON.parse(localStorage.getItem("DarkMode"));
  console.log(constData ,"darkmode",)
  
  setTodark(constData)
 }, [])
 

  const handleClick = (index) => {
    Toactive(index);
    setToactive(true);

    if (index === "singin") {
      setToopen(true);
      // localStorage.removeItem("userData")
      // navigate("/")
    }
  };


  const hendletoggle = () => {
    setTodark(!todark);
    localStorage.setItem("DarkMode", JSON.stringify(!todark))
  };
 

  return (
    <>
      <div className={`sidebar1 ${toactive ? "hide-sidebar" : ""}`}>
        <div className="Sideberhading">
          <BookOnline />
          <h1>Blog-App</h1>
        </div>

        <hr className="line-hr" />

        <div className="manu-div">
          {tableData.map((tab, index) => (
            <div
              key={index}
              className={`manu-name ${
                Selected === tab.linkTo ? "active" : ""
              } `}
              onClick={() => handleClick(tab.linkTo)}
              // onClick={() => handleClick(tab)}
            >
              {tab.icon}
              <span>{tab.title}</span>
            </div>
          ))}
          <div className="nightMode">
            <div className="checkbox-wrapper-54">
              <div>
                <label className="switch">
                  <input type="checkbox" checked={todark} value={todark} onChange={hendletoggle} id="LightDark"/>
                  <span className="slider"></span>
                </label>
              </div>
              <div className="dark">
                <label htmlFor="LightDark" style={{background:'none'}}>{todark ? 'Dark' :'Light' }</label>
              </div>
            </div>
          </div>
        </div>
        {toopen && (
          <Singout hendleModal={toopen} hendleModalFalse={setToopen} />
        )}
      </div>
    </>
  );
};

export default Sidebar;
