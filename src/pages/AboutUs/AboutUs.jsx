import Menu from "../../components/Menu/Menu";
import style from "./AboutUs.module.scss";
import { useDispatch } from "react-redux";
import { aboutUs } from "../../store/bodyColorAndMenu/bodyColorAndMenuSlice";

function AboutUs() {
  const dispatch = useDispatch();

  (() => {
    dispatch(aboutUs());
  })();
  return (
    <div className={style.conteiner}>
      <Menu></Menu>
    </div>
  );
}

export default AboutUs;
