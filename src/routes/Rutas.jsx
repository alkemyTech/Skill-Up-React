import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/login/Login';
import { WithNavBar } from './layout/WithNavBar';
import { Inicio, Balance, CargaSaldo, EnvioDinero, Gastos, Movimientos, Error404 } from '../pages';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Register } from '../pages/register/Register';
import { Title } from '../components/Title';
import '../App.css';

export const Rutas = () => {
  const { status, verifToken, infoUsuario } = useAuth();

  useEffect(() => {
    verifToken();
    infoUsuario();
  }, []);

  if (status === 'validando') {
    return (
      <div className="d-flex flex-column mt-5 pt-5 justify-content-center align-items-center w-100 h-100 col-12">
      <div className="mt-4">

      <Title size={'h1'}>Cargando</Title>
      </div>
      <span className="loader col-12 mt-5 pt-5"></span>
    </div>
    );
  }

  return (

  <BrowserRouter>
    <Routes>
    {
       (status === 'validado')
      ? <Route path='/' element={<WithNavBar/>}>
          <Route index element ={<Inicio/>}/>
          <Route path="Login" element={<Inicio />} />
          <Route path="Balance" element={<Balance/>} />
          <Route path="CargaSaldo" element={<CargaSaldo/>} />
          <Route path="EnvioDinero" element={<EnvioDinero/>} />
          <Route path="Gastos" element={<Gastos/>} />
          <Route path="Movimientos" element={<Movimientos/>} />
          <Route path="/*" element={ < Error404 /> } />
          <Route path="Register" element={<Navigate to="/" />} ></Route>
      </Route>
      : (
            <>
          <Route path="/*" element={<Login />} />
          <Route path="/Register" element={ <Register />} />
          </>
          )
      }
    </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
