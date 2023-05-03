import React, { useContext, useState } from "react";
import Headerpage from "../common/Headerpage";
import "./Table.css";
import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Copyright, Favorite, MoreVert } from "@mui/icons-material";
import { useEffect } from "react";
import { ThemeContext } from "../../context/themecontext";

const AuthorsTable = [
  {
    index: 0,
    img: "image_20.jpg",
    name: "John Michael",
    email: "john@creativ-tim.com",
    Designation: "Manager(Organization)",
    status: true,
    date: "23/04/18",
  },
  {
    index: 1,
    img: "image_21.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    Designation: "Programator-Developer",
    status: false,
    date: "11/01/19",
  },
  {
    index: 2,
    img: "image_22.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    Designation: "Executive-Projects",
    status: true,
    date: "19/09/17",
  },
  {
    index: 3,
    img: "image_20.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    Designation: "Programator-Developer",
    status: true,
    date: "24/12/08",
  },
  {
    index: 4,
    img: "image_21.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    Designation: "Manager-Executive",
    status: false,
    date: "04/10/21",
  },
  {
    index: 5,
    img: "image_22.jpg",
    name: "Miriam Eric",
    email: "miriam@creative-tim.com",
    Designation: "Programator-Develope",
    status: false,
    date: "14/09/20",
  },
];

const ProjectsTable = [
  {
    logo: "table-1.svg",
    name: "Asana",
    budget: "$2,500",
    status: "working",
    complet: "60%",
  },
  {
    logo: "table-2.svg",
    name: "Github",
    budget: "$5,500",
    status: "Done",
    complet: "100%",
  },
  {
    logo: "table-3.svg",
    name: "Atlassian",
    budget: "$3,000",
    status: "Canceled",
    complet: "30%",
  },
  {
    logo: "table-4.svg",
    name: "Spotify",
    budget: "$25,500",
    status: "working",
    complet: "80%",
  },
  {
    logo: "table-5.svg",
    name: "Slack",
    budget: "$1,500",
    status: "Done",
    complet: "0%",
  },
  {
    logo: "table-6.svg",
    name: "Invesion",
    budget: "$2,300",
    status: "Canceled",
    complet: "100%",
  },
];

const TablePage = ({ Toactive, sidebarClick}) => {
  const [searchvalue, setSearchvalue] = useState("");
  const [allData, setallData] = useState(AuthorsTable);
 
  const[darkthem, setDarkthem] = useState(false)



  const themeMode = useContext(ThemeContext)

  
  useEffect(() => {
   setDarkthem(themeMode.themeMode === "dark"); 
  }, [themeMode])


 

  useEffect(() => {
    const filteredData = AuthorsTable.filter(
      (index, item) =>
        index.name.toLowerCase().includes(searchvalue.toLowerCase()) ||
        index.Designation.toLowerCase().includes(searchvalue.toLowerCase()) ||
        index.email.toLowerCase().includes(searchvalue.toLowerCase()) ||
        index.date.toLowerCase().includes(searchvalue.toLowerCase())
    );

    setallData(filteredData);
  }, [searchvalue]);

  const heandlesearch = (value) => {
    setSearchvalue(value);
  };





  return (
    <>
      <Headerpage
        title="Table"
        handleHomeClick={Toactive}
        heandlesearch={heandlesearch}
        value={searchvalue}
        sidebarClickk = {sidebarClick}
      />
      <div className={darkthem ? "darkModeHome-tablemain" : "tablemain"}>
        <div className="main-table-div">
          <div className="mini-haeder">Authors Table</div>
          <div className={darkthem ? "darkModeHome-employ-t" : "employ-t"}>
            <TableContainer>
              <Table>
                <TableHead className="table-heading">
                  <TableRow>
                    <TableCell className="table-row-heading">AUTHOR</TableCell>
                    <TableCell className="table-row-heading">
                      FUNCTION
                    </TableCell>
                    <TableCell className="table-row-heading">STATUS</TableCell>
                    <TableCell className="table-row-heading">
                      EMPLOYED
                    </TableCell>
                    <TableCell className="table-row-heading">ACTION</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allData.length > 0 ? (
                    allData.map((rowData, index) => {
                      return (
                        <TableRow key={index} className="t-row">
                          <TableCell>
                            <div className="table-row">
                              <div className="imgtable">
                                {
                                  <img
                                    src={`./image/${rowData.img}`}
                                    alt={`${rowData.name}`}
                                    className="imgtable1"
                                  />
                                }
                              </div>
                              <div className="name-email-t">
                                <span className="tname">{rowData.name}</span>
                                <span className="temail">{rowData.email}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="tdesignation">
                            {rowData.Designation}
                          </TableCell>
                          <TableCell className="tstatus">
                            {rowData.status ? (
                              <span className="onlineTable">ONLINE</span>
                            ) : (
                              <span className="offnlineTable">OFFLINE</span>
                            )}
                          </TableCell>
                          <TableCell className="tdate">
                            {rowData.date}
                          </TableCell>
                          <TableCell className="tbtn">
                            {<Button className="teble-btn">Edit</Button>}
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <h1>No Data Found </h1>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="main-table-div-2">
          <div className="mini-haeder">Projects Table</div>
          <div className={darkthem ? "darkModeHome-employ-t" : "employ-t"}>
            <TableContainer>
              <Table>
                <TableHead className="table-heading">
                  <TableRow>
                    <TableCell className="table-row-heading">PROJECT</TableCell>
                    <TableCell className="table-row-heading">BUDGET</TableCell>
                    <TableCell className="table-row-heading">STATUS</TableCell>
                    <TableCell className="table-row-heading">
                      COMPLETION
                    </TableCell>
                    <TableCell className="table-row-heading">ACTION</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ProjectsTable.map((rowData, index) => (
                    <TableRow key={index} className="t-row">
                      <TableCell>
                        <div className="table-row">
                          <div className="imgtable">
                            {
                              <img
                                src={`./image/logo/${rowData.logo}`}
                                alt={`${rowData.name}`}
                                className="imgtable1"
                              />
                            }
                          </div>
                          <div className="name-email-t">
                            <span className="tname">{rowData.name}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="tdesignation">
                        {rowData.budget}
                      </TableCell>
                      <TableCell className="tstatus">
                        {rowData.status}
                      </TableCell>
                      <TableCell className="tdate">
                        <div className="progress-div">
                          {rowData.complet}

                          <div
                            className="linecolor1"
                            style={{ width: "100%", background: "#f0f2f5" }}
                          >
                            <div
                              className="linecolor2"
                              style={{
                                width: `${rowData.complet}`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="tbtn">
                        {
                          <IconButton className="teble-btn">
                            <MoreVert />
                          </IconButton>
                        }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="footer-table">
          <div className="table-copyright">
            <Copyright /> 2023, made with <Favorite /> by Creative Tim for a
            better web.
          </div>
          <div className="content">
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

export default TablePage;
