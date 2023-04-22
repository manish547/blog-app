import React, { useState } from "react";

import { cardData } from "../assets/cardData";
import Card from "./Card";

import { Add, AddAPhoto, NotificationAddOutlined } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SearchIcon from "@mui/icons-material/Search";
import { deepOrange } from "@mui/material/colors";
import dayjs from "dayjs";
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
} from "@mui/material";

/* filter data */
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

const Page1 = () => {
  const [dateupdate, setDateupdate] = useState(dayjs("2023-04-21"));
  const [datefilter, setDatefilter] = useState(cardData);
  const [openModal, setOpenModal] = useState(false);
  const [filters, setFilters] = useState("all");
  const [searchf, setSearchf] = useState("");

  /* handle filter events */
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
      console.log("manish");
      setDatefilter(cardData);
    } else {
      setDatefilter(finalData);
    }
  };

  return (
    <React.Fragment>
      <div className="header-div">
        <div className="header-item">
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>

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

          <IconButton size="small">
            <Avatar sx={{ bgcolor: deepOrange[400] }}>M</Avatar>
          </IconButton>
        </div>
      </div>
      <nav>
        <div className="nav-div">
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
                    <div className="postName">
                      <h1>Add Post </h1>
                    </div>
                    <div className="postphoto">
                      <label className="uplordphoto" typeof="file">
                        <div>
                          <div className="addaphoto">
                            <AddAPhoto fontSize="large" />
                          </div>
                          <div className="h2pa">
                            <h2>Drag & Drop Any File Here</h2>
                            <p>
                              Or <label>browse file</label> from device
                            </p>
                          </div>
                          <input type="file" name="" id="" />
                          <div className="sbutton">
                            <Button
                              variant="contained"
                              size="large"
                              className="btnbtn"
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <form className="postdetail">
                    <div className="postheading">
                      <h1>Blog Post Info</h1>
                    </div>

                    <div className="post-name">
                      <label className="inputlabel" htmlFor="postname">

                        Post Name
                      </label>
                      <input
                        type="text"
                        placeholder="Manish "
                        className="inputpost1"
                        id="postname"
                      ></input>
                    </div>

                    <div className="postdiscription">
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
                          <DemoItem label="Post Date">
                            <MobileDatePicker
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
                  </form>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </nav>

      <div className="search-div">
        <div className="search-item">
          <TextField
            label="Search post..."
            variant="outlined"
            value={searchf}
            onChange={(e) => setSearchf(e.target.value)}
          />
          <SearchIcon className="searchbar" />
        </div>

        <div className="search-icon">
          <FormControl sx={{ m: 2, minWidth: 100 }} size="small">
            <InputLabel>Latest</InputLabel>
            <Select label="Latest" value={filters} onChange={hendlefilter}>
              <MenuItem value={"all"} disabled selected>
                All
              </MenuItem>
              {filteritem.map((fvalue, index) => {
                return (
                  <MenuItem value={index} key={index}>
                    {fvalue.label}{" "}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>

      {/* card component */}
      <div className="cardmap">
        {datefilter.filter((falitem) =>
          falitem.title.toLowerCase().includes(searchf.toLowerCase())
        ).length === 0 ? (
          <>
            <div className="nodata">No Result Found....</div>
            {console.log("no data found")}
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
    </React.Fragment>
  );
};

export default Page1;