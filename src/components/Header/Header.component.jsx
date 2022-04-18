import React from "react";

import "./Header.styles.scss";

const showCredentials = (e) => {
  const credentialsDiv = document.querySelector("#credentialsDiv");
  const infoDiv = document.querySelector("#infoDiv");
  infoDiv.style.display = "none";
  credentialsDiv.style.display = "block";
};
const showInfoDiv = () => {
  const credentialsDiv = document.querySelector("#credentialsDiv");
  const infoDiv = document.querySelector("#infoDiv");
  credentialsDiv.style.display = "none";
  infoDiv.style.display = "block";
};

const Header = () => (
  <div className="header">
    <h1>Dashboard</h1>
    <ul>
      <li onClick={showCredentials}>Edit Credentials</li>
      <li onClick={showInfoDiv}>Edit Personal Info</li>
      <li>Signout</li>
    </ul>
  </div>
);

export default Header;
