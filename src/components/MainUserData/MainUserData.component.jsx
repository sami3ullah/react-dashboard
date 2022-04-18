import React from "react";

import "./MainUserData.styles.scss";
import FormInput from "../FormInput/FormInput.component";

class MainUserData extends React.Component {
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
    const { email, password } = this.state;
    try {
      //   store this info in the local storage
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
      <div className="main-user-data">
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
            value={this.state.password}
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            required
          />

          {/* submit */}
          <div className="submit-button">
            <button type="submit" onClick={this.handleSubmit}>
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default MainUserData;
