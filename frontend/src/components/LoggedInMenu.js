import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./LoggedInMenu.module.css";

export const LoggedInMenu = ({ email }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onMenuClick = () => {
    setMenuOpen(true);
  };

  const onCloseClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      <button type="button" className={styles.menuButton} onClick={onMenuClick}>
        {email || "Username"}
      </button>

      <div className={menuOpen ? styles.menu : styles.hidden}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onCloseClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className={styles.menuContainer}>
          <Link to="/profile" className={styles.profileLink}>
            Profile
          </Link>
          <button type="button" className={styles.logOutButton}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};
