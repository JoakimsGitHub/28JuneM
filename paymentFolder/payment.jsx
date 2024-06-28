import React from "react";
// Object destructuring the named export.
import { paymentMethods } from "./paymentData.jsx";

function Payment({ subscribe, handleSubscription }) {
  // Iterating over the properties of a single object.
  function renderPaymentOptions() {
    // Converting the object to an array of key-value pairs.
    const entries = Object.entries(paymentMethods);
    // Mapping over each key-value pair (as the element) and extracting its key and value.
    return entries.map(([key, value], index) => (
      <option key={index} value={key}>
        {value}
      </option>
    ));
  }
  return (
    <div className="payment">
      <p>Payment: </p>
      <div>
        <select value={subscribe} onChange={handleSubscription}>
          {renderPaymentOptions()}
        </select>
      </div>
    </div>
  );
}

export default Payment;
