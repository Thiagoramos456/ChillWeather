import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function Card() {
  const {
    weatherData: {
      location: { name, region, lat, lon, country, localtime, tz_id },
      forecast: { forecastday },
      current: {
        cloud,
        condition: { icon, text },
        feelslike_c,
        humidity,
        temp_c,
        wind_kph,
      },
    },
  } = useContext(AppContext);
  console.log(forecastday)
  return (
    <>
      <h1>Data:</h1>
      {forecastday[0].date}
      <h1>{name}</h1>
      <img src={icon} alt={text} />
      <p>{text}</p>
      <h1>{temp_c}</h1>
      <h2>Velocidade do ar</h2>
      <p>{`${wind_kph} km/s`}</p>
      <h4>10 kms</h4>
      <h4>{localtime}</h4>
      <h2>Sensação termica</h2>
      <p>{feelslike_c}</p>
      <h2>Humidade</h2>
      <p>{humidity}</p>
      <div>
        <h1>Nascer do Sol</h1>
        <p>{forecastday[0].astro.sunrise}</p>
        <h1>Por do Sol</h1>
        <p>{forecastday[0].astro.sunset}</p>
        <h1>Horarios:</h1>
        {forecastday[0].hour.map((hour) => (
        <div>
            <span>
            {hour.time}
            </span>
            <img src={hour.condition.icon} alt={hour.condition.code} />
            <span>
            {hour.condition.text}
            </span>
        </div>))}
      </div>
    </>
  );
}
