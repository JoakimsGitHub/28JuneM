import React, { useContext, useState } from "react";
import { ClientContext } from "../context/genericContext";
import { tabContent } from "./memberData";
import { emojiData } from "../emojiFolder/emojiData";
import Emoji from "../emojiFolder/emoji";
import "./memberStyle.css";

function Member() {
  const { clientDetails } = useContext(ClientContext);
  const { emojiArm } = emojiData;

  // Set initial state for tabs and contents
  const [currentTabKey, setTabKey] = useState("news");
  const [currentContentIndex, setContentIndex] = useState(0);
  const [isCheckBoxMarked, setCheckBoxMarked] = useState(false);

  // Cycling through the content tabs.
  // The contentLength is the number of elements within the array that is the value of the current string key of the tabContent object.
  // If the integer of the nextContentIndex is greater or equal to the contentLength then set the
  function nextContent() {
    const contentLength = tabContent[currentTabKey].content.length;
    let nextContentIndex = currentContentIndex + 1;
    if (nextContentIndex >= contentLength) {
      nextContentIndex = 0;
    }
    setContentIndex(nextContentIndex);
  }

  // Clicking a tab resets the content index
  function handleTabClick(tabName) {
    setTabKey(tabName);
    setContentIndex(0);
  }

  function handleCheckboxChange(event) {
    setCheckBoxMarked(event.target.checked);
  }

  // Each element (tabName) is a key from the tabContent object, holding its own object.
  function renderTabs() {
    // Making an array out of the keys of the tabContent object.
    const allTabs = Object.keys(tabContent);
    return allTabs.map((tabName) => (
      <div
        className={currentTabKey === tabName ? "activeTab" : "inactiveTab"}
        key={tabName}
        onClick={() => handleTabClick(tabName)}
      >
        {tabContent[tabName].tabTitle.charAt(0).toUpperCase() +
          tabContent[tabName].tabTitle.slice(1).toLowerCase()}
      </div>
    ));
  }

  function renderCheckbox() {
    if (currentTabKey === "upcomingEvents") {
      return (
        <div className="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            checked={isCheckBoxMarked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="checkbox">Notify me: </label>
        </div>
      );
    }
    return null;
  }

  // Using a ternary operator. It takes 3 operands: a condition, a true result and a false result.
  const welcomeMessage = clientDetails.firstname
    ? `Welcome, ${clientDetails.firstname}`
    : ``;

  // // Alternatively, use a logical AND operator. It checks if the firstname is truthy (exists and is not null, undefined or 0).
  // const welcomeMessage = clientDetails.firstname && `Welcome, $ {clientDetails.firstname}!`;`

  return (
    <>
      <div className="memberPage">
        <h2>{welcomeMessage}</h2>
      </div>
      <div className="memberContainer">
        <div className="tabs">{renderTabs()}</div>
        <div className="tabContent">
          <h2>{tabContent[currentTabKey].tabHeading}</h2>
          <hr />
          <p>{tabContent[currentTabKey].content[currentContentIndex]}</p>
          <img
            className="contentImage"
            src={tabContent[currentTabKey].images[currentContentIndex]}
            alt="Tab content"
          />
          <Emoji emoji={emojiArm} />
          {renderCheckbox()}
          <button className="nextButton" onClick={nextContent}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Member;
