import React from "react";
import WeatherCard from "./WeatherCard";
import Clock from "./Clock";
import TimerCard from "./TimerCard";
const Main = () => {
    return(
        <div>Main
            <WeatherCard/>
            <Clock></Clock>
            <TimerCard/>
        </div>

    );
};
export default Main