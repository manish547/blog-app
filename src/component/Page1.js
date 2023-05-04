import React, { useEffect, useRef, useState } from "react";

import Home from "./Home";
import Sidebar from "./common/Sidebar";
import TablePage from "./table/Table";
import Notifications from "./notifications/Notifications";
import { ThemeContext, themes } from "../context/themecontext";

const Page1 = () => {
  const sideBarRaf = useRef();
  const [isselected, setIsselected] = useState("home");
  const [open, setOpen] = useState(true);
  const [themeMode, setThemeMode] = useState(themes.light);
  const [darkthem, setDarkthem] = useState();

  // const {themeMode} = useContext(ThemeContext);

  useEffect(() => {
    setDarkthem(themeMode === themes.dark);
  }, [themeMode]);

  // btn click

  function handleOnClick() {
    themeMode === themes.light
      ? setThemeMode(themes.dark)
      : setThemeMode(themes.light);
  }

  const hendleopen = () => {
    open
      ? (sideBarRaf.current.style.display = "none")
      : (sideBarRaf.current.style.display = "block");
    setOpen(!open);
  };
  const hendleactive = (index) => {
    setIsselected(index);
  };

  return (
    <>
      <ThemeContext.Provider value={{ themeMode, handleOnClick }}>
        <div
          className={darkthem ? "darkModeHome-home-sidebar" : "home-sidebar"}
        >
          <div
            className={open ? "sidebar-div" : "side-close"}
            // sidebar-div
            ref={sideBarRaf}
          >
            {open ? (
              <Sidebar
                Selected={isselected}
                Toactive={hendleactive}
              />
            ) : (
              ""
            )}
          </div>

          {/* pages */}
          <div className="home-page-div">
            {isselected === "home" ? (
              <Home sidebarClick={hendleopen} />
            ) : isselected === "table" ? (
              <TablePage Toactive={hendleactive} sidebarClick={hendleopen} />
            ) : isselected === "notifications" ? (
              <Notifications
                Toactive={hendleactive}
                sidebarClick={hendleopen}
              />
            ) : isselected === "singin" ? (
              <Home sidebarClick={hendleopen} />
            ) : (
              // <Singup  />
              ""
            )}
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default Page1;
