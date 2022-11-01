import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import logo from './images/alkemy_logo.svg'

function App() {

  // Posible forma de hacer fetch //
  const getAuth = async() => {
    try {
      // const response = await fetch("http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login", {
      //   headers: {
      //     Accept: "application/json"
      //   },
      //   method: "POST"
      // })
      // const data = await response.json()
      // return data
    const response = await axios.post(
        'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login',
        // '{\n  "email": "eldiego@maradona.com",\n  "password": "eldiego"\n}',
        {
            'email': 'eldiego@maradona.com',
            'password': 'eldiego'
        },
        {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
    // const data = await response.json()
    return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const getData = async() => {
    try {
      const response = await fetch("https://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users", {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6NTAsInJvbGVJZCI6MX0sImlhdCI6MTY2NzMyNzEwMCwiZXhwIjoxNjY3NDEzNTAwfQ.WWmNBp3OsUSHDnmWPD5S-ShKnibEiSvPIoX8vmYt3Bs",
        }
      })
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAuth().then(console.log)
    // getData().then(console.log)
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
