import Page1 from "./component/Page1";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Protected from "./component/Protected";
import Singup from "./component/singup/Singup";
import Errorpage from "./component/errorpage/Errorpage"
// import Singout from "./component/common/Singout";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Singup />}></Route>
          <Route path="/home" element={<Protected Component={Page1} />} />
          <Route path="*" element={<Errorpage />}></Route>
        </Routes>
      </Router>
      {/* <Singup />
    <Page1/> */}
    {/* <Errorpage /> */}
    
    </>
  );
}

export default App;
