export const KEY = "058958e15fc14b248a2202419222901";

export function searchAPI(key, city) {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=1&aqi=no&alerts=no`
  ).then((r) => r.json());
}
