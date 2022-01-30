import searchAPI from './API';
import './App.css';
import React, { useContext, useState, useEffect } from 'react';
import AppContext from './context/AppContext';
import Carousel from './components/Carousel';

function App() {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const { weatherData, setWeatherData } = useContext(AppContext);

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);
  return (
    <div>
      <h1>Chill Weather</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchAPI(input).then((r) => setWeatherData(r));
        }}
      >
        <input
          value={input}
          onChange={({ target: { value } }) => setInput(value)}
          type="text"
        />
        <button type="submit">enter</button>
      </form>
      <Carousel />
    </div>
  );
}

export default App;
