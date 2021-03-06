import { Panel } from "./Panel";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div>
      <h1 className={styles.header}>Create an account</h1>
      <p className={styles.subHeader}>It's easy and free.</p>
      <Panel>
        <form onSubmit={onFormSubmit}>
          <FormInput label="Username" id="username" />
          <FormInput type="email" label="Email" id="email" />
          <FormInput type="password" label="Password" id="password" />
          <FormButton text="Create account" />
        </form>
      </Panel>
      <p className={styles.logInOption}>
        Already have an account?{" "}
        <Link to="/login" className={styles.logInLink}>
          Log in here
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
