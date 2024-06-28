import React from "react";

import "./sportStyle.css";

// Will have content added.

function Club(props) {
  const [sport] = props;

  return (
    <div className="club">
      <section className="sport">
        <img src={footballImage} alt={footballAlt} />
        <h2>{result}</h2>
        <button>{buttonText}</button>
      </section>
    </div>
  );
}

export default Club;
