import React from "react";
import Headerpage from "../common/Headerpage";

const Notification = [
  {
    index: 0,
    message:
      "A simple primary alert with an example link. Give it a click if you like.",
  },
  {
    index: 1,
    message:
      "A simple primary alert with an example link. Give it a click if you like.",
  },
  {
    index: 2,
    message:
      "A simple primary alert with an example link. Give it a click if you like.",
  },
  {
    index: 3,
    message:
      "A simple primary alert with an example link. Give it a click if you like.",
  },
  {
    index: 4,
    message:
      "A simple primary alert with an example link. Give it a click if you like.",
  },
  {
    index: 5,
    message:
      "A simple primary alert with an example link. Give it a click if you like.",
  },
  {
    index: 6,
    message:
      "A simple primary alert with an example link. Give it a click if you like.",
  },
];

const Notifications = ({ Toactive }) => {
  return (
    <>
      <Headerpage title="Notification" handleHomeClick={Toactive} />
      <div className="noti-div">
        <div className="notification">
          <h2>Alerts</h2>
          {Notification.map((item, index) => (
            <div key={item.index}>
              <p>{item.message}</p>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};

export default Notifications;
