import style from "./GirlsCards.module.scss";

const GirlItem = () => {
  const girlsPhoto = [
    {
      src: "/img/oneGIrl.png",
      alt: "firstGirl",
      className: "fistGirl",
      name: "Евгения",
      describe:
        "Топ-мастер с десятилетним стажем. Люблю делать маникюр с котиками и пирог с яблоками.",
    },
    {
      src: "/img/twoGirl.png",
      alt: "secondGirl",
      className: "secondGirl",
      name: "Кристина",
      describe:
        "Имею множество успешно пройденных курсов за спиной. Быстро и круто наращиваю, нарисую самые сумасшедшие идеи.",
    },
    {
      src: "/img/threeGirl.png",
      alt: "threeGirl",
      className: "thirdGirl",
      name: "Марго",
      describe:
        "Мастер с вышсшим по психологии:D. Окажу помощь не только твоим ноготкам, но и поделюсь советом.",
    },
  ];
  return (
    <div className={style.girls}>
      {girlsPhoto.map((item, index) =>
        item.className === "secondGirl" ? (
          <div className={style.girlCard}>
            <div className={style.aboutTheEmployeeSecondCard}>
              <span className={style.name}>{item.name}</span>
              <span className={style.describe}>{item.describe}</span>
            </div>
            <img
              className={style.lips}
              width={200}
              height={150}
              alt="lips"
              src="./img/lips.png"
            ></img>
            <img
              className={style[item.className]}
              width={200}
              height={250}
              src={item.src}
              alt={item.alt}
            ></img>
          </div>
        ) : (
          <div className={style.girlCard}>
            <img
              className={style[item.className]}
              width={200}
              height={250}
              src={item.src}
              alt={item.alt}
            ></img>
            <div className={style.aboutTheEmployee}>
              <span className={style.name}>{item.name}</span>
              <span className={style.describe}>{item.describe}</span>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default GirlItem;
