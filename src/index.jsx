import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


// import Mainlayout from "./Mainlayout/Mainlayout";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Mainlayout> */}
      <App />
    {/* </Mainlayout> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
