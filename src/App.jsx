import { searchAPI, KEY } from "./API";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState('')
  console.log(searchAPI(KEY, search));
  return (
    <div>
      <h1>Chill Weather</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(input);
        }}
      >
        <input 
        value={input}
        onChange={({target:{value}}) => setInput(value)}
        type="text" />
        <button type="submit">enter</button>
      </form>
    </div>
  );
}

export default App;
