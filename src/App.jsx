import { useEffect } from 'react';
import './App.css';
import logo from './images/alkemy_logo.svg'

function App() {
  
  // Posible forma de hacer fetch //

  const getData = async() => {
    try {
      const response = await fetch('https://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-black'>
          Alkemy
        </p>
      </header>
    </div>
  );
}

export default App;
