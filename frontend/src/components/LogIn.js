import { Panel } from "./Panel";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";
import styles from "./LogIn.module.css";

export const LogIn = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div>
      <h1 className={styles.header}>Welcome back!</h1>
      <Panel>
        <form onSubmit={onFormSubmit}>
          <FormInput type="email" label="Email" id="email" />
          <FormInput type="password" label="Password" id="password" />
          <FormButton text="Log in" />
        </form>
      </Panel>
      <p className={styles.signUpOption}>
        Need to create an account?{" "}
        <a href="/" className={styles.signUpLink}>
          Sign up here
        </a>
      </p>
    </div>
  );
};
