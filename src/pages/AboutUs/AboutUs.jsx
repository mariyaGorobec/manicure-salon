import Menu from "../../components/Menu/Menu";
import style from "./AboutUs.module.scss";
import { useDispatch } from "react-redux";
import { aboutUs } from "../../store/bodyColorAndMenu/bodyColorAndMenuSlice";
import Grid from "../../components/Grid/Grid";
import GirlItem from "../../components/GirlsCards/GirlsCards";

function AboutUs() {
  const color = "#fb9af2";
  const dispatch = useDispatch();
  (() => {
    dispatch(aboutUs());
  })();
  return (
    <div className={style.conteiner}>
      <div className={style.girlsAndGrid}>
        <div className={style.girls}>
          <GirlItem></GirlItem>
        </div>
        <div className={style.grids}>
          <Grid color={color}></Grid>
          <img
            className={style.cat}
            src="./img/cat.png"
            width={180}
            height={150}
          ></img>
          <img
            className={style.emerald}
            src="./img/emerald.png"
            width={75}
            height={150}
          ></img>
        </div>
      </div>
      <div className={style.menuAndDescribtion}>
        <h1 className={style.aboutCompany}>
          Наша компания уже 5 лет в нейл-индустрии. С нас - качественные услуги
          и уютная атмосфера, с вас - отличное настроение! Но даже, если день у
          вас не задался, мы постараемся это исправить и будем ждать в гости!
        </h1>
        <img src="./img/starAbstract.png" width={350} height={350}></img>
        <div className={style.menu}>
          <Menu></Menu>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
