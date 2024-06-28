import React, { useState, Suspense } from "react";
import { homeData } from "./homeData";
import "./homeStyle.css";

function Home() {
  const [showMore, setShowMore] = useState(false);

  const sportsImage = "src/imageFolder/sports.jpeg";

  // This event handler function calls the setter function.
  // The state setter function accepts one parameter, which is an arrow callback function.
  // The arrow callback function also accepts a parameter, which is the current state.
  // The currentState is returned reversed through inversion/negation so the value is returned negated.
  function toggleReadMore() {
    setShowMore((prevShowMore) => !prevShowMore);
  }

  // The function doesn't hold additional logic in its function body but directly returns the result of the map method. 
  // Mapping over each array object to conditionally render paragraphs. 
  // Only rendering the objects that meet the conditions of the textClass string value and the showMore flag.
  // Flag: a boolean used to indicate the presence/absence of a condition, used to control the flow of logic. 
  function renderParagraphs(showMore) {
    return homeData.map((element, index) => {
      const { textClass, text } = element;
      const shouldRender =
        textClass === "primary-text" ||
        (textClass === "secondary-text" && showMore);
      return (
        <div key={index}>
          {shouldRender && <p className={textClass}>{text}</p>}
        </div>
      );
    });
  }

  return (
    <>
      <div className="home">
        <h1>Join the team!</h1>
        <img src={sportsImage} alt="sport image" />
        {/* <p>
          We say <abbr title="As Soon As Possible"></abbr>ASAP
        </p> */}
        <h2>Company</h2>
        <div className="text">
          <Suspense fallback={<div>Loading...</div>}>
            {renderParagraphs(showMore)}
          </Suspense>
        </div>
        <button onClick={toggleReadMore}>
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </>
  );
}

export default Home;
