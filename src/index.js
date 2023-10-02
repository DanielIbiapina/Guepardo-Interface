import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./style/GlobalStyles";
import { BrowserRouter } from "react-router-dom/dist";
import RoutesApp from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  </>
);
