import {
  Close,
  Face,
  Home,
  MenuOpenOutlined,
  Notifications,
  Settings,
} from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { useState } from "react";
import "./Headerpage.css";

const Headerpage = ({
  title,
  handleHomeClick,
  heandlesearch,
  value,
  sidebarClickk,
}) => {
  const [menuOpen, setMenuOpen] = useState(true)

  const homeClick = () => {
    handleHomeClick("home");
  };
  const heandlesearchinput = (e) => {
    //  hendlesearch1(e.target.value)
    heandlesearch(e.target.value);
  };
  const Togglebtn = () => {
    setMenuOpen(!menuOpen);
    sidebarClickk();
  };
  return (
    <>
      <div>
        <div className="header-div">
          <div className="home-table-div">
            <IconButton onClick={homeClick}>
              <Home className="manuopen-icon1 " />
            </IconButton>
            {menuOpen ? (
              <Close className="manuopen-icon" onClick={Togglebtn} />
             ):(
              <MenuOpenOutlined className="manuopen-icon" onClick={Togglebtn} />
            )  }
            <p> / </p>
            <div className="header-item">{title}</div>
          </div>

          <div className="header-icon">
            <TextField
              label="Search Here"
              onChange={heandlesearchinput}
              value={value}
            />
            <IconButton>
              <Face />
            </IconButton>
            <IconButton>
              <Settings />
            </IconButton>
            <IconButton>
              <Notifications />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headerpage;
