import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import style from "./index.module.scss";
import React from "react";

function App() {
  return (
    <div className={style.conteiner}>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          {" "}
        </Route>
        <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
