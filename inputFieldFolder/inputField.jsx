import React from "react";

function InputField({ joinInputFields, handleFieldChange }) {
  // Adding each key string into an array.
  const inputFieldArray = Object.keys(joinInputFields);

  // Extracting (object deconstructing) each key of each key-value pair of each object (element).
  // Directly accessing the keys of each object (element) directly without extraction.
  // The inputFieldKey is the outer key. Its the index in the key array.
  // The inputField is the current object held by the current key.
  function renderInputFields() {
    return inputFieldArray.map((inputFieldKey) => {
      const inputField = joinInputFields[inputFieldKey];
      return (
        <div key={inputFieldKey}>
          <label htmlFor={inputField.name}>{inputField.label}</label>
          {/* Conditionally adding attributes to the input element when the type attribute is set to date. This will conditionally render both the attributes themselves as well as their values. The spread operator makes it less verbose.  */}
          {/* The ternary operator uses a strict equality check and returns an object of two key-value pairs that has its properties spread to the input element as attributes. */}
          <input
            type={inputField.type}
            name={inputField.name}
            placeholder="Please enter here"
            onChange={handleFieldChange}
            {...(inputField.type === "date"
              ? { min: inputField.min, max: inputField.max }
              : {})}
          />
        </div>
      );
    });
  }

  return <div className="inputFields">{renderInputFields()}</div>;
}

export default InputField;
