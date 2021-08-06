import styles from "./ProfileSection.module.css";

export const ProfileSection = ({ header, children }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.h2Header}>{header}</h2>
      {children}
    </div>
  );
};
