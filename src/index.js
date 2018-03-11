import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "tachyons";

import { store } from "_helpers/store";
import { App } from "App/App";
import styles from "styles/css/style.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
