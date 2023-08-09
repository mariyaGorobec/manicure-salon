import { useDispatch } from "react-redux";
import NailsCard from "../../components/NailsCard/NailsCard";
import { photos } from "../../store/bodyColorAndMenu/bodyColorAndMenuSlice";

const Photos = () => {
  const dispatch = useDispatch();
  (() => {
    dispatch(photos());
  })();
  
  const src = './img/nails/nails1.png';
  const name='Евгении';
  const alt = 'nailsPhoto';

  return (
    <>
    <NailsCard src={src} name = {name} alt={alt}></NailsCard>
    </>
  );
};

export default Photos;
