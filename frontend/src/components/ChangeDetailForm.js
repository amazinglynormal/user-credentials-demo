import styles from "./ChangeDetailForm.module.css";
import { FormInput } from "./FormInput";

export const ChangeDetailForm = ({
  id,
  type,
  label,
  autocomplete,
  onCancelledClicked,
}) => {
  return (
    <div>
      <form>
        <FormInput
          type={type}
          id={id}
          label={label}
          autocomplete={autocomplete}
        />
        <FormInput
          type="password"
          id="current-password"
          label="Current Password"
          autocomplete="current-password"
        />
        <div>
          <button
            type="button"
            id={`cancel${id}`}
            className={styles.cancelButton}
            onClick={onCancelledClicked}
          >
            Cancel
          </button>
          <button type="submit" className={styles.confirmButton}>
            Change
          </button>
        </div>
      </form>
    </div>
  );
};
