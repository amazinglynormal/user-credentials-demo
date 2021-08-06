import styles from "./AccountDetails.module.css";

export const AccountDetails = () => {
  return (
    <>
      <div>
        <DetailDisplay name="Username" data="Test User" />
      </div>
      <div>
        <DetailDisplay name="Email" data="Test User" />
      </div>
      <div>
        <DetailDisplay name="Password" data="Test User" />
        <ChangeDetailForm
          id="username"
          type="text"
          label="New Username"
          autocomplete="username"
        />
      </div>
    </>
  );
};
