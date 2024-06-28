import React, { useEffect, useRef, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import Clock from "./clock";
import { Link } from "react-router-dom";
import {
    externalLinks,
    presentation,
    copyright,
    contactInfo,
} from "./hfsData.jsx";
import "./hfsStyle.css";

// Containing additional content: presentation, copyright, company name, contact info, and links to external sources.
// Mainly for SEO purposes.
function Footer() {
    // The useInView hook returns an object with the following properties:
    // ref: this object is applied to the element that is to be observed.
    // inView: a boolean value that indicates whether the element is visible or not (entering and exiting the viewport). Allows for scroll position triggering.
    // When the element that has the ref object as ref property value is visible, the inView property value is true.
    // The entry object contain info about the element that is visible (the intersection info).
    const { ref, inView, entry } = useInView({
        threshold: 0.1, // Trigger when x% of the element is visible.
        triggerOnce: false, // Only trigger once until the element enters the viewport again?
    });
    
    // Initializing audioRef as useRef without a parameter to manage the audio element.
    // Using a ref object to store the audio object.
    const audioRef = useRef(new Audio());
    const audioSources = {
        popUp: "src/hfsFolder/hsfAudio/popUpSFX.mp3",
    };

    // Function to play audio
    function playAudio(newAudioSource) {
        // Checking if the current audioRef doesn not have the same value as the already passed value (if the passed file path is the same as the current file path). If that is true, assign the new value to the audioRef.
        audioRef.current.src !== newAudioSource &&
            (audioRef.current.src = newAudioSource);
        audioRef?.current?.play?.();
    }

    // Using an intermediate function instead of defining an inline function (arrow function) within the useEffect hook.
    function handleAudioEffect() {
        if (inView) {
            // Passing one of the audio sources to the audio object.
            playAudio(audioSources.popUp);
            console.log("Element is in view. ");
        } else {
            console.log("Element is not in view. ");
        }
    }


    // useEffect performs side-effects (operation outside of the function scope).
    // Its parameters are the callback function and its dependency.
    // The callback is invoked when its dependency changes (not on componentDidMount and componentDidUpdate).
    useEffect(handleAudioEffect, [inView]);

    // Function to render a series of external links.
    // The key attribute determines the uniqueness of each element as an identifier.
    // Accessing the keys of each object (element) directly without extraction.
    function renderLinks() {
        return externalLinks.map((link, index) => (
            <Link to={link.url} key={index}>
                {link.site}
            </Link>
        ));
    }

    function renderContactInfo() {
        return contactInfo.map((info, index) => (
            <div key={index}>
                <p>{info.text}</p>
                <img src={info.icon} alt={info.alt}></img>
            </div>
        ));
    }

    function renderPresentation() {
        return presentation.map((text, index) => (
            <div key={index}>
                <dt>{text.dt}</dt>
                <dd>{text.dd}</dd>
            </div>
        ));
    }

    // Achieving a fade-in effect using CSS rules inline by setting property values of the style attribute.
    // Fixed transition property value and sets the opacity property to 0 if inView is false.
    const inViewAnimation = {
        transition: "opacity 1s ease-in-out",
        opacity: inView ? 1 : 0,
    };

    return (
        <>
            <footer>
                <hr />
                {/* Using the ref object (obtained from useInView rather than useRef) as value of the ref attribute. The ref attribute is embedded into the element that is to have its visibility monitored. */}
                <div ref={ref} style={inViewAnimation}>
                    <div className="links-contact">
                        <div className="external-links">{renderLinks()}</div>
                        <div className="contact-info">
                            <address>{renderContactInfo()}</address>
                        </div>
                    </div>
                    <div className="presentation">{renderPresentation()}</div>
                    <div className="copyright">{copyright}</div>
                    {/* Wrap Clock component with Suspense for lazy loading (waiting for async dependencies to load) as fallback UI. */}
                    <Suspense fallback={<div>Loading...</div>}>
                        <div className="clock-container">
                            <Clock />
                        </div>
                    </Suspense>
                </div>
                <div>
                    {/* Preserves whitespace. */}
                    <pre>
                        <code>
                            const &lt;var&gt;para&lt;/var&gt; =
                            document.querySelector('p');
                        </code>
                    </pre>
                </div>
            </footer>
        </>
    );
}

export default Footer;
