import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

function Menu() {
  const menuItem = useSelector((state) => state.bodyColorAndMenu.menuItem);
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
