import searchAPI from './API';
import './App.css';
import React, { useContext, useState, useEffect } from 'react';
import AppContext from './context/AppContext';
import Carousel from './components/Carousel';
import LanguageSelect from './components/LanguageSelect';
import LocationInput from './components/LocationInput';

function App() {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const { weatherData, setWeatherData } = useContext(AppContext);

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);
  return (
    <div>
      <LocationInput />
      <LanguageSelect />
      <Carousel />
    </div>
  );
}

export default App;
