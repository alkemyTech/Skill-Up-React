import './App.css';
import { Banner } from './components/Banner';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={'./alkemy_logo.svg'} className="App-logo" alt="logo" />
        <p className='text-black'>
          Alkemy Marco grupo 6
          <Banner />
        </p>
      </header>
    </div>
  );
}

export default App;
