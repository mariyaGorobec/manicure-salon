import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { aboutUs, enroll, photos, price } from "../../store/bodyColor/bodyColorSlice";
import styles from "./Menu.module.scss";


function Menu() {
  const dispatch = useDispatch();
  let menuItem = [
    {
      describe: "Кто мы?",
      link: "/aboutUs",
      reducer: aboutUs(),
    },
    {
      describe: "Сколько стоит?",
      link: "/price",
      reducer: price(),
    },
    {
      describe: "Фоточки наших работ",
      link: "/photos",
      reducer: photos(),
    },
    {
      describe: "А свободные окошки есть?",
      link: "/enroll",
      reducer: enroll(),
    },
  ];
  return (
    <div className={styles.menu}>
      <ul>
        {menuItem.map((item) => (
          <li onClick={()=>dispatch(item.reducer)}>
            <Link to={item.link}>
              <img src="/img/star.png" alt="star" width={50} height={50}></img>
              <span>{item.describe}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Menu;
