import {
  Face,
  Home,
  Notifications,
  Settings,
} from "@mui/icons-material";
import { IconButton, TextField, } from "@mui/material";
import React from "react";

const Headerpage = ({title}) => {
  return (
    <>
      <div>
        <div className="header-div">
          <div className="home-table-div">
          <IconButton><Home className="manuopen-icon1 " /></IconButton>
            <p> / </p>
            <div className="header-item">{title}</div>
            
          </div>

          <div className="header-icon">
            
            <TextField label="Search Here" />
            <IconButton >
            <Face /></IconButton>
            <IconButton><Settings /></IconButton>
            <IconButton><Notifications /></IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headerpage;
