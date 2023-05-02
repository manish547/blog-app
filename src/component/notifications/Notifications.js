import React, { useEffect, useState } from "react";
import Headerpage from "../common/Headerpage";
import { Alert, Box, Button, Modal, Stack, Typography } from "@mui/material";
import "./Notifications.css";
// import "../table/Table.css";
import {
  Close,
  CloseSharp,
  Copyright,
  Done,
  Favorite,
} from "@mui/icons-material";

const Notification = [
  {
    index: 0,
    message:
      "A simple primary alert with an example link. Give it a click if you like.",
    colors: "#e73774",
  },
  {
    index: 1,
    message:
      "A simple primary alert with an example link. Give it a click if you like.",
    colors: "#6c7382",
  },
  {
    index: 2,
    message:
      "A simple primary alert with an example link. Give it a click if you like.",
    colors: "#5db461",
  },
  {
    index: 3,
    message:
      "A simple primary alert with an example link. Give it a click if you like.",
    colors: "#e94c49",
  },
  {
    index: 4,
    message:
      "A simple primary alert with an example link. Give it a click if you like.",
    colors: "#fe9f1b",
  },
  {
    index: 5,
    message:
      "A simple primary alert with an example link. Give it a click if you like.",
    colors: "#3f98eb",
  },
  {
    index: 6,
    message:
      "A simple primary alert with an example link. Give it a click if you like.",
    colors: "#e5e9ee",
  },
  {
    index: 7,
    message:
      "A simple primary alert with an example link. Give it a click if you like.",
    colors: "#39393f",
  },
];

const typeArray = [
  {
    index: 0,
    name: "SUCCESS NOTIFICATION",
    color: "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
    fontcolor: "#4ca750",
    background: "white",
    type: "success",
  },
  {
    index: 1,
    name: "INFO NOTIFICATION",
    color: "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
    fontcolor: "cyan",
    background: "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
    type: "info",
  },
  {
    index: 2,
    name: "WARNING NOTIFICATION",
    color: "linear-gradient(195deg, rgb(255, 167, 38), rgb(251, 140, 0))",
    fontcolor: "#fd9b15",
    background: "white",
    type: "warning",
  },
  {
    index: 3,
    name: "ERROR NOTIFICATION",
    color: "linear-gradient(195deg, rgb(239, 83, 80), rgb(229, 57, 53))",
    fontcolor: "#e8413d",
    background: "white",
    type: "error",
  },
];

const Notifications = ({ Toactive }) => {
  const [modalopen, setModalopen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("black");
  const [tovalue, setTovalue] = useState(Notification);
  const [searchvalue, setSearchvalue] = useState("");
  const [alldata, setAlldata] = useState(typeArray);

  const [darkthem, setDarkthem] = useState(false);

  console.log(darkthem, "state");
  /* useEffect for get darkmode value */
  useEffect(() => {
    const selectedMode = JSON.parse(localStorage.getItem("DarkMode"));
    setDarkthem(selectedMode);
  }, []);

  const handleOpen = (selectedType) => {
    setSelectedModal(selectedType);
    setModalopen(true);
  };
  const handleClose = () => setModalopen(false);

  // delete Method

  const hendledelete = (id) => {
    // const deleteitom = tovalue.filter((item) => item.index !== id);

    const deleteitom = tovalue.filter((item) => {
      if (item.index !== id) {
        return item;
      }
    });
    setTovalue(deleteitom);
  };

  useEffect(() => {
    const hendlefilter = typeArray.filter((item) =>
      item.type.toLowerCase().includes(searchvalue.toLowerCase())
    );
    setAlldata(hendlefilter);
  }, [searchvalue]);

  const hendlesearchData = (data) => {
    setSearchvalue(data);
  };

  return (
    <>
      <Headerpage
        title="Notification"
        handleHomeClick={Toactive}
        heandlesearch={hendlesearchData}
        value={searchvalue}
      />
      <div className={darkthem ? "darkModeHome-noti-div" : "noti-div"}>
        <div
          className={darkthem ? "darkModeHome-notification" : "notification"}
        >
          <h2>Alerts</h2>
          {tovalue.map((item, index) => (
            <div key={item.index} className="message">
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert
                  icon={false}
                  sx={{
                    background: `${item.colors}`,
                    color: "white",
                    borderRadius: "6px",
                  }}
                >
                  <div className="Alert-div">
                    {item.message}{" "}
                    <Close
                      onClick={() => hendledelete(item.index)}
                      sx={{ cursor: "pointer" }}
                    />
                  </div>
                </Alert>
              </Stack>
            </div>
          ))}
        </div>
        <div className={darkthem ? "darkModeHome-main-div2" : "main-div2"}>
          <div className="headingNotification">
            <h3 className="h3hading">Notifications</h3>
            <span className="spantext">
              Notifications on this page use Toasts from Bootstrap.Read more
              details here.
            </span>
          </div>

          <div className="btnWithModal">
            {/* {
               console.log(alldata , "nnnnnnn")
            } */}
            {alldata.length > 0 ? (
              alldata.map((item, index) => {
                return (
                  <div className="BtnDiv" key={index}>
                    <div className="btnMap-div">
                      <Button
                        sx={{ background: `${item.color}`, width: "100%" }}
                        variant="contained"
                        onClick={() => handleOpen(item)}
                      >
                        {item.name}
                      </Button>
                    </div>
                  </div>
                );
              })
            ) : (
              <h3>No Data Found</h3>
            )}
          </div>
          <Modal keepMounted open={modalopen} onClose={handleClose}>
            <div
              className="boxmodal"
              style={{ background: `${selectedModal.background}` }}
            >
              <Box>
                <div className="mainModal">
                  <div className="modalHeading">
                    <div className="modalDone">
                      <Done />
                      <Typography
                        style={{ color: selectedModal.fontcolor }}
                        color={`'${selectedModal}'`}
                      >
                        <span>Material Dashboard</span>
                      </Typography>
                    </div>
                    <div className="modalClose">
                      <span>11 min ago</span>
                      <CloseSharp
                        onClick={() => setModalopen(false)}
                        sx={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                  <hr className="modalLine" />
                  <div className="modalMessage">
                    <span>Hello, world! This is a notification message</span>
                  </div>
                </div>
              </Box>
            </div>
          </Modal>
        </div>
        <div className="footer-table1">
          <div className="table-copyright1">
            <Copyright /> 2023, made with <Favorite /> by Creative Tim for a
            better web.
          </div>
          <div className="content1">
            <span>Creative Tim</span>
            <span>About US</span>
            <span>Blog</span>
            <span>License</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
