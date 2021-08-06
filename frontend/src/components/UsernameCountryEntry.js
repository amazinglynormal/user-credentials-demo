import styles from "./UsernameCountryEntry.module.css";

export const UsernameCountryEntry = ({ username, country }) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.dataContainer}>
        <p className={styles.username}>{username || "Username"}</p>
        <p className={styles.country}>{country || "Country"}</p>
      </div>
    </li>
  );
};
