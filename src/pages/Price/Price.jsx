import { useDispatch } from "react-redux";
import { price } from "../../store/bodyColorAndMenu/bodyColorAndMenuSlice";

const Price = () => {
  const dispatch = useDispatch();

  (() => {
    dispatch(price());
  })();
  return <h1>Здоровка!</h1>;
};

export default Price;
