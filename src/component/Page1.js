import Home from "./Home";
import Sidebar from "./common/Sidebar";
import React, { useEffect, useRef, useState } from "react";
import TablePage from "./table/Table";
import Notifications from "./notifications/Notifications";






const Page1 = () => {
  const sideBarRaf = useRef();

  const [isselected, setIsselected] = useState('home')
  const [open, setOpen] = useState(true);



  const[darkthem, setDarkthem] = useState( false)
 

  console.log(darkthem,"state");
  /* useEffect for get darkmode value */
  useEffect(() => {
    const selectedMode = JSON.parse(localStorage.getItem("DarkMode"));
    setDarkthem(selectedMode)
  }, [])

 
  const hendleopen = () => {
    console.log(sideBarRaf.current);
    sideBarRaf.current.style.display = "block";
    setOpen(!open);
  };
  const hendleactive = (index) =>{
      setIsselected(index)
  }
  return (
    <>
      <div className={darkthem ? "darkModeHome-home-sidebar" :"home-sidebar" }>

        <div className={open ? 'sidebar-div' : 'side-close'}
        // sidebar-div 
        ref={sideBarRaf}
        >
          {open ? <Sidebar Selected = {isselected} Toactive={hendleactive}   /> : ""}
        </div>


        {/* pages */}
        <div className="home-page-div">
          {/* <Home  sidebarClick = {hendleopen} /> */}
          {
            isselected === 'home' ? (<Home  sidebarClick = {hendleopen} />) 
            : isselected === 'table' ? <TablePage Toactive={hendleactive}  /> 
            : isselected === 'notifications' ? <Notifications Toactive={hendleactive} /> 
            : isselected === 'singin' ? 
            <Home  /> 
            // <Singup  /> 
            : ""
          }
        </div>
      </div>
    </>
  );
};

export default Page1;
