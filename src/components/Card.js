import { useEffect } from 'react';

function Card({ getCardWidth, cardPosition }) {
  useEffect(() => {
    getCardWidth();
  }, []);
  return (
    <div className="card" style={{ left: cardPosition }}>
      <h1>San Francisco</h1>
      <img src="imagem" alt="imagem" />
      <p>Trunderstorm</p>
      <h1>23 O</h1>
      <h4>10 kms</h4>
      <h4>Tue, 20 Sep</h4>
    </div>
  );
}

export default Card;
