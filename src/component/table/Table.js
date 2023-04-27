import React from "react";
import Headerpage from "../common/Headerpage";


const AuthorsTable = [
  {
      index : 0,
      img : 'image_20.jpg',
      name : 'John Michael',
      email : 'john@creativ-tim.com',
      Designation : 'Manager(Organization)',
      status : true,
      date : '23/04/18',
  },
  {
      index : 1,
      img : 'image_21.jpg',
      name : 'Alexa Liras',
      email : 'alexa@creative-tim.com',
      Designation : 'Programator-Developer',
      status : false,
      date : '11/01/19',
  },
  {
      index : 2,
      img : 'image_22.jpg',
      name : 'Laurent Perrier',
      email : 'laurent@creative-tim.com',
      Designation : 'Executive-Projects',
      status : true,
      date : '19/09/17',
  },
  {
      index : 3,
      img : 'image_20.jpg',
      name : 'Michael Levi',
      email : 'michael@creative-tim.com',
      Designation : 'Programator-Developer',
      status : true,
      date : '24/12/08',
  },
  {
      index : 4,
      img : 'image_21.jpg',
      name : 'Richard Gran',
      email : 'richard@creative-tim.com',
      Designation : 'Manager-Executive',
      status : false,
      date : '04/10/21',
  },
  {
      index : 5,
      img : 'image_22.jpg',
      name : 'Miriam Eric',
      email : 'miriam@creative-tim.com',
      designation : 'Programator-Develope',
      status : false,
      date : '14/09/20',
  }
]

const ProjectsTable = [
  {
    logo : './image/logo/table-1.svg',
    name : 'Asana',
    budget : '$2,500',
    status : 'working',
    complet : '60%',
  },
  {
    logo : './image/logo/table-2.svg',
    name : 'Github',
    budget : '$5,500',
    status : 'Done',
    complet : '100%',
  },
  {
    logo : './image/logo/table-3.svg',
    name : 'Atlassian',
    budget : '$3,000',
    status : 'Canceled',
    complet : '30%',
  },
  {
    logo : './image/logo/table-4.svg',
    name : 'Spotify',
    budget : '$25,500',
    status : 'working',
    complet : '80%',
  },
  {
    logo : './image/logo/table-5.svg',
    name : 'Slack',
    budget : '$1,500',
    status : 'Done',
    complet : '0%',
  },
  {
    logo : './image/logo/table-6.svg',
    name : 'Invesion',
    budget : '$2,300',
    status : 'Canceled',
    complet : '100%',
  },
]



const TablePage = () => {
  return (
    <>
      <Headerpage title = 'Table' />
      
      <div className="table-div">
        <div>
          <table>
            <thead>
              <tr>
                <th>AUTHOR</th>
                <th>FUNCTION</th>
                <th>STATUS</th>
                <th>EMPLOYED</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {
                AuthorsTable.map((rowData, index)=>(
                   <tr key={index}>
                    <td>{<img src={`./image/${rowData.img}`} />}{rowData.name} {rowData.email}</td>
                   </tr>
                ))
              }
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TablePage;
