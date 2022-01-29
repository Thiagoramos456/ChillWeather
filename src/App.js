import { searchAPI, KEY } from "./API";
import "./App.css";
import React, { useContext, useState } from "react";
import AppContext from "./context/AppContext";

function App() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const { weatherData, setWeatherData } = useContext(AppContext);
  console.log(weatherData);
  return (
    <div>
      <h1>Chill Weather</h1>
      <h2>{}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchAPI(KEY, input).then((r) => setWeatherData(r));
        }}
      >
        <input
          value={input}
          onChange={({ target: { value } }) => setInput(value)}
          type="text"
        />
        <button type="submit">enter</button>
      </form>
    </div>
  );
}

export default App;
