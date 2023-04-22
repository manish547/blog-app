import { Button } from "@mui/material";
import React from "react";

const Singup = () => {
  return (
    <>
      <div className="singin-from">
        <div>
          <div className="heading-wrapper">
            {/* heading  */}
            <h3>Sing in to Blog-Post</h3>
            <p>
              Don't Have An Account? <span>Get started</span>
            </p>
          </div>
          <div className="media-wrapper">
            {/* social media icon */}
            <div className="social-div" style={{ border: "1px solid #dfe2e6", borderRadius: "4px" }}>
              <Button >
                <img src="/image/logo/logo_1.svg" />
              </Button>
            </div>
            <div className="social-div" style={{ border: "1px solid #dfe2e6", borderRadius: "4px" }}>
              <Button >
                <img src="/image/logo/logo_2.svg" />
              </Button>
            </div>
            <div className="social-div" style={{ border: "1px solid #dfe2e6", borderRadius: "4px" }}>
              <Button >
                <img src="/image/logo/logo_3.svg"  className="imgtag" />
              </Button>
            </div>
          </div>

          <hr></hr>
          <form className="sing-form">
            {/* add email, password, chackbox  and button  */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Singup;
