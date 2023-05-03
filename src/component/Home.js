import React, { useContext, useEffect, useState, } from "react";

import Card from "./common/Card";
import { cardData } from "../assets/cardData";

import {
  Add,
  AddAPhoto,
  Close,
  MenuOpenOutlined,
  NotificationAddOutlined,
} from "@mui/icons-material";

import SearchIcon from "@mui/icons-material/Search";
import { deepOrange } from "@mui/material/colors";
import dayjs from "dayjs";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import {
  Avatar,
  Badge,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import Singout from "./common/Singout";
import { ThemeContext } from "../context/themecontext";

const filteritem = [
  {
    index: 0,
    label: "Letest",
  },
  {
    index: 1,
    label: "Popular",
  },
  {
    index: 3,
    label: "Oldest",
  },
];

const Home = (props) => {
  const [filters, setFilters] = useState("all");
  const [searchf, setSearchf] = useState("");
  const [datefilter, setDatefilter] = useState(cardData);
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [dateupdate, setDateupdate] = useState(dayjs("2023-04-21"));
  const [menuOpen, setMenuOpen] = useState(false)
  const[darkthem, setDarkthem] = useState(false)
 const themeMode = useContext(ThemeContext)

  
  useEffect(() => {
   setDarkthem(themeMode.themeMode === "dark"); 
  }, [themeMode])
  


  const email = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : "";
  const hendlefilter = (e) => {
    const selectedFilter = e.target.value;
    setFilters(selectedFilter);
    let finalData = [];
    if (
      filteritem[+selectedFilter]?.label.toLowerCase() ===
      filteritem[0].label.toLowerCase()
    ) {
      const datesort = cardData.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      finalData = datesort;
    } else if (
      filteritem[+selectedFilter]?.label.toLowerCase() ===
      filteritem[1].label.toLowerCase()
    ) {
      const datesort = cardData
        .map((sortvalue) => {
          sortvalue.viewCount = sortvalue?.viewCount
            ?.toLowerCase()
            .replace("k", "");
          return sortvalue;
        })
        .sort((a, b) => {
          return b.viewCount - a.viewCount;
        });
      finalData = datesort;
    } else if (
      filteritem[+selectedFilter]?.label.toLowerCase() ===
      filteritem[2].label.toLowerCase()
    ) {
      const datesort = cardData.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      finalData = datesort;
    }

    if (selectedFilter === "all") {
      setDatefilter(cardData);
    } else {
      setDatefilter(finalData);
    }
  };


  const hendlemoddal = () => {
    openModal1(true)
  }
  const hendlemodalfalse = () => {
    setOpenModal1(false)
  }
  
  const Togglebtn = () => {
    setMenuOpen(!menuOpen)
    props.sidebarClick()
  }

  return (
    <>
    {
      openModal1 && <Singout hendleModal ={hendlemoddal} hendleModalFalse = {hendlemodalfalse} />
    }
    
      <div className= {darkthem ?  "darkModeHome-header-div" :"header-div" }>
       {
        menuOpen ? (<MenuOpenOutlined
          className="manuopen-icon"
          onClick={Togglebtn} 
         
        />): (<Close className="manuopen-icon" onClick={Togglebtn} />)
       } 
        
        <div className="header-item">{email.user}</div>
        

        <div className="header-icon">
          <IconButton size="small">
            <Avatar
              src="./image/uk.png"
              sx={{ width: 30, height: 30 }}
            ></Avatar>
          </IconButton>
          <IconButton>
            <Badge badgeContent={2} color="warning">
              <NotificationAddOutlined />
            </Badge>
          </IconButton>

          <Tooltip title={email.email} placement="bottom-end" arrow>
            <IconButton
              size="small"
              //  onClick={hendleLogout}
              onClick={() => setOpenModal1(true)}
            >
              <Avatar sx={{ bgcolor: deepOrange[400] }}>
                {email.email.substring(0, 1).toUpperCase()}
              </Avatar>
            </IconButton>
          </Tooltip>
          
        </div>
      </div>
      <nav>
        <div className={darkthem ?"darkModeHome":"nav-div"}>
        
          <div className="nav-item">
            <h1>Blog</h1>
          </div>

          <div className="nav-icon">
            <Button
              onClick={() => setOpenModal(true)}
              variant="contained"
              startIcon={<Add />}
            >
              New Post
            </Button>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
              <Box className="boxModal">
                <div className="mainbox">
                  <div className="postimg">
                    <div className="postimgdiv">
                      <div className="postName">
                        <h1>Add Post </h1>
                      </div>

                      <div className="postphoto">
                        <label className="uplordphoto">
                          <div>
                            <div className="addaphoto">
                              <AddAPhoto fontSize="large" />
                            </div>
                            <div className="h2pa">
                              <h2>Drag & Drop Any File Here</h2>
                              <p>
                                Or <a href="/">browse file</a> from device
                              </p>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <form className="postdetail">
                    <div className="formdiv">
                      <div className="postheading">
                        <h1>Blog Post Info</h1>
                      </div>

                      <div className="post-name">
                        {/* <label className="inputlabel" htmlFor="postname">
                        Post Name
                      </label> */}
                        <input
                          type="text"
                          placeholder="Manish "
                          className="inputpost1"
                          id="postname"
                        ></input>
                      </div>

                      <div className="postdiscription">
                        {/* <label className="inputlabel2" htmlFor="textarea">
                       Post Discription
                      </label> */}
                        <textarea
                          className="inputpost2"
                          type="text"
                          placeholder="ADD POST DISCRIPTION "
                          id="textarea"
                        ></textarea>
                      </div>

                      <div className="datepicker">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["MobileDatePicker"]}>
                            {/* className="datePicker1"
                               className="datePicker1"
                               className="datePicker1" */}
                            <DemoItem label="Post Date">
                              <MobileDatePicker
                                sx={{
                                  Color: "white",
                                  border: "1px solid rgba(54, 64, 92, 1)",
                                }}
                                value={dateupdate}
                                onChange={(newdate) => setDateupdate(newdate)}
                              />
                            </DemoItem>
                          </DemoContainer>
                        </LocalizationProvider>
                      </div>

                      <div className="boxCheck">
                        <input type="checkbox" />
                        <label>I Agree all Policy</label>
                      </div>

                      <div className="btnsubmit">
                        <Button
                          variant="contained"
                          size="large"
                          className="btnbtn"
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                    <div className="close">
                      <Close onClick={() => setOpenModal(false)} />
                    </div>
                  </form>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </nav>

      <div  className={darkthem ? "darkModeHome-search-div" :"search-div" }>
        <div className="search-item" style={{color: "white"}}>
          <TextField sx={{color: darkthem ? "white" : "black"}} className={darkthem ? "inputsearch" :"" }
            label="Search post..."
            variant="outlined"
            value={searchf}
            onChange={(e) => setSearchf(e.target.value)}
          />
          <SearchIcon className="searchbar" />
        </div>

        <div className="search-icon">
          <FormControl sx={{ m: 2, minWidth: 100 }} size="small" className={darkthem ? "input-form" :"" }>
            <InputLabel>Post</InputLabel>
            <Select sx={{color: darkthem ? "white" : "black"}} label="Latest" value={filters} onChange={hendlefilter}>
              <MenuItem value={"all"} disabled selected>
                All
              </MenuItem>
              {filteritem.map((fvalue, index) => {
                return (
                  <MenuItem value={index} key={index}>
                    {fvalue.label}
                  </MenuItem>
                );
              })}
              {/* <MenuItem>Latest</MenuItem>
              <MenuItem>Popular</MenuItem>
              <MenuItem>Oldest</MenuItem> */}
            </Select>
          </FormControl>
        </div>
      </div>

      {/* <Card /> */}
      <div className= {darkthem ? "darkModeHome-cardmap" :"cardmap" } >
        {datefilter.filter((falitem) =>
          falitem.title.toLowerCase().includes(searchf.toLowerCase())
        ).length === 0 ? (
          <>
            <div className="nodata">No Result Found....</div>
          </>
        ) : (
          datefilter
            .filter((falitem) =>
              falitem.title.toLowerCase().includes(searchf.toLowerCase())
            )
            .map((cardItem, index) => {
              const {
                image,
                date,
                title,
                shareCount,
                viewCount,
                messageCount,
              } = cardItem;

              return (
                <Card
                  key={index}
                  image={image}
                  date={date}
                  title={title}
                  shareCount={shareCount}
                  viewCount={viewCount}
                  messageCount={messageCount}
                />
              );
            })
        )}
      </div>
    </>
  );
};

export default Home;
