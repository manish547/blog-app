import Home from "./Home";
import Sidebar from "./common/Sidebar";
import React, { useRef, useState } from "react";
import TablePage from "./table/Table";
import Notifications from "./notifications/Notifications";
import ViewPage from "./viewmode/ViewPage";
import Singup from "./singup/Singup";


const Page1 = () => {
  const sideBarRaf = useRef();

  const [isselected, setIsselected] = useState('home')
  const [open, setOpen] = useState(true);
 
  const hendleopen = () => {
    console.log(sideBarRaf.current);
    sideBarRaf.current.style.display = "block";
    setOpen(!open);
  };
  const hendleactive = (index) =>{
    console.log("clicked",index);
      setIsselected(index)
  }
  return (
    <>
      <div className="home-sidebar">

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
            : isselected === 'viewmode' ? <ViewPage />
            : isselected === 'singin' ? <Singup /> 
            : ""
          }
        </div>
      </div>
    </>
  );
};

export default Page1;
