import { searchAPI, KEY } from "./API";
import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "./context/AppContext";
import Card from "./components/Card";
import LanguageSelect from "./components/LanguageSelect";

function App() {
  const [input, setInput] = useState("");
  const { weatherData, setWeatherData, language } = useContext(AppContext);
  // useEffect(() => {
  //   searchAPI(KEY, 'London').then(r => setWeatherData(r))
  // }, []);
  return (
    <div>
      <h1>Chill Weather</h1>
      <LanguageSelect />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchAPI(KEY, input, language).then((r) => setWeatherData(r));
        }}
      >
        <input
          value={input}
          onChange={({ target: { value } }) => setInput(value)}
          type="text"
        />
        <button type="submit">enter</button>
      </form>
      {weatherData && <Card />}
    </div>
  );
}

export default App;
