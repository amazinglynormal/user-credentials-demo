import { Link } from "react-router-dom";
import { NavLinks } from "./NavLinks";

import styles from "./Navbar.module.css";
import { useState } from "react";
import { LoggedInMenu } from "./LoggedInMenu";

export const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Link to="/" className={styles.brand}>
            DEMO
          </Link>
        </div>
        {loggedIn ? <LoggedInMenu /> : <NavLinks />}
      </nav>
    </header>
  );
};
