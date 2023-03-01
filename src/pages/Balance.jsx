import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Title } from '../components/Title';
import { TableTransaction } from '../components/TableTransaction';
import { useSelector } from 'react-redux';
import { useTransactions } from '../hooks/useTransactions';
import icons from "../assets/icons";

export const Balance = () => {
  const { pathname } = useLocation();

  const { getTransactions } = useTransactions();
  useEffect(() => {
    getTransactions();
  }, []);

  const operations = useSelector((state) => state.transactions.transactions);
  const { balance, payments, topups } = useSelector((state) => state.user.acquisition);

  return (

    <>
      <div className="container-fluid d-flex justify-content-center flex-column animate__animated animate__fadeIn pb-3">
        <div className="text-center m-3">
          <Title size={'h1'}>Balance</Title>
        </div>
        <div className="d-flex justify-content-evenly">
          <div className="col-lg-2">
            <div className="card">
              <div className="card-body text-center">
                <div className="card-title mt-2 mb-1"></div>
                <span className="fs-2 mb-3 font-weight-bold">Ingresos</span>
                <p className="mb-3 mt-3">$ {topups}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="card">
              <div className="card-body text-center">
                <div className="card-title mt-2 mb-1"></div>
                <span className="fs-2 mb-3 font-weight-bold">Balance</span>
                <p className="mb-3 mt-3">$ {balance}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="card">
              <div className="card-body text-center">
                <div className="card-title mt-2 mb-1"></div>
                <span className="fs-2 mb-3 font-weight-bold">Pagos</span>
                <p className="mb-3 mt-3">$ {payments}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-3 block pb-3">
        <Title size={'h3'}>Ultimos movimientos</Title>
      </div>
      {operations && operations.length !== 0
        ? <TableTransaction operations={operations} page={pathname.toLocaleLowerCase()} />
        : <div className="d-flex row  col-12 flex-wrap justify-content-around ">
        <div className="d-flex bg-white flex-column align-items-center  my-4 col-8 col-md-4 py-3 rounded-2  border border-secondary border-opacity-25 justify-content-center" >
        <img width="200px" height="200px" className="img-fluid" src={icons.nodata} />
          <h3>No hay movimientos</h3>
        </div>
        </div>
      }

    </>
  );
};
