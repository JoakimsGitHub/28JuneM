// Importing functionality from the react library via its object. 
import React, { useState } from "react";

// toLocaleTimeString: method that converts a date object to a string, using locale-specific conventions.
// Takes 2 parameters: locale and options.
// Locales: a string(s) with a BCP 47 language tag. It specifies the locale to use.
// Options: an object with properties to customize the output. These values can be `"numeric", `2-digit`, `narrow`, `short`, `long`, `full`, `day`, `weekday`, `month.`, `year`, `timeZoneName`, `hour`, `minute`, `second`, `hour12`, `dayPeriod`.

function Clock() {
    // Declaring (creating space in memory) and initializing (assigning a value) the variable. 
    const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
        hour12: true,
        timeZone: "Europe/Stockholm",
    };

    // Initialize state without default values
    const [currentDateTime, setCurrentDateTime] = useState({});

    function updateClock() {
        const today = new Date(); 
        setCurrentDateTime({
            currentTime: today.toLocaleTimeString("en-US", timeOptions),
            currentDay: today.toLocaleDateString("en-US", { weekday: "long" }),
        });
    }

    setInterval(updateClock, 1000);

    // Destructure currentDateTime for rendering
    const { currentDay, currentTime } = currentDateTime;

    return (
        // Marks up times and dates in a machine-readable format.
        <div className="clock">
            <time>
                {currentDay} {currentTime}
            </time>
        </div>
    );
}

export default Clock;
