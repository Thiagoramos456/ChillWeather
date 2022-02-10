import searchAPI from './API';
import './App.css';
import React, { useContext, useState, useEffect } from 'react';
import AppContext from './context/AppContext';
import Carousel from './components/Carousel';
import LanguageSelect from './components/LanguageSelect';
import LocationInput from './components/LocationInput';

function App() {
<<<<<<< HEAD
  const [input, setInput] = useState("");
  const { weatherData, setWeatherData, language, setCity, city } = useContext(AppContext);
  // useEffect(() => {
  //   searchAPI(KEY, city, language).then(r => setWeatherData(r))
  // }, []);
=======
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const { weatherData, setWeatherData } = useContext(AppContext);

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);
>>>>>>> 3fd24b5a650ca318414047da82b3e02681954661
  return (
    <div>
      <LocationInput />
      <LanguageSelect />
      <Carousel />
    </div>
  );
}

export default App;
