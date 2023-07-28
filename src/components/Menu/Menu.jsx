import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

function Menu() {
  let menuItem = [
    {
      describe: "Кто мы?",
      link: "/aboutUs",
      className: "aboutUs",
    },
    {
      describe: "Сколько стоит?",
      link: "/price",
      className: "price",
    },
    {
      describe: "Фоточки наших работ",
      link: "/photos",
      className: "photos",
    },
    {
      describe: "А свободные окошки есть?",
      link: "/enroll",
      className: "enroll",
    },
  ];
  return (
    <div className={styles.menu}>
      <ul>
        {menuItem.map((item) => (
          <li className={item.className}>
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
