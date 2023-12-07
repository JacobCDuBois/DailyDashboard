import React from "react";
import WeatherCard from "./WeatherCard";
import Clock from "./Clock";
import TimerCard from "./TimerCard";
import JapaneseVocab from "./JapaneseVocab";
const Main = () => {
    return(
        <div className="d-flex ">
            <WeatherCard/>
            <Clock></Clock>
            <TimerCard/>
            <JapaneseVocab/>
        </div>

    );
};
export default Main