import React, { useContext } from "react";
import SportCard from "../sportFolder/sportCard.jsx";
import SportSection from "../sportFolder/sportSection.jsx";
import { sportCardData } from "../sportFolder/sportCardData";
import { ClientContext } from "../context/genericContext.jsx";
import "./pageStyle.css";

function SportPage() {
  const { currentSport, setSport } = useContext(ClientContext);

  function renderContent() {
    if (currentSport === "") {
      return renderLandingSection();
    } else {
      return renderSportSection();
    }
  }

  function renderLandingSection() {
    return (
      <div className="landing">
        {sportCardData.map((cardData, index) => (
          <div key={index}>
            {/* Implicitly spreading the object property keys as component props keys. */}
            <SportCard key={index} {...cardData} />
            {cardData.isApplicable && cardData.isAvailable ? (
              <button onClick={() => setSport(cardData.sport)}>
                {/* Inserting a non-breaking space into the content.  */}
                Explore&nbsp;
                {cardData.sport.charAt(0).toUpperCase() +
                  cardData.sport.slice(1)}
              </button>
            ) : null}
          </div>
        ))}
      </div>
    );
  }

  function renderSportSection() {
    return (
      <div className="sport">
        <SportSection />
      </div>
    );
  }

  return <div className="sportPage">{renderContent()}</div>;
}

export default SportPage;
