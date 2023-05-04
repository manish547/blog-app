import React, { useContext, useEffect, useState } from 'react'

import "./Singout.css"
import { ThemeContext } from '../../context/themecontext';

import { Box, Button, Modal, Stack } from '@mui/material';
import { Delete, Warning } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';





const Singout = ({hendleModal, hendleModalFalse}) => {
  const navigate = useNavigate();

  const[darkthem, setDarkthem] = useState(false)
  const themeMode = useContext(ThemeContext)
 
   
   useEffect(() => {
    setDarkthem(themeMode.themeMode === "dark"); 
   }, [themeMode])

  
  
  
   const hendleLogout = () => {
    localStorage.removeItem("userData")
       navigate("/")
  }
  return (
    <>
    <div>
    <Modal open={hendleModal} onClose={() => hendleModalFalse(false)}>
            <Box className="boxModal" >
              <div className={darkthem ? "darkModeHome-logout-div" :"logout-div" }>
                <div className="logoutheading">
                  <h4> Logout Accaount ? </h4>
                </div>
                <div className="logoutemail">
                  {" "}
                  <p>Are You Sure Want To Logout 
                    {/* {email.email} */}
                    </p>
                </div>
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <div className="logoutwarning">
                    <div className="logoutline"></div>
                    <div className="logoutitem">
                      <div className="headingicon">
                        <Warning />
                        <h3>Warning</h3>
                      </div>

                      <p>By logout this account all deta also be deleted</p>
                    </div>
                  </div>
                </Stack>
                <div className="logoutbtn">
                  <Button
                    variant="contained"
                    color="info"
                    onClick={() => hendleModalFalse(false)}
                  >
                    Cancel
                  </Button>

                  <Button
                    variant="contained"
                    color="warning"
                    onClick={hendleLogout}
                  >
                    Logout <Delete />
                  </Button>
                </div>
              </div>
            </Box>
          </Modal>
    </div>
    </>
  )
}

export default Singout