import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import "@fontsource/poppins";
import "./index.css";

import store from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
