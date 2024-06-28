import React, { useState } from "react";
import { Link } from "react-router-dom";
import { tabsAndPages } from "./hfsData.jsx";
import "./hfsStyle.css";

// The strip that spans consistently across the top of each page (rendered component). Contains logo and navigation bar.
// Adjacent to the main content area.
// Contains peripheral info that is contextual to the main content.
function Sidebar() {
  const text =
    "Steer clear of the goalie of Nations UEFA halftime soccer number 10 midfielder one-two. Pitch World Cup referee center-half one-two midfielder yellow card chip four-four-two. ";

  const [currentTab, setTab] = useState(0);

  function clickButton(tabIndex) {
    setTab(tabIndex);
  }

  // Mapping over the array's elements and indices (objects).
  // Each tab is rendered as a link to the corresponding page.
  function renderTabs() {
    return tabsAndPages.map((tab, tabIndex) => (
      // The website's main navigation element is the link component that updates the URL slug on click, rendering the matching page component.
      <Link to={tab.page} key={tabIndex}>
        <button
          className={currentTab === tabIndex ? "active-tab" : "inactive-tab"}
          onClick={() => clickButton(tabIndex)}
        >
          {tab.title}
        </button>
      </Link>
    ));
  }

  return (
    <header>
      <div className="sidebar">{/* <h1>Website</h1> */}</div>
      <nav>{renderTabs()}</nav>
      <hr />
    </header>
  );
}

export default Sidebar;
