import "./App.css";
import React, { useContext, useState } from "react";
import AppContext from "./context/AppContext";
import Card from "./components/Card";
import LocationInput from './components/LocationInput';

function App() {
  const { weatherData } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center">
        <LocationInput />
      {weatherData && <Card />}
    </div>
  );
}

export default App;
