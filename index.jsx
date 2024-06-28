import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Rendering HTML through JS into the DOM using React.
// The root is where the React application gets rendered onto.
// Storing the HTML element that has the ID "root".
const rootElement = document.getElementById("root");
// Creating a root instance and rendering the React application into the virtual DOM at the position of that element as the entry point for the app.
// Choosing createRoot(document.getElementById("root").render(<App />) over ReactDOM.render(<App/> and document.getElementById("root") ).
createRoot(rootElement).render(
  // Strict mode is a component that holds the rendered component. 
  // For catching potential issues and throwing a warning instead of an error.
  // The rendered output.
  <StrictMode>
    <App />
  </StrictMode>,
);
