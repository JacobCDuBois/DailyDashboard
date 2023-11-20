import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Update the clock every second
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures that the effect runs only once (on mount)

    // Format the time as HH:mm:ss
    const formattedTime = currentTime.toLocaleTimeString();

    return (
        <div className="clock_card">
            <p>{formattedTime}</p>
        </div>
    );
};

export default Clock;
