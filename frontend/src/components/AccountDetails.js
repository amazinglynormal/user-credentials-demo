import { useState } from "react";
import { ChangeDetailForm } from "./ChangeDetailForm";
import { DetailDisplay } from "./DetailDisplay";
import styles from "./AccountDetails.module.css";

export const AccountDetails = () => {
  const [showChangeForm, setShowChangeForm] = useState({
    username: false,
    email: false,
    password: false,
  });

  const onChangeClicked = (e) => {
    const name = e.target.id;
    console.log(name);
    switch (name) {
      case "changeUsername":
        setShowChangeForm((prev) => {
          return { ...prev, username: true };
        });
        break;
      case "changeEmail":
        setShowChangeForm((prev) => {
          return { ...prev, email: true };
        });
        break;
      case "changePassword":
        setShowChangeForm((prev) => {
          return { ...prev, password: true };
        });
        break;
    }
  };

  const onCancelledClicked = (e) => {
    const name = e.target.id;
    console.log(name);
    switch (name) {
      case "cancelusername":
        setShowChangeForm((prev) => {
          return { ...prev, username: false };
        });
        break;
      case "cancelemail":
        setShowChangeForm((prev) => {
          return { ...prev, email: false };
        });
        break;
      case "cancelpassword":
        setShowChangeForm((prev) => {
          return { ...prev, password: false };
        });
        break;
    }
  };

  return (
    <>
      <div>
        {showChangeForm.username ? (
          <ChangeDetailForm
            id="username"
            type="text"
            label="New Username"
            autocomplete="username"
            onCancelledClicked={onCancelledClicked}
          />
        ) : (
          <DetailDisplay
            name="Username"
            data="Test User"
            onChangeClicked={onChangeClicked}
          />
        )}
      </div>
      <div>
        {showChangeForm.email ? (
          <ChangeDetailForm
            id="email"
            type="email"
            label="New Email"
            autocomplete="email"
            onCancelledClicked={onCancelledClicked}
          />
        ) : (
          <DetailDisplay
            name="Email"
            data="Test User"
            onChangeClicked={onChangeClicked}
          />
        )}
      </div>
      <div>
        {showChangeForm.password ? (
          <ChangeDetailForm
            id="password"
            type="password"
            label="New Password"
            autocomplete="new-password"
            onCancelledClicked={onCancelledClicked}
          />
        ) : (
          <DetailDisplay
            name="Password"
            data="Test User"
            onChangeClicked={onChangeClicked}
          />
        )}
      </div>
    </>
  );
};
