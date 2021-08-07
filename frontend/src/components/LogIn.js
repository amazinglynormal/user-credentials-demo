import { Panel } from "./Panel";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";
import styles from "./LogIn.module.css";
import { Link } from "react-router-dom";

const LogIn = () => {
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
        <Link to="/signup" className={styles.signUpLink}>
          Sign up here
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
