import PropTypes from "prop-types";
import React, { useState } from "react";
import AppContext from "./AppContext";

function Provider({ children }) {
  const [weatherData, setWeatherData] = useState();

  const [language, setLanguage] = useState("");

  const contextValue = React.useMemo(
    () => ({
      weatherData,
      setWeatherData,
      language,
      setLanguage,
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
