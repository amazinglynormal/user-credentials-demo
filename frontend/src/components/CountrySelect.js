import styles from "./CountrySelect.module.css";
import countries from "../countries";

export const CountrySelect = () => {
  return (
    <div>
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
    </div>
  );
};
