import style from "./Home.module.scss";
import { Link } from "react-router-dom";

function Home() {
  document.body.style.backgroundImage="linear-gradient(#f0e8c2, #fe8bf1)";
 
  let arr = [];
  let menuItem = [
    {
      describe: "Кто мы?",
      link: "/aboutUs",
      className: "aboutUs"
    },
    {
      describe: "Сколько стоит?",
      link: "/price",
      className: "price"
    },
    {
      describe: "Фоточки наших работ",
      link: "/photos",
      className: "photos"
    },
    {
      describe: "А свободные окошки есть?",
      link: "/enroll",
     className:"enroll"
    },
  ];
  for (let i = 0; i < 100; i++) {
    arr.push(1);
  }

  return (
    <>
      <img
        alt="arms"
        className={style.arms}
        width={400}
        height={350}
        src="/img/arms.png"
      ></img>

      <div class={style.grid}>
        {arr.map((item) => (
          <div></div>
        ))}
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
        <div className={style.menu}>
          <ul>
            {menuItem.map((item) => (
              <li className={item.className}>
                <Link to={item.link}>
                  <img
                    src="/img/star.png"
                    alt="star"
                    width={50}
                    height={50}
                  ></img>
                  <span>{item.describe}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </>
  );
}
export default Home;
