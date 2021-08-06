import { UsernameCountryEntry } from "./UsernameCountryEntry";
import styles from "./UsernameCountryList.module.css";

export const UsernameCountryList = () => {
  return (
    <div>
      <ol className={styles.list}>
        <UsernameCountryEntry />
        <UsernameCountryEntry />
        <UsernameCountryEntry />
        <UsernameCountryEntry />
        <UsernameCountryEntry />
      </ol>
    </div>
  );
};
