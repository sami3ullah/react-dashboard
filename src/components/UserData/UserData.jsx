import React from "react";
import "./UserData.styles.scss";
import UserCredentialData from "../UserCredentialData/UserCredentialData.component";
import UserInfoData from "../UserInfoData/UserInfoData.component";

function UserData() {
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <UserCredentialData />
      <UserInfoData />
    </div>
  );
}

export default UserData;
