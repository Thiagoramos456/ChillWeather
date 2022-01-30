import React, { useContext } from 'react';
import Card from './Card';
import AppContext from '../context/AppContext';

function Carousel() {
  const { setCardWidth, cardWidth, weatherData, isFetching } =
    useContext(AppContext);


  const getCardWidth = () => {
    const card = document.querySelector('.card');
    const cardWithValue = card.getBoundingClientRect().width;
    setCardWidth(cardWithValue);
  };

  const carousel = () => {
    return weatherData.forecast.forecastday.map((day, i) => {
      console.log(cardWidth, 'so eu');
      let cardPosition = cardWidth * i + 'px';
      if (i === 0) {
        return (
          <Card
            getCardWidth={getCardWidth}
            cardPosition={cardPosition}
            day={day}
            current={'currentCard'}
          />
        );
      }
      return (
        <Card
          getCardWidth={getCardWidth}
          cardPosition={cardPosition}
          day={day}
        />
      );
    });
  };

  const getLeftWeatherCard = () => {
    const track = document.querySelector('.track');
    const currentCard = document.querySelector('.currentCard');
    const previousCard = currentCard.previousElementSibling;
    const amoutToMove = previousCard.style.left;
    currentCard.classList.remove('currentCard');
    previousCard.classList.add('currentCard');
    track.style.transform = `translate(-${amoutToMove})`;
  };

  const getRightWeatherCard = () => {
    const track = document.querySelector('.track');
    const currentCard = document.querySelector('.currentCard');
    const nextCard = currentCard.nextElementSibling;
    const amoutToMove = nextCard.style.left;
    currentCard.classList.remove('currentCard');
    nextCard.classList.add('currentCard');
    track.style.transform = `translate(-${amoutToMove})`;
  };

  return (
    <section className="carousel">
      <button onClick={() => getLeftWeatherCard()}>
        <i className="fas fa-chevron-left arrow arrow-left" />
      </button>
      <section className="track w-full flex">
        {console.log(Object.keys(weatherData) > 0)}
        {Object.keys(weatherData).length > 0 && carousel()}
      </section>
      <button onClick={() => getRightWeatherCard()}>
        <i className="fas fa-chevron-right arrow arrow-right" />
      </button>
    </section>
  );
}

export default Carousel;
