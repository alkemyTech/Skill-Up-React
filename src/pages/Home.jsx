import logo from '../images/alkemy_logo.svg'

function Home() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-black'>
        Alkemy
        </p>
    </header>
  )
}

export default Home