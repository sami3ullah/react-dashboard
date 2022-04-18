import React from "react";

//css
import "./FormSelect.styles.scss";

const FormInput = ({ handleChange, label, countries, ...otherInputProps }) => {
  return (
    <div className="group">
      <select
        onChange={handleChange}
        className="form-input"
        {...otherInputProps}
      >
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      {label ? (
        <label
          className={`${
            otherInputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
