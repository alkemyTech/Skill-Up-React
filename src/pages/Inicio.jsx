import React from 'react';
import { Title } from '../components/Title';
import foto from '../assets/images/imag1.png';
import 'animate.css';

export const Inicio = () => {
  return (
    <>
    <div className="container-fluid d-flex justify-content-center flex-column animate__animated animate__fadeIn ">
      <div className='covert'>
      <div className="text-center m-3">
        <div className='landiv'>
          <div className='landiv2'>
        <Title size={'h1'}>Ya sos parte de AlkyBank!</Title>
          <h4>Vas a poder acceder a un monton de experiencias y descuentos</h4>
          </div>
          <div>
        <img className="landing" src={foto} />
          </div>
        </div>
      </div>
    </div>
        <div className='landiv3'>
          <div className='cardLand'> <i className="fa-solid fa-sack-dollar fa-2xl"> </i><h4>Gratis de por vida</h4> <p>Somos transparentes, no hay letra chica.</p></div>
          <div className='cardLand'> <i className="fa-regular fa-credit-card fa-2xl"> </i><h4>Tenela en cualquier parte</h4> <p>Somos transparentes, no hay letra chica.</p></div>
          <div className='cardLand'> <i className="fa-solid fa-building-columns fa-2xl"> </i><h4>El respaldo de Alkemy</h4><p>Somos transparentes, no hay letra chica.</p> </div>
        </div>
      </div>
        </>
  );
};
