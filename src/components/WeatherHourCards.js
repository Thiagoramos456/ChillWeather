import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function WeatherHourCard() {
  const {
    weatherData: {
      forecast: { forecastday },
    },
  } = useContext(AppContext);
  console.log(forecastday);
  return (
    <div className="flex mt-8 h-42 justify-between overflow-x-scroll  w-screen text-center">
      { forecastday[0].hour.map((hour) => (
      <div className="w-2/5 h-full mx-6 overflow-y-clip shadow-slate-700">
        <span>{hour.time.split(' ')[1]}</span>
        <img className="object-cover w-full h-14" src={hour.condition.icon} alt={hour.condition.code} />
        <span className="text-gray-700">{hour.condition.text}</span>
      </div>
      )) }
    </div>
  );
}

export default WeatherHourCard;
