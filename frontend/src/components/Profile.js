import { DetailDisplay } from "./DetailDisplay";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <div>
        <h2 className={styles.h2Header}>
          What country would you like to visit next?
        </h2>
      </div>
      <div>
        <h2 className={styles.h2Header}>Details</h2>
        <DetailDisplay name="Username" data="Test User" />
        <DetailDisplay name="Email" data="Test User" />
        <DetailDisplay name="Password" data="Test User" />
      </div>
      <div>
        <h2 className={styles.h2Header}>Delete account</h2>
        <div className={styles.deleteBox}>
          <h3 className={styles.deleteWarning}>WARNING</h3>
          <p className={styles.deleteParagraph}>
            This action will permanently delete your account.
          </p>
          <button
            type="button"
            onClick={() => console.log("Delete button clicked")}
            className={styles.deleteButton}
          >
            Yes, I want to delete my account
          </button>
        </div>
      </div>
    </div>
  );
};
