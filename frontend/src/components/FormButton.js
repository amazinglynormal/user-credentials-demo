import styles from "./FormButton.module.css";

export const FormButton = ({ text }) => {
  return (
    <button type="submit" className={styles.formButton}>
      {text}
    </button>
  );
};
