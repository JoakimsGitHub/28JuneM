import React, { useContext, useState } from "react";
import "./joinStyle.css";
import Modal from "../modalFolder/modal";
import { modalText } from "../modalFolder/modalData";
import { ClientContext } from "../context/genericContext.jsx";
import { joinInputFields } from "../inputFieldFolder/inputFieldData.jsx";
import InputField from "../inputFieldFolder/inputField";
import Payment from "../paymentFolder/payment.jsx";

function Join() {
  const { clientDetails, setClientDetails } = useContext(ClientContext);
  const [modal, setModal] = useState(false);
  const [isCheckBoxMarked, setIsCheckBoxMarked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to handle changes in input fields.
  // The name attribute value of the target, set by the inputFieldData, must match that of the context useState object property.
  function handleFieldChange(event) {
    const { name, value } = event.target;
    console.log(event.timeStamp); // Logging the timestamp of the event
    setClientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  // Function to handle checkbox change.
  // Updates the state of isCheckBoxMarked based on the checkbox's checked status.
  function handleCheckboxChange(event) {
    setIsCheckBoxMarked(event.target.checked);
  }

  // Function to handle form submission.
  // The ternary operator constructs the message variable based on the conditions.
  function handleSubmit(event) {
    event.preventDefault();
    const alertMessage = constructAlertMessage();
    // Combining truthy checking and nullish checking into the same expression.
    // The nullish checking provides a fallback/handling scenario for handling the case where the condition is not met.
    // Execute displayAlertMessage(message) only if message is truthy
    alertMessage && displayAlertMessage(alertMessage);

    // If message is null or undefined. For debugging purposes.
    alertMessage ?? console.log("Client successfully joined. ");

    // If the checkbox is not marked, play the animation
    isCheckBoxMarked ? null : playAnimation();
  }

  // Inline style animation: applying CSS rules by embedding an object into the style attribute containing attribute property values.
  // Instead of class-based animation where a string value is applied to the className attribute.
  // Animating through applying property values to the style attribute rather than a string value to the className attribute.
  function playAnimation() {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  }

  const buttonStyle = isAnimating
    ? {
        animation: "vibrate 0.5s linear",
      }
    : {};

  // Function to check if all input fields are filled.
     // Returning an array of keys of the object.
    // Each key is a string that has a value of an object. 
  // Each object key-value pair is an attribute and attribute value.
    // Each key is an index to access the object its associated with.
    // Each key is iterated over by the every method that returns true if all elements in the array pass the test implemented by the provided function.
  // The test function: each key is used as index to retrieve the subobject key. The key must be not null, undefined or an empty string after trimming for any leading or trailing whitespace.
  function checkAllFieldsFilled() {
    return Object.keys(joinInputFields).every(
      (key) => clientDetails[key] && clientDetails[key].trim() !== "",
    );
  }

  // Function to check age and return currentAge and isOfAge.
  function checkAge() {
    if (!clientDetails.dob) {
      return { remainingTime: null, isOfAge: false };
    }

    const dateOfBirth = new Date(clientDetails.dob);
    const today = new Date();

    // Calculate legal age date (when the user turns 18)
    const legalAgeDate = new Date(
      dateOfBirth.getFullYear() + 18,
      dateOfBirth.getMonth(),
      dateOfBirth.getDate(),
    );

    // Check if the current date is after legalAgeDate
    const isOfAge = today >= legalAgeDate;

    // Calculate remaining time until legal age (if under 18)
    let remainingTime = null;
    if (!isOfAge) {
      const diffMilliseconds = legalAgeDate - today;
      const diffDate = new Date(diffMilliseconds);

      remainingTime = {
        years: diffDate.getUTCFullYear() - 1970,
        months: diffDate.getUTCMonth(),
        days: diffDate.getUTCDate() - 1, // Subtract 1 to account for the initial day
      };
    }

    return { remainingTime, isOfAge };
  }

  function constructAlertMessage() {
    const areAllFieldsFilled = checkAllFieldsFilled();
    const { remainingTime, isOfAge } = checkAge();

    let alertMessage = !areAllFieldsFilled
      ? "Please complete filling in your details."
      : !isCheckBoxMarked
        ? "Please agree to the terms and conditions."
        : !isOfAge && remainingTime
          ? `You must be 18 years of age to join. Remaining time: ${remainingTime.years} years, ${remainingTime.months} months and ${remainingTime.days} days.`
          : null;
    return alertMessage;
  }

  // Alert: displays a dialog box with a message and an OK button.
  // It's used to show informational messages.
  function displayAlertMessage(message) {
    alert(message); // Displaying an alert dialog with the provided message
  }

  // Function to toggle modal visibility.
  function showModal() {
    setModal((prevModal) => !prevModal); // Toggling the modal state
  }

  // Text constants for the form and checkboxes.
  const fillInRequest = "Please fill in your details";
  const displayedName =
    clientDetails && clientDetails.firstname
      ? clientDetails.firstname.charAt(0).toUpperCase().trim() +
        clientDetails.firstname.slice(1).trim()
      : "";
  const agreeText = "I agree to the ";
  const termsAndConditionsText = "terms and conditions";

  return (
    <div>
      <div className="headingContainer">
        <h1 className="headingText">Join Now</h1>
      </div>
      <form className="form1" onSubmit={handleSubmit}>
        <h2>
          {fillInRequest}
          {displayedName && `, ${displayedName}`}
        </h2>
        <InputField
          joinInputFields={joinInputFields}
          handleFieldChange={handleFieldChange}
        />
        <div>
          <Payment />
        </div>
        <div className="checkbox">
          <input
            id="input2"
            type="checkbox"
            checked={isCheckBoxMarked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="input2">{agreeText}</label>
          <div className="termsContainer" onClick={showModal}>
            <p id="termsAndConditions">{termsAndConditionsText}</p>
          </div>
        </div>
        {/* The showModal function is passed as event handler to the onClick event listener. */}
        {modal && <Modal modalText={modalText} showModal={showModal} />}
        {/* Dynamic inline style for button based on animation state */}
        <button className="button-class" type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Join;
