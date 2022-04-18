import React from "react";

import "./UserCredentialData.styles.scss";
import FormInput from "../FormInput/FormInput.component";

class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password, confirmPassword } = this.state;
      //   converting the above into object to store it in localstorage, so that we can modify individual values easily

      // crendentials error checking
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      let passRegex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      if (!passRegex.test(password)) {
        alert(
          "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
        );
        return;
      }

      const userData = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };

      //   store this info in the local storage
      localStorage.setItem("UserCredential", JSON.stringify(userData));
      //   alert the user that the info has been updated
      alert("Your credentials has been updated");
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div id="credentialsDiv" className="user-credential-data">
        <h2>Change your credentials</h2>
        <form>
          <FormInput
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            type="email"
            name="email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            value={this.state.password}
            type="password"
            name="password"
            label="Password"
            required
          />

          <FormInput
            handleChange={this.handleChange}
            value={this.state.confirmPassword}
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            required
          />

          {/* submit */}
          <div className="submit-button">
            <button class="submit" type="submit" onClick={this.handleSubmit}>
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserData;
