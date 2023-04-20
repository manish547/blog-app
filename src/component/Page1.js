import React, { useEffect, useState } from "react";

import Card from "./Card";
import { cardData } from "../assets/cardData";

import SearchIcon from "@mui/icons-material/Search";
import { Add, NotificationAddOutlined } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";
import {
  Avatar,
  Badge,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

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
  const [filters, setFilters] = useState("");
  const [searchf, setSearchf] = useState("");

  const hendlefilter = (e) => {
    setFilters(e.target.value);
  };





// useEffect
//   // console.log(cardData.filter(user=>user.title.toLowerCase().includes("f")));

  return (
    <>
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
            <Badge badgeContent={2} color="secondary">
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
            <Button variant="contained" startIcon={<Add />}>
              New Post
            </Button>
          </div>
        </div>
      </nav>

      <div className="search-div">
        <div className="search-item">
          <TextField label="Search post..." variant="outlined"
           value={searchf} onChange={(e)=>setSearchf(e.target.value)} />
           
          <SearchIcon className="searchbar" />
        </div>







        <div className="search-icon">
          <FormControl sx={{ m: 2, minWidth: 100 }} size="small">
            <InputLabel>Latest</InputLabel>
            <Select label="Latest" value={filters} onChange={hendlefilter}>
              {filteritem.map((fvalue, index) => {
                return <MenuItem value={index} key={index} >{fvalue.label} </MenuItem>;
              })}
              {/* <MenuItem>Latest</MenuItem>
              <MenuItem>Popular</MenuItem>
              <MenuItem>Oldest</MenuItem> */}
            </Select>
          </FormControl>
        </div>
      </div>

      {/* <Card /> */}
      <div className="cardmap">
        {cardData.filter((falitem)=>falitem.title.toLowerCase().includes(searchf.toLowerCase())).map((cardItem, index) => {
          console.log(index);
          const { image, date, title, shareCount, viewCount, messageCount } =
            cardItem;

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
        })}
      </div>
    </>
  );
};

export default Page1;
