import { fetchAPI, KEY } from './API';
import './App.css';

function App() {
  fetchAPI(KEY).then(r => console.log(r))
  return (
    <div>
      <h1>Chill Weather</h1>
    </div>
  );
}

export default App;
