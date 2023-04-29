import React, { useState } from "react";

import "./Sidebar.css";
import {
  BookOnline,
  Home,
  Login,
  NotificationsActive,
  RemoveRedEye,
  TableChart,
} from "@mui/icons-material";

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
    title: "View Mode",
    linkTo: "viewmode",
    icon: <RemoveRedEye />,
  },
  {
    index: 4,
    title: "Sing-in",
    linkTo: "singin",
    icon: <Login />,
  },
];

const Sidebar = ({ Selected, Toactive }) => {
  const [toactive, setToactive] = useState(false);

  const handleClick = (index) => {
    Toactive(index);
    setToactive(true);
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
            >
              {tab.icon}
              <span>{tab.title}</span>
            </div>
          ))}
          <div className="nightMode">
            <div class="checkbox-wrapper-54">
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
