import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <a href="/" className={styles.brand}>
            DEMO
          </a>
        </div>
        <div className={styles.navLinks}>
          <Link to="/login" className={styles.navLinkSecondary}>
            Log in
          </Link>
          <Link to="/signup" className={styles.navLinkPrimary}>
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
};
