import windIcon from '../images/wind.svg';
import waterDropIcon from '../images/water-droplet.svg';
import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function Card({ getCardWidth, cardPosition, day, current }) {
  useEffect(() => {
    getCardWidth();
  }, []);

  // weatherData: {
  //   location: { name, region, lat, lon, country, localtime, tz_id },
  //   forecast: { forecastday },
  //   current: {
  //     cloud,
  //     condition: { icon, text },
  //     feelslike_c,
  //     humidity,
  //     temp_c,
  //     wind_kph,
  //   },

  return (
    <div className={`card ${current || ''}`} style={{ left: cardPosition }}>
      {day.date || day.current.last_updated}
      {day.day.condition.text || day.location.country}
    </div>
    // <div
    //   style={{ left: cardPosition }}
    //   className="flex flex-col shadow-2xl items-center py-6 w-5/6 mx-auto rounded-3xl"
    // >
    //   <h1 className="text-lg">{name}</h1>
    //   <h4>{forecastday[0].date}</h4>
    //   <img className="w-32" src={icon} alt={text} />
    //   <p className="text-sky-800 mt-4 mb-2 text-2xl">{text}</p>
    //   <h1 className="text-3xl">{temp_c}°</h1>
    //   <div className="flex justify-between mt-4">
    //     <div className="mx-2 flex align-bottom">
    //       <img className="w-8" src={waterDropIcon}></img>
    //       <span className="mx-3">{wind_kph}</span>
    //     </div>
    //     <div className="mx-2 flex">
    //       <img className="w-10" src={windIcon}></img>
    //       <span className="mx-3">{humidity}</span>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Card;

// export default function Card() {
//   return (
//     <>
//       <h1>Data:</h1>
//       {forecastday[0].date}
//       <h1>{name}</h1>
//       <img src={icon} alt={text} />
//       <p>{text}</p>
//       <h1>{temp_c}</h1>
//       <h2>Velocidade do ar</h2>
//       <p>{`${wind_kph} km/s`}</p>
//       <h4>10 kms</h4>
//       <h4>{localtime}</h4>
//       <h2>Sensação termica</h2>
//       <p>{feelslike_c}</p>
//       <h2>Humidade</h2>
//       <p>{humidity}</p>
//       <div>
//         <h1>Nascer do Sol</h1>
//         <p>{forecastday[0].astro.sunrise}</p>
//         <h1>Por do Sol</h1>
//         <p>{forecastday[0].astro.sunset}</p>
//         <h1>Horarios:</h1>
//         {forecastday[0].hour.map((hour) => (
//         <div>
//             <span>
//             {hour.time}
//             </span>
//             <img src={hour.condition.icon} alt={hour.condition.code} />
//             <span>
//             {hour.condition.text}
//             </span>
//         </div>))}
//       </div>
//     </>
//   );
// }

// if (Index = 0) return current
// else return day[index]
