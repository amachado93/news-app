import React from 'react';

const WeatherCard = (props) => {
    
    return(
        <div>
            <h3>Here's the weather in {props.location}</h3>
            <p>Current temperature is {props.weatherData.temp}</p>
            <p>High of {props.weatherData.temp_max}</p>
            <p>Low of {props.weatherData.temp_min}</p>
        </div>
    )
}

export default WeatherCard;