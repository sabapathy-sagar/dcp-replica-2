import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import App from "./App/App";
import "bulma/css/bulma.css";
import "bulma-extensions/dist/bulma-extensions.min.css";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
