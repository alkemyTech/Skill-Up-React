import Movimientos from '../components/Movimientos'
import logo from "../assets/img/favi.jfif";

function Home() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-black'>
        Alkemy
        </p>
        <Movimientos />
    </header>
  )
}

export default Home