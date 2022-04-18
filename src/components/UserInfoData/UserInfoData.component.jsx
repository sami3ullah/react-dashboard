import React from "react";

import "./UserInfoData.styles.scss";
import FormInput from "../FormInput/FormInput.component";
import FormSelect from "../FormSelect/FormSelect.component";

class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      country: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, address, country } = this.state;
    //   converting the above into object to store it in localstorage, so that we can modify individual values easily
    const userData = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      country: country,
    };
    try {
      //   store this info in the local storage
      localStorage.setItem("UserInfo", JSON.stringify(userData));
      //   alert the user that the info has been updated
      alert("Your information has been updated");
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
      <div className="user-credential-data">
        <h2>Change your general information</h2>
        <form>
          <FormInput
            value={this.state.firstName}
            handleChange={this.handleChange}
            type="text"
            name="firstName"
            label="First Name"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            value={this.state.lastName}
            type="text"
            name="lastName"
            label="Last Name"
            required
          />

          <FormInput
            handleChange={this.handleChange}
            value={this.state.address}
            type="text"
            name="address"
            label="Address"
            required
          />

          <FormSelect
            handleChange={this.handleChange}
            value={this.state.country}
            type="select"
            name="country"
            label="Country"
            countries={["", "India", "Germany", "Austria", "Switzerland"]}
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

export default UserData;
