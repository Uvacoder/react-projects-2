import React from "react";
import ReactDOM from "react-dom";

import { AppProvider } from "./Context";
import App from "./App";

import "./styles/styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  rootElement
);
