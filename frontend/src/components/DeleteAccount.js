import styles from "./DeleteAccount.module.css";

export const DeleteAccount = () => {
  return (
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
  );
};
