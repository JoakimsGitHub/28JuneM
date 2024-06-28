import React from "react";
import "./sportStyle.css";

function SportCard(props) {
  const { isApplicable, isAvailable, sport, image } = props;

  const applicableID = isApplicable ? "applicable" : "unapplicable";
  const availableID = isAvailable ? "available" : "unavailable";
  const applicableText = sport + " is not applicable. ";
  const availableText = isAvailable ? "Support now!" : "Coming soon.";
  const sportText = isApplicable ? availableText : applicableText;
  const photo = isApplicable ? image : "src/imageFolder/stop.jpg";
  const alt = isApplicable ? `Image of ${sport}.` : "Image of a stop sign.";

  return (
    <>
      <div className="sportCard">
        <div id={applicableID}>
          <div id={availableID}>
            <section className="sport">
              <img src={photo} alt={alt} />
              <h2>{sport.charAt(0).toUpperCase() + sport.slice(1)}</h2>
              <p>{sportText}</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default SportCard;
