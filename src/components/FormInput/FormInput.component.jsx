import React from "react";

//css
import "./FormInput.styles.scss";

const FormInput = ({ handleChange, label, ...otherInputProps }) => {
  return (
    <div className="group">
      <input
        onChange={handleChange}
        className="form-input"
        {...otherInputProps}
      />
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
