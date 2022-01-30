import React, { useContext, useEffect } from 'react';
import Card from './Card';
import AppContext from '../context/AppContext';

const arr = [1, 2];

function Carousel() {
  const { setCardWidth, cardWidth } = useContext(AppContext);

  console.log('da');
  const getCardWidth = () => {
    const card = document.querySelector('.card');
    const cardWithValue = card.getBoundingClientRect().width;
    setCardWidth(cardWithValue);
  };

  const getLeftWeatherCard = () => {};

  const getRightWeatherCard = () => {};

  useEffect(() => {}, [cardWidth]);
  return (
    <section className="track w-full flex">
      <button onClick={() => getLeftWeatherCard()}>
        <i className="fas fa-chevron-left arrow arrow-left" />
      </button>

      {arr.map((_, i) => {
        let cardPosition = cardWidth * i + 'px';
        return <Card getCardWidth={getCardWidth} cardPosition={cardPosition} />;
      })}

      <button onclick={() => getRigthWeatherCard()}>
        <i className="fas fa-chevron-right arrow arrow-rigth" />
      </button>
    </section>
  );
}

export default Carousel;
