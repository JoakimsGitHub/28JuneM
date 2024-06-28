import React, { useState, useContext } from "react"; // Ensure useContext is imported here
import { Link } from "react-router-dom";
import { tabsAndPages } from "./hfsData.jsx";
import "./hfsStyle.css";
import { ClientContext } from "../context/genericContext.jsx";

// The strip that spans consistently across the top of each page (rendered component). Contains logo and navigation bar.
function Header() {
  const [currentTab, setTab] = useState(0);
  const { setSport } = useContext(ClientContext); // Access setSport from context

  function clickButton(tabIndex, page) {
    setTab(tabIndex);
    page === "/sport" ? setSport("") : null;
  }

  // Mapping over the array's elements and indices (objects).
  // Each tab is rendered as a link to the corresponding page.
  function renderTabs() {
    return tabsAndPages.map((tab, tabIndex) => (
      // The website's main navigation element is the Link component that updates the URL slug on click, rendering the matching page component.
      <Link to={tab.page} key={tabIndex}>
        <button
          className={currentTab === tabIndex ? "active-tab" : "inactive-tab"}
          // Using 3 different event handler attributes. There's no need to add an event listener to the element in JSX.
          // The inline event handler function must be an arrow function for deferred execution rather than immediate invocation on component mount.
          // For onClick, the event handler function is passed as a reference to the onClick event handler.
          onClick={() => clickButton(tabIndex, tab.page)}
          // For onMouseOver and onMouseOut, the event object is passed into the event handler function, being an arrow function.
          // The event object is passed as the argument object to the event handler function in order to access the event object's properties.
          onMouseOver={(e) => (e.currentTarget.className = "focused-tab")}
          onMouseOut={(e) => (e.currentTarget.className = "unfocused-tab")}
        >
          {tab.title}
        </button>
      </Link>
    ));
  }

  return (
    <header>
      <div className="header-top">{/* <h1>Website</h1> */}</div>
      <nav>{renderTabs()}</nav>
      <hr />
    </header>
  );
}

export default Header;
