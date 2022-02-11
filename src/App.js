import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from './context/AppContext';
import Card from './components/Card';
import LanguageSelect from './components/LanguageSelect';

import LocationInput from './components/LocationInput';
import WeatherHourCards from './components/WeatherHourCards';
import WeatherDayCarousel from './components/WeatherDayCarousel';


function App() {
  const { weatherData } = useContext(AppContext);
  return (
    <div>
      <LocationInput />
      {/* <LanguageSelect /> */}
      <div>
      {weatherData && <WeatherDayCarousel />}
      {weatherData && <WeatherHourCards />}
      </div>
    </div>
  );
}

export default App;
