export const KEY = "058958e15fc14b248a2202419222901";

export function searchAPI(key, city, language) {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=6&aqi=no&alerts=no&lang=${language}`
  ).then((r) => r.json());
}



