import React from "react";
import style from "./Cost.module.scss";
import DivideNumberIntoСategory from '../DivideNumberIntoСategory/DivideNumberIntoСategory'

const Cost = () => {
  const [isTopMaster, setIsTopMaster] = React.useState(false);
  const proceduresBasicMaster = [
    {
      procedure: "Маникюр + гель-лак",
      price: 1400,
    },
    {
      procedure: "Маникюр + коррекция нарощенных ногтей",
      price: 2600,
    },
    {
      procedure: "Парафинотерапия (руки)",
      price: 600,
    },
    {
      procedure: "Маникюр (без покрытия)",
      price: 1000,
    },
    {
      procedure: "Маникюр + наращивание ногтей",
      price: 3000,
    },
    {
      procedure: "Снятие чужой работы",
      price: 250,
    },
    {
      procedure: "Мужской маникюр",
      price: 1000,
    },
  ];
  const proceduresTopMaster = [
    {
      procedure: "Маникюр + гель-лак",
      price: 1800,
    },
    {
      procedure: "Маникюр + коррекция нарощенных ногтей",
      price: 2800,
    },
    {
      procedure: "Парафинотерапия (руки)",
      price: 700,
    },
    {
      procedure: "Маникюр (без покрытия)",
      price: 1100,
    },
    {
      procedure: "Маникюр + наращивание ногтей",
      price: 3300,
    },
    {
      procedure: "Снятие чужой работы",
      price: 300,
    },
    {
      procedure: "Мужской маникюр",
      price: 1300,
    },
  ];

  return (
    <div className={style.priceList}>
      <div className={style.header}>
        <button style={isTopMaster ? {background: '#ff8eed', boxShadow: "2px 2px 5px grey"}: {background: '#fff', cursor:"none"} } className = {style.btn1} onClick={() => setIsTopMaster(false)}>Basic-мастер</button>
        <button style={isTopMaster ? {background: '#fff', cursor: "none"}  : {background: '#ff8eed', boxShadow: "2px 2px 5px grey"}} className={style.btn2} onClick={() => setIsTopMaster(true)}>Top-мастер</button>
      </div>
      <div className={style.price}>
        {isTopMaster ? (
          <div className={style.topPriceList}>
            <ul>
              {proceduresTopMaster.map((item) => (
                <li>
                  <span>{item.procedure}</span>
                  <span><DivideNumberIntoСategory num = {item.price}></DivideNumberIntoСategory> руб.</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={style.basicPriceList}>
            <ul>
              {proceduresBasicMaster.map((item) => (
                <li>
                  <span>{item.procedure}</span>
                  <span><DivideNumberIntoСategory num = {item.price}></DivideNumberIntoСategory> руб.</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cost;
