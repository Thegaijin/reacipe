import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from "./components/common/homepage";
import App from "./components/App";

export default <Route exact path="/" component={Home} />;
