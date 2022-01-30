import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import searchAPI from '../API';

function Provider({ children }) {
  const [weatherData, setWeatherData] = useState({});
  const [cardWidth, setCardWidth] = useState(0);
  console.log(cardWidth, weatherData);

  useEffect(() => {
    searchAPI('taubate').then((r) => setWeatherData(r));
  }, [cardWidth]);

  const contextValue = React.useMemo(
    () => ({
      weatherData,
      setWeatherData,
      cardWidth,
      setCardWidth,
    }),
    [weatherData]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
