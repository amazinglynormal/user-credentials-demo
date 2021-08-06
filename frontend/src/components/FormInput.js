import styles from "./FormInput.module.css";

export const FormInput = ({ type, id, label, placeholder, autocomplete }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type || "text"}
        id={id}
        name={id}
        placeholder={placeholder || ""}
        className={styles.input}
        autoComplete={autocomplete}
      />
    </div>
  );
};
