import Menu from "../../components/Menu/Menu";
import style from "./Home.module.scss";
import { useDispatch } from "react-redux";
import { home } from "../../store/bodyColorAndMenu/bodyColorAndMenuSlice";
import Grid from "../../components/Grid/Grid";

function Home() {
  const color = "#fad3da";
  const dispatch = useDispatch();

  (() => {
    dispatch(home());
  })();

  return (
    <div className={style.conteiner}>
      <img
        alt="arms"
        className={style.arms}
        width={400}
        height={350}
        src="/img/arms.png"
      ></img>

      <div class={style.overlay}>
        <Grid color={color}></Grid>
        <div className={style.item}>
          <div className={style.imagesForDesign}>
            <img
              alt="imgSalon"
              height={300}
              width={450}
              className={style.imgSalon}
              src="/img/imgSalon.png"
            ></img>
            <img
              alt="circle"
              className={style.circle}
              height={300}
              width={300}
              src="/img/circle.png"
            ></img>

            <img
              alt="butterfly"
              className={style.butterfly}
              height={150}
              width={200}
              src="/img/butterfly.png"
            ></img>
            <img
              alt="heart"
              className={style.heart}
              src="/img/heart.png"
              width={160}
              height={150}
            ></img>
            <img
              alt="mobilePhone"
              className={style.mobilePhone}
              width={70}
              height={120}
              src="/img/mobilePhone.png"
            ></img>
          </div>
          <h3>лучшие ноготочки в твоём городе!</h3>
          <h1> ПО РУКАМ</h1>
          <div className={style.quote}>
            <span className={style.quoteAboutManicure}>
              «Всё в ваших руках. Поэтому они должны быть в полном порядке» —
              Coco Chanel
            </span>
            <span className={style.location}>
              г.Иркутск, ул.Байкальская, д.2, тел. +7(999)-999-99-99
            </span>
          </div>
        </div>
      </div>
      <div className={style.bearAndMenu}>
        <img
          alt="bear"
          className={style.bear}
          width={250}
          height={250}
          src="/img/bear.png"
        ></img>
        <div style={{marginRight: "100px"}}><Menu color={color}></Menu></div>
      </div>
    </div>
  );
}
export default Home;
