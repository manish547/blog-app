import React, { useContext, useEffect, useState } from "react";
import { Chat, Share, Visibility } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { ThemeContext } from "../../context/themecontext";

const min = 1;
const max = 4;

const Card = ({ image, date, title, shareCount, viewCount, messageCount }) => {
  const reondmimg = Math.floor(Math.random() * (max - min + 1) + min);
  const [filterlogo] = useState(reondmimg);
  const[darkthem, setDarkthem] = useState(false)
  const themeMode = useContext(ThemeContext)

  
  useEffect(() => {
   setDarkthem(themeMode.themeMode === "dark"); 
  }, [themeMode])
  

  return (
    <div>
      <div className="main-div">
        <div className="card">
          <div className="img-div">
            <div className="image-wrapper">
              <img
                className="main-img"
                src={`./image/${image ?? ""}.jpg`}
                alt={image}
              ></img>
            </div>
            <span className="logo1">
              <div className="shape-div">
                {darkthem ? (
                  ""
                ) : (
                  <img
                    src="./image/shape-avatar.svg"
                    alt="avater"
                    className="shape-avatar"
                  />
                )}
               
              </div>

              <div className="avatarlogo">
                <Avatar src={`/image/img_${filterlogo}.png`} />
              </div>
            </span>
          </div>
          <div className="content-div">
            <div className={darkthem ? "darkModeHome-date-prod" : "date-prod"}>
              <span className="Dates">{date ?? ""}</span>
              <span className="prod-name">{title ?? ""}</span>
            </div>

            <div className="social-media">
              <div className="chat">
                <Chat fontSize="14px" />
                <span>{messageCount ?? ""}</span>
              </div>
              <div className="visibility">
                <Visibility fontSize="14px" />
                <span>{viewCount ?? ""}</span>
              </div>
              <div className="share">
                <Share fontSize="14px" />
                <span>{shareCount ?? ""}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
