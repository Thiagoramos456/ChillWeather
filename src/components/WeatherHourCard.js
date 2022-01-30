import React from 'react';

function WeatherHourCard() {
  const {weatherData} 
  return (
    {forecastday[0].hour.map((hour) => (
      <div>
          <span>
          {hour.time}
          </span>
          <img src={hour.condition.icon} alt={hour.condition.code} />
          <span>
          {hour.condition.text}
          </span>
      </div>))}
  );
}

export default WeatherHourCard;
