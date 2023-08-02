import styles from "./Grid.module.scss";

const Grid = ({ color }) => {
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(1);
  }
  return (
    <div class={styles.grid}>
      {arr.map((item) => (
        <div style={{ borderColor: color }}></div>
      ))}
    </div>
  );
};

export default Grid;
