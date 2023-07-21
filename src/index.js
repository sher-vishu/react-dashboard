import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SideBar from "./components/SideBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
      <SideBar>
        <App />
      </SideBar>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);