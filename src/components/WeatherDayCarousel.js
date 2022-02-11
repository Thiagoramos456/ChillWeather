import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from './Card';

import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function WeatherDayCarousel() {
  const { weatherData } = useContext(AppContext);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={5}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {weatherData.forecast.forecastday.map(
        ({
          date,
          day: {
            avgtemp_c,
            condition: { text, icon },
            avghumidity,
            maxwind_kph,
          },
        }) => (
          <SwiperSlide>
            <Card
              date={date}
              place={weatherData.location.name}
              temp_c={avgtemp_c}
              humidity={avghumidity}
              wind={maxwind_kph}
              weatherIcon={icon}
              description={text}
            />
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}

export default WeatherDayCarousel;
