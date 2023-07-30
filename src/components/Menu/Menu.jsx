import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { aboutUs } from "../../store/bodyColor/bodyColorSlice";
import styles from "./Menu.module.scss";


function Menu() {
  const dispatch = useDispatch();
  let menuItem = [
    {
      describe: "Кто мы?",
      link: "/aboutUs",
      className: "aboutUs",
      reducer: aboutUs(),
    },
    {
      describe: "Сколько стоит?",
      link: "/price",
      className: "price",
      reducer: aboutUs(),
    },
    {
      describe: "Фоточки наших работ",
      link: "/photos",
      className: "photos",
      reducer: aboutUs(),
    },
    {
      describe: "А свободные окошки есть?",
      link: "/enroll",
      className: "enroll",
      reducer: aboutUs(),
    },
  ];
  return (
    <div className={styles.menu}>
      <ul>
        {menuItem.map((item) => (
          <li onClick={()=>dispatch(item.reducer)} className={item.className}>
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
