import React from "react";
import ReactDOM from "react-dom";
import "./index.module.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
