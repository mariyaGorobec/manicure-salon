import style from "./NailsCard.module.scss";

const NailsCard = ({ name, src, alt }) => {
  return (
    <div className={style.card}>
      <img src={src} alt={alt} width={300} height={350} />
      <span
        style={{
          color: "#283b63",
          fontWeight: "450",
          background: "#d4c4e9",
          width: "200px",
          padding: "10px",
          textAlign: "center",
          borderRadius: "20px",
          border: "2px #1b1464 solid",
          boxShadow: "8px 5px #554496",
        }}
      >
        Работа {name}
      </span>
    </div>
  );
};

export default NailsCard;
