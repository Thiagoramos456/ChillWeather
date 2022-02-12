import React, { useContext, useState } from 'react';
import { searchAPI, KEY } from "../API";
import AppContext from '../context/AppContext';

function LocationInput() {
  const [input, setInput] = useState('');
  const { setWeatherData, language, setCity } = useContext(AppContext);
	
  return (
    <form
        onSubmit={(e) => {
          e.preventDefault();
          searchAPI(KEY, input, language).then((r) => setWeatherData(r));
          setCity(input)
        }}
      >
      <div className='flex justify-center items-center mt-4 mb-6'>
        <input
          value={input}
          onChange={({ target: { value } }) => setInput(value)}
          className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-6/12'
          id='city'
          type='text'
          placeholder='Search place'
        />
        <button className="px-4 py-2 text-white bg-gray-600 border-l" type='submit'>Search</button>
      </div>
    </form>
  );
}

export default LocationInput;
