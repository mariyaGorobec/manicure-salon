import logo from "./logo.svg";
import style from "./index.module.scss";

function App() {
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(1);
  }

  return (
    <div className={style.conteiner}>
      <div class={style.grid}>
        {arr.map((item) => (
          <div></div>
        ))}
        <div className={style.item}>
          <img
            height={350}
            width={500}
            className={style.imgSalon}
            src="/img/imgSalon.png"
          ></img>
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
    </div>
  );
}

export default App;
