import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import style from "./index.module.scss";
import React from "react";
import Price from "./pages/Price/Price";
import Photos from "./pages/Photos/Photos"
import Enroll from './pages/Enroll/Enroll'

function App() {
  return (
    <div className={style.conteiner}>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="/price" element={<Price></Price>}></Route>
        <Route path="/photos" element={<Photos></Photos>}></Route>
        <Route path="/enroll" element={<Enroll></Enroll>}></Route>
      </Routes>
    </div>
  );
}

export default App;
