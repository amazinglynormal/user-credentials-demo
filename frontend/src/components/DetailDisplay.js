import styles from "./DetailDisplay.module.css";

const passwordDots = "●●●●●●●●";

export const DetailDisplay = ({ name, data }) => {
  return (
    <div className={styles.detailDisplay}>
      <div className={styles.detail}>
        <p className={styles.name}> {name}</p>
        <span className={styles.data}>
          {name === "Password" ? passwordDots : data}
        </span>
      </div>
      <button type="button" className={styles.changeButton}>
        Change
      </button>
    </div>
  );
};
