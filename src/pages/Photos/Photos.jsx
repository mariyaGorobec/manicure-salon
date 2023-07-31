import { useDispatch } from "react-redux";
import { photos } from "../../store/bodyColorAndMenu/bodyColorAndMenuSlice";

const Photos = () => {
  const dispatch = useDispatch();

  (() => {
    dispatch(photos());
  })();
  return <h1>Хай!!!</h1>;
};

export default Photos;
