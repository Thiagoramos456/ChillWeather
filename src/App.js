import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from './context/AppContext';
import Card from './components/Card';
import LanguageSelect from './components/LanguageSelect';
import LocationInput from './components/LocationInput';
import WeatherHourCards from './components/WeatherHourCards';
import { searchAPI, KEY } from './API';

function App() {
  const { weatherData, setWeatherData, city, language } = useContext(AppContext);
  useEffect(() => {
    searchAPI(KEY, city, language).then(r => setWeatherData(r))
  }, [])
  return (
    <div className='flex flex-col items-center'>
      <LocationInput />
      <LanguageSelect />
      <div>
      {weatherData && <Card />}
      {weatherData && <WeatherHourCards />}
      </div>
    </div>
  );
}

export default App;
