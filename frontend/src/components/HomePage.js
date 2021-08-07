import { UsernameCountryList } from "./UsernameCountryList";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <h1 className={styles.header}>Where do they want to go next?</h1>
      <UsernameCountryList />
    </div>
  );
};

export default HomePage;
