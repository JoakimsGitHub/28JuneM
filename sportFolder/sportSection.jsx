import React, { useState, useContext } from "react";
import "./sportStyle.css";
import ScoreTable from "./scoreFolder/scoreTable.jsx";
import { ClientContext } from "../context/genericContext.jsx";

function SportSection() {
  const [currentSection, setSection] = useState(1);
  const tabArray = ["Clubs", "Score"];
  const { currentSport } = useContext(ClientContext);

  function updateSection(tabIndex) {
    setSection(tabIndex);
  }

  function renderTabs() {
    return tabArray.map((tab, index) => (
      <div key={index} className="tabs">
        <button
          className={currentSection === index ? "activeTab" : "inactiveTab"}
          onClick={() => updateSection(index)}
        >
          {tab}
        </button>
      </div>
    ));
  }

  return (
    <div className="sport">
      {renderTabs()}
      <div className="sport">
        <div>
          <h2>{currentSport}</h2>
        </div>
      </div>
      <div className="section">{currentSection === 1 && <ScoreTable />}</div>
    </div>
  );
}

export default SportSection;
