import React, { useContext } from "react";
import { scoreTableData, scoreTableHeaders } from "./scoreTableData";
import { ClientContext } from "../../context/genericContext.jsx";
import "../sportStyle.css";

// Merged the deprecated ScoreData component into this component.
function ScoreTable() {
  const { currentSport } = useContext(ClientContext);
  // Access the appropriate score data based on the sport.
  const scoreTable = scoreTableData[currentSport];
  // Ensure scoreData is an array using optional chaining (for safely accessing nested properties by checking its validity) and ternary operator.
  const scoreData = Array.isArray(scoreTable?.table) ? scoreTable.table : [];

  function renderHeaders() {
    return scoreTableHeaders.map((header, index) => (
      <th key={index}>{header}</th>
    ));
  }

  // scoreData is one of the keys of scoreTableData, as per the currentSport as bracket notation. 
  // The innerEntries is the key in question.
  // The outerEntries are the key-vaule pairs of the score table.
  function renderScore() {
    return scoreData.map((teamScore, index) => {
      const outerEntries = Object.entries(teamScore);
      return (
        <tr key={index}>
          {outerEntries.map(([innerKey, innerValue]) => (
            <td key={innerKey}>{innerValue}</td>
          ))}
        </tr>
      );
    });
  }

  // CSS styling.
  // Combining optional chaining (object is valid), nullish coalescing operating (value is null or undefined) and ternary operating (value is true or false).
  function renderTable() {
    const backgroundImage = {
      backgroundImage: `url(${scoreTable?.backgroundImage ?? ""})`,
      backgroundSize: scoreTable?.backgroundImage ? "cover" : "",
      backgroundPosition: scoreTable?.backgroundImage ? "center" : "",
    };

    return (
      <div style={backgroundImage}>
        <section className={scoreTable.sectionClass}>
          <h2>{scoreTable.heading}</h2>
          <button>{scoreTable.buttonText}</button>
        </section>
        <section>
          <table className="scoreData">
            <caption>Score Table</caption>
            <thead>
              <tr>{renderHeaders()}</tr>
            </thead>
            <tbody>{renderScore()}</tbody>
            <tfoot>
              <tr>
                <td colSpan={scoreTableHeaders.length}>
                  <div>Updated in real-time</div>
                </td>
              </tr>
            </tfoot>
          </table>
        </section>
      </div>
    );
  }

  // Render the score data table or an error message if no matching sport
  return (
    <div className="scoreTable">
      {scoreData.length === 0 ? <div>Invalid sport</div> : renderTable()}
    </div>
  );
}

export default ScoreTable;
