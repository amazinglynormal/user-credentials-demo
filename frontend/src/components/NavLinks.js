import { Link } from "react-router-dom";

import styles from "./NavLinks.module.css";

export const NavLinks = () => {
  return (
    <div className={styles.navLinks}>
      <Link to="/login" className={styles.navLinkSecondary}>
        Log in
      </Link>
      <Link to="/signup" className={styles.navLinkPrimary}>
        Sign up
      </Link>
    </div>
  );
};
