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
          <a href="/" className={styles.navLinkSecondary}>
            Sign in
          </a>
          <a href="/" className={styles.navLinkPrimary}>
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
};
