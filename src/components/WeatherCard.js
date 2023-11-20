// Weather.js
import React, { useState, useEffect } from 'react';

const WeatherCard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = "1f8b922d55e5a2bd1172a4f8dc79a194"
    const city = "Pittsburgh"
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
                );
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, [apiKey, city]);
    const GetIcons = () =>{
        if (!weatherData) {
            return <div>Loading weather...</div>;
        }


    }

    console.log(weatherData)
    return (
        <div>
            {GetIcons()}
            {/*<h2>{weatherData.name} Weather</h2>*/}
            {/*<p>{weatherData.weather[0].description}</p>*/}
            {/*<p>Temperature: {weatherData.main.temp}°C</p>*/}
            {/* Add more weather information as needed */}
        </div>
    );
};

export default WeatherCard;
