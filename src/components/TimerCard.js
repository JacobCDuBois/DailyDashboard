import React, { useState, useEffect } from 'react';

const TimerCard = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isActive) {
            // Start the timer when isActive is true
            intervalId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        }

        // Cleanup the interval on component unmount or when isActive becomes false
        return () => clearInterval(intervalId);
    }, [isActive]);

    const handleStart = () => {
        // Set isActive to true to start the timer
        setIsActive(true);
    };

    const handleStop = () => {
        // Set isActive to false to stop the timer
        setIsActive(false);
    };

    const handleReset = () => {
        // Reset the timer to 0 seconds
        setSeconds(0);

        // If the timer is currently active, stop it
        if (isActive) {
            setIsActive(false);
        }
    };
    const FormatSeconds = (seconds) =>{
        if(seconds > 60){
            var mins = Math.floor(seconds/60)
            var secs = seconds%60
            return mins + ":" + secs

        }
        else if(seconds/60 >60){
            var mins = Math.floor(seconds/60)
            var hours = Math.floor(mins/60)
            mins = mins%60
            var secs = seconds%60
            return hours+ ":" + mins + ":" + secs

        }
        else{
            return "0:" + seconds
        }
    }

    return (
        <div className="timer_card">
            <h1>{FormatSeconds(seconds)}</h1>
            <div>

                <button onClick={handleStart}>&#9654;</button>
                <button onClick={handleStop}>&#9208;</button>
                <button onClick={handleReset}>&#128257;</button>
            </div>
        </div>
    );
};

export default TimerCard;
