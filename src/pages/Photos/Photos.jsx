import { useDispatch, useSelector } from "react-redux";
import Menu from "../../components/Menu/Menu";
import NailsCard from "../../components/NailsCard/NailsCard";
import { photos } from "../../store/bodyColorAndMenu/bodyColorAndMenuSlice";
import Grid from "../../components/Grid/Grid";
import {
  tags,
  setActiveCatecory,
} from "../../store/photosNails/photosNailsSlice";
import React from "react";
import style from "./Photos.module.scss";

const Photos = () => {
  const dispatch = useDispatch();
  (() => {
    dispatch(photos());
  })();

  const photosItem = useSelector((state) => state.photosNails.photosItem);
  const categories = useSelector((state) => state.photosNails.categories);
  const color = "#fd99ef";
  const activeCategoryID = useSelector(
    (state) => state.photosNails.activeCategoryID
  );

  return (
    <div className="conteiner">
      <ul className={style.topMenu}>
        {categories.map((item) => (
          <li
            onClick={() => {
              dispatch(tags(item.categoryID));
              dispatch(setActiveCatecory(item.categoryID));
            }}
            id={item.categoryID}
            className={
              activeCategoryID === item.categoryID ? style["active"] : ""
            }
            style={{
              cursor: "pointer",
              width: "250px",
              padding: "15px",
              borderRadius: "20px",
              background: "linear-gradient(to left, #01d8d2,#4093e9,#876ff2)",
              textAlign: "center",
            }}
          >
            {item.category}
          </li>
        ))}
      </ul>
      <div style={{ display: "flex" }}>
        <div className={style.cards}>
          {photosItem.map((item) => (
            <NailsCard
              src={item.src}
              name={item.name}
              alt={item.alt}
            ></NailsCard>
          ))}
        </div>
        <div className={style.menu}>
          <img width={350} height={350} src="./img/armsWithGreen.png"></img>
          <Menu></Menu>
        </div>
      </div>
      <div
        style={{ position: "absolute", top: "2%", left: "2%", zIndex: "-5" }}
      >
        <Grid color={color}></Grid>
      </div>
      <div
        style={{ position: "absolute", top: "50%", left: "50%", zIndex: "-5" }}
      >
        <Grid color={color}></Grid>
      </div>
    </div>
  );
};

export default Photos;
