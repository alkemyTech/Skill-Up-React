import Movimientos from '../components/Movimientos'
import logo from '../images/alkemy_logo.svg'

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