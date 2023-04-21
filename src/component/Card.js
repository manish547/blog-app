import React from "react";

import { Chat, Share, Visibility } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Card = ({ image, date, title, shareCount, viewCount, messageCount }) => {
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
                <img
                  src="./image/shape-avatar.svg"
                  alt="avater"
                  className="shape-avatar"
                />
              </div>
              <div className="avatarlogo">
                <Avatar src="./image/pngegg.png"  />
              </div>
            </span>
          </div>
          <div className="content-div">
            <div className="date-prod">
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
