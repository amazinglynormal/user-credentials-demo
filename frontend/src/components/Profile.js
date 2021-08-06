import { ChangeDetailForm } from "./ChangeDetailForm";
import { CountrySelect } from "./CountrySelect";
import { DetailDisplay } from "./DetailDisplay";
import { DeleteAccount } from "./DeleteAccount";

import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <div>
        <h2 className={styles.h2Header}>
          What country would you like to visit next?
        </h2>
        <CountrySelect />
      </div>
      <div>
        <h2 className={styles.h2Header}>Details</h2>
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
      </div>
      <div>
        <h2 className={styles.h2Header}>Delete account</h2>
        <DeleteAccount />
      </div>
    </div>
  );
};
