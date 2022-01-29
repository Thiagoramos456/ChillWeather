export const KEY = '058958e15fc14b248a2202419222901' 

export function fetchAPI(key){
    return fetch(`https://api.weatherapi.com/v1/current.json?key=${KEY}&q=London&aqi=no`).then(r => r.json())
}

export function searchAPI(search){
    return fetch()
}
