import React from "react";

import "./Sidebar.css";
import {
  Home,
  Login,
  NotificationsActive,
  RemoveRedEye,
  TableChart,
} from "@mui/icons-material";
import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar1">
        <div className="Sideberhading">
          <h1>blog post</h1>
        </div>

        <hr className="line-hr" />

        <div className="manu-div">
          <div className="manu-name">
            <Home />
            <span>Home page</span>
          </div>
          <div className="manu-name">
            <TableChart />
            <span>Table Page</span>
          </div>
          <div className="manu-name">
            <NotificationsActive />
            <span>Notification</span>
          </div>
          <div className="manu-name">
            <RemoveRedEye />
            <span>View Mode</span>
          </div>
          <div className="manu-name">
            <Login />
            <span>Login</span>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Sidebar;
