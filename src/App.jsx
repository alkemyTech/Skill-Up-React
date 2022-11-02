import { Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import Balance from './pages/Balance';
import CargaSaldo from './pages/CargaSaldo';
import EnvioDinero from './pages/EnvioDinero';
import Gastos from './pages/Gastos';
import Home from './pages/Home';
import Login from './pages/Login';
import Movimiento from './pages/Movimiento';
import NotFound from './pages/NotFound';

function App() {

  return (
    <div className="App">
      <Routes>
        <Switch>
          <Route exact path='/' render={() => <Login/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/carga-saldo" element={<CargaSaldo />} />
          <Route path="/gastos" element={<Gastos />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/movimiento" element={<Movimiento />} />
          <Route path="/envio-de-dinero" element={<EnvioDinero />} />
          <Route path="*" component={<NotFound/>}/>
        </Switch>
      </Routes>
    </div>
  );
}

export default App;
