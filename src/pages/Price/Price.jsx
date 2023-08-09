import { useDispatch } from "react-redux";
import Cost from "../../components/Cost/Cost";
import Grid from "../../components/Grid/Grid";
import Menu from "../../components/Menu/Menu";
import { price } from "../../store/bodyColorAndMenu/bodyColorAndMenuSlice";
import style from "./Price.module.scss";

const Price = () => {
  const dispatch = useDispatch();
  (() => {
    dispatch(price());
  })();
  const color = "#ff98f5";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <img style={{alignSelf:'flex-start', position:'absolute', right:'3%', top: '7%', zIndex: '-5'}} alt='wave' src="./img/wave.png" width={350} height={350}></img>
      <img alt='diamond' src='./img/diamond.png' style={{position: 'absolute', alignSelf: 'center', left:'5%'}} width={150} height={150}></img>
      <img style={{position: 'absolute', alignSelf: 'flex-end', left:"5%"}} alt="armAndFire" src='./img/armAndFire.png' width={250} height={250}></img>
      <div style={{ justifySelf: "center", width: "100%" }}>
        <Cost></Cost>
      </div>
      <div
        style={{
          zIndex: "-5",
          position: "absolute",
          marginRight: "auto",
          left: "5%",
        }}
      >
        <img alt='planet' src="./img/planet.png" width={350} height={350} style={{position: 'absolute', zIndex: '20', marginLeft: '20%'}}></img>
        <Grid color={color}></Grid>
      </div>
      <div
        style={{
          alignSelf: "flex-end",
          right: "2%",
          marginLeft: "auto",
          position: "relative",
          marginLeft: "-20%",
        }}
      >
        
        <Menu></Menu>
      </div>
      
    </div>
  );
};

export default Price;
