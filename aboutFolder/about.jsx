import React from "react";
import { whoAndWhat } from "./aboutData";
import Video from "../videoFolder/video.jsx";
import Gif from "../videoFolder/gif.jsx";
import "./aboutStyle.css";

function About() {
  // whoAndWhat is an array of nested objects.
  // For each array element, destructure the first key-value pair to get the inner object. This returns an array of the outer keys.

  function renderAbout() {
    return whoAndWhat.map((element, index) => {
      const { heading, paragraph } = element; // Destructuring the key-value pairs of each element.
      return (
        <div key={index}>
          <h2>{heading}</h2>
          <p>{paragraph}</p>
        </div>
      );
    });
  }

  return (
    <>
      <div className="about">
        <h1>Support your team!</h1>
        <div className="whoAndWhat">{renderAbout()}</div>
      </div>
      {/* <div>
        <Video 
          isControls={true} 
          isAutoplay={true} 
          isLoop={true} 
          isMuted={true} 
          poster="poster-image.jpg" 
          preload="auto" 
          src="https://giphy.com/embed/RNlgWpfnRNRGBES99r/video" 
        />
      </div> */}
      <div>
        <Gif
          src="https://giphy.com/embed/RNlgWpfnRNRGBES99r/video"
          width="50%"
          height="50%"
          allowFullscreen={false}
        />
      </div>
    </>
  );
}

export default About;
