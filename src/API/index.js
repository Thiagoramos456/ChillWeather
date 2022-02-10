const KEY = '058958e15fc14b248a2202419222901';

export default function searchAPI(city, language) {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}&days=6&aqi=no&alerts=no&lang=${language}`
  ).then((r) => r.json());
}
