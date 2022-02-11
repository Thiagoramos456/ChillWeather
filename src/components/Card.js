import windIcon from '../images/wind.svg';
import waterDropIcon from '../images/water-droplet.svg';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useSwiper, useSwiperSlide } from 'swiper/react';


export default function Card({ place, date, weatherIcon, description, temp_c, humidity, wind }) {
  const swiper = useSwiperSlide();
  console.log(swiper);
  return (
    <div className='flex flex-col shadow-2xl items-center pt-4 mb-2 pb-10 w-5/6 mx-auto rounded-3xl'>
      <h1 className='text-lg'>{place}</h1>
      <h4>{date}</h4>
      <img className='w-32' src={weatherIcon} alt={description} />
      <p className='text-sky-800 mb-2 text-2xl'>{description}</p>
      <h1 className='text-3xl'>{temp_c}°</h1>
      <div className='flex justify-between mt-4'>
        <div className='mx-2 flex align-bottom'>
          <img className='w-8' src={waterDropIcon}></img>
          <span className='mx-3'>{wind}</span>
        </div>
        <div className='mx-2 flex'>
          <img className='w-10' src={windIcon}></img>
          <span className='mx-3'>{humidity}</span>
        </div>
      </div>
    </div>
  );
}

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
