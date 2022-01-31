import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from './context/AppContext';
import Card from './components/Card';
import LanguageSelect from './components/LanguageSelect';

import LocationInput from './components/LocationInput';
import WeatherHourCards from './components/WeatherHourCards';

function App() {
  const { weatherData } = useContext(AppContext);
  return (
    <div className='flex flex-col items-center'>
      <LocationInput />
      {/* <LanguageSelect /> */}
      <div>
      {weatherData && <Card />}
      {weatherData && <WeatherHourCards />}
      </div>
    </div>
  );
}

export default App;
