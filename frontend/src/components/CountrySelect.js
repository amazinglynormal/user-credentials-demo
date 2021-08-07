import styles from "./CountrySelect.module.css";
import countries from "../countries";

export const CountrySelect = () => {
  return (
    <div>
      <form className={styles.form}>
        <label htmlFor="countrySelect" className={styles.label}>
          Select a country:
        </label>
        <select name="countries" id="countrySelect" className={styles.select}>
          {countries.map((country) => {
            return (
              <option key={country} value={country} className={styles.option}>
                {country}
              </option>
            );
          })}
        </select>
        <button type="submit" className={styles.confirmButton}>
          Confirm
        </button>
      </form>
    </div>
  );
};
