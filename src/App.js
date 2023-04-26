import Page1 from "./component/Page1";
import "./App.css";
import Singup from "./component/Singup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Protected from "./component/Protected";
import Errorpage from "./component/Errorpage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Singup />}></Route>
          <Route path="/home" element={<Protected Component={Page1} />} />
          <Route path="*" element={< Errorpage />}></Route>
        </Routes>
      </Router>
      {/* <Singup />
    <Page1/> */}
    {/* <Errorpage /> */}
    </>
  );
}

export default App;
