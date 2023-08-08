import { useDispatch } from "react-redux";
import Cost from "../../components/Cost/Cost";
import Menu from "../../components/Menu/Menu";
import { price } from "../../store/bodyColorAndMenu/bodyColorAndMenuSlice";
import style from "./Price.module.scss";

const Price = () => {
  const dispatch = useDispatch();

  (() => {
    dispatch(price());
  })();
  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
        <div style={{justifySelf: 'center', width: '100%'}}>
        <Cost></Cost>
        </div>
        <div style={{alignSelf: 'flex-end', right:"2%", marginLeft: 'auto', position: 'relative', marginLeft: '-20%'}}>
          <Menu></Menu>
        </div>
    </div>
  );
};

export default Price;
