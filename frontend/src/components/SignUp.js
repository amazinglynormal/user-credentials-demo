import { Panel } from "./Panel";
import { FormInput } from "./FormInput";
import styles from "./SignUp.module.css";

export const SignUp = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Create an account</h1>
      <p>It's easy and free.</p>
      <Panel>
        <form onSubmit={onFormSubmit}>
          <FormInput label="Username" id="username" />
          <FormInput type="email" label="Email" id="email" />
          <FormInput type="password" label="Password" id="password" />
          <button type="submit">Create account</button>
        </form>
      </Panel>
    </div>
  );
};
