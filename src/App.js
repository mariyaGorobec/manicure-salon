import logo from "./logo.svg";
import style from "./index.module.scss";

function App() {
  let arr = [];
  let menuItem = [
    "Кто мы?",
    "Сколько стоит?",
    "Фоточки наших работ",
    "А свободные окошки есть?",
  ];
  for (let i = 0; i < 100; i++) {
    arr.push(1);
  }

  return (
    <div className={style.conteiner}>
      <img
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
              height={300}
              width={450}
              className={style.imgSalon}
              src="/img/imgSalon.png"
            ></img>
            <img
              className={style.circle}
              height={300}
              width={300}
              src="/img/circle.png"
            ></img>

            <img
              className={style.butterfly}
              height={150}
              width={200}
              src="/img/butterfly.png"
            ></img>
            <img
              className={style.heart}
              src="/img/heart.png"
              width={160}
              height={150}
            ></img>
            <img
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
        className={style.bear}
        width={250}
        height={250}
        src="/img/bear.png"
      ></img>
      <div className={style.menu}>
        <ul>
          {menuItem.map((item) => (
            <li>
              <img src="/img/star.png" width={50} height={50}></img>
              {item}
            </li>
          ))}
        </ul>
      </div>
     </div>
    </div>
  );
}

export default App;
