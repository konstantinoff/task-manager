import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./state";

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
