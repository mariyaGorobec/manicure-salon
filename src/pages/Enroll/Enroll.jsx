import { useDispatch } from "react-redux";
import { enroll } from "../../store/bodyColorAndMenu/bodyColorAndMenuSlice";

const Enroll = () => {
  const dispatch = useDispatch();

  (() => {
    dispatch(enroll());
  })();
  return <h1>Бай!!!</h1>;
};

export default Enroll;
