import windIcon from '../images/wind.svg';
import waterDropIcon from '../images/water-droplet.svg';

export default function Card() {
  return (
    <div className='flex flex-col items-center border-4 py-6 w-5/6 mx-auto rounded-3xl'>
      <h1 className='text-2xl'>San Francisco</h1>
      <h4>Tue, 20 Sep</h4>
      <img
        className='w-32'
        src='//cdn.weatherapi.com/weather/64x64/night/296.png'
        alt='Imagem do Clima'
      />
      <p className='text-sky-800 mt-4 mb-2 text-2xl'>Thunderstorm</p>
      <h1 className="text-3xl">23°</h1>
      <div className='flex justify-between mt-4'>
        <div className="mx-2 flex">
          <img className='w-8' src={waterDropIcon}></img>
          <span className='mx-3'>10 kms</span>
        </div>
        <div className="mx-2 flex">
          <img className='w-10' src={windIcon}></img>
          <span className='mx-3'>60%</span>
        </div>
      </div>
    </div>
  );
}
