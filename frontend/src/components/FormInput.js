import styles from "./FormInput.module.css";

export const FormInput = ({ type, id, label, placeholder }) => {
  return (
    <div className={styles.container}>
      <label for={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type || "text"}
        id={id}
        name={id}
        placeholder={placeholder || ""}
        className={styles.input}
      />
    </div>
  );
};
