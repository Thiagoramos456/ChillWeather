import React, { useState } from 'react';

function LocationInput() {
  const [input, setInput] = useState('');
  return (
    <>
      {/* <div className='flex justify-center items-center'>
        <input
          value={input}
          onChange={({ target: { value } }) => setInput(value)}
          className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-10 w-8/12'
          id='city'
          type='text'
          placeholder='Search place'
        />
        <button className="px-4 py-2 text-white bg-gray-600 border-l" type='submit'>Search</button>
      </div> */}
    </>
  );
}

export default LocationInput;
