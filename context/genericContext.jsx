import React, { createContext, useState } from "react";

// The hook allows for state management between components.
// An alternative to props drilling where object parameters are excessively passed down the component tree.
// The object stores the states of the ClientContext component and is imported by the consumer components.
export const ClientContext = createContext();

// The ContextProvider component wraps its children with the provider component in the component tree.
// It uses local state variables created with useState.
export function ContextProvider({ children }) {
  // Initializing local state variables.
  const [clientDetails, setClientDetails] = useState({
    firstname: "",
    surname: "",
    dob: "",
    email: "",
    phone: "",
  });

  const [currentSport, setSport] = useState("");

  return (
    // Accessing the provider property of the ClientContext object, which is a component.
    // So the ContextProvider component, that holds the state variable and updater function, returns another component.
    // The consumer components are nested within the provide component.
    // The ContextProvider is an object with the attached Provider component that has a props object containing the state and updater function.
    // Wrapping the consumer components within the provider component, as property of the context object, that use the provider component's state variable and updater function as props, passed as an object.
    <ClientContext.Provider
      value={{
        clientDetails, // The state variable for client details
        setClientDetails, // The updater function for client details
        currentSport, // The state variable for current sport
        setSport, // The updater function for current sport
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}
