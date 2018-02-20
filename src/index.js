import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import App from "./components/App";
import Home from "./components/common/homepage";
import Header from "./components/common/header";
import Main from "./components/common/main";
import routes from "./routes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/css/style.css";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
