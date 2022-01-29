export const KEY = "058958e15fc14b248a2202419222901";

export function searchAPI(key, city) {
  return fetch(
    `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`
  ).then((r) => r.json());
}
