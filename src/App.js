import { searchAPI, KEY } from "./API";
import "./App.css";
import React, { useContext, useState } from "react";
import AppContext from "./context/AppContext";
import Card from "./components/Card";
import LocationInput from './components/LocationInput';

function App() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const { weatherData, setWeatherData } = useContext(AppContext);
  console.log(weatherData);
  return (
    <div className="flex flex-col items-center">
      <h1>Chill Weather</h1>
      <LocationInput />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchAPI(KEY, input).then((r) => setWeatherData(r));
        }}
      >
        {/* <input
          value={input}
          onChange={({ target: { value } }) => setInput(value)}
          type="text"
        /> */}
      </form>
      <Card />
    </div>
  );
}

export default App;
