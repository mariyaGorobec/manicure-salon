import style from "./NailsCard.module.scss";

const NailsCard = ({ name, src, alt }) => {
  return (
    <div className={style.card}>
      <img src={src} alt={alt} width={300} height={350} />
      <span
        style={{
          color: "#283b63",
          fontWeight: "320",
          width: "200px",
          padding: "10px",
          textAlign: "center",
        }}
      >
        Работа {name}
      </span>
    </div>
  );
};

export default NailsCard;
