import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TableTransaction } from '../components/TableTransaction';
import { PaginationControl } from '../components/PaginationControl';
import { useTransactions } from '../hooks/useTransactions';
import { Title } from '../components/Title';
import icons from "../assets/icons";

export const Movimientos = () => {
  const [page, setPage] = useState(1);
  const { getTransactions } = useTransactions();

  useEffect(() => {
    getTransactions(page);
  }, [page]);

  const { transactions: operations, nextPage } = useSelector((state) => state.transactions);

  return (
    <>
      <div className="container-fluid d-flex justify-content-center flex-column animate__animated animate__fadeIn">
        <div className="text-center m-3">
          <Title size={'h1'}>Movimientos</Title>
        </div>
      </div>
      {operations && operations.length !== 0
        ? <>
          <TableTransaction operations={operations} />
          <PaginationControl page={page} setPage={setPage} nextPage={nextPage} />
        </>
        : <div className="d-flex row col-12 flex-wrap justify-content-around ">
        <div className="d-flex px-5 bg-white flex-column align-items-center  my-4 col-8 col-md-3 py-3 rounded-2 border border-secondary border-opacity-25 justify-content-center" >
        <img className="img-fluid" src={icons.nodata} />
          <h3>No hay movimientos</h3>
        </div>
      </div>
      }
    </>
  );
};
