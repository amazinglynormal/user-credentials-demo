import { ProfileSection } from "./ProfileSection";
import { CountrySelect } from "./CountrySelect";
import { AccountDetails } from "./AccountDetails";
import { DeleteAccount } from "./DeleteAccount";

import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <ProfileSection header="What country would you like to visit next?">
        <CountrySelect />
      </ProfileSection>
      <ProfileSection header="Details">
        <AccountDetails />
      </ProfileSection>
      <ProfileSection header="Delete Account">
        <DeleteAccount />
      </ProfileSection>
    </div>
  );
};
