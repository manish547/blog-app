import React, { useState } from "react";
import './ViewPage.css'

const ViewPage = () => {
  const [toNight, setToNight] = useState(true)

  const hendleNightmode = (item) => {
console.log(item);
  localStorage.setItem('nightMode', JSON.stringify('night'))
  
  }

  return (
    <>
      <div>
        <div class="checkbox-wrapper-54">
          <label class="switch">
            <input type="checkbox" value={toNight}   onClick={()=>hendleNightmode}/>
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </>
  );
};

export default ViewPage;
