import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Transaction } from './Transaction';

const options = [
  {
    label: "PAYMENT",
    value: "payment"
  },
  {
    label: "TOPUP",
    value: "topup"
  }
];

export const TableTransaction = ({ operations, page }) => {
  const [typeFilter, setTypeFilter] = useState('payment/topup');

  return (
    <section className="intro animate__animated animate__fadeIn pb-3">
      <div className="gradient-custom-1 h-100">
        <div className={`mask d-flex  ${page !== '/balance' ? 'tablemin' : ''}  `}>
          <div className="container bg-white">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="table-responsive"></div>
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>CONCEPTO</th>
                      <th>IMPORTE</th>
                      <th className="tableth">
                        <p className="mx-3 mb-0 align-bottom">TIPO</p>
                        {
                          page !== '/balance'
                            ? <select onChange={({ target }) => setTypeFilter(target.value)} className="form-select-sm mb-0 labelth " aria-label=".form-select-sm example">
                              <option value={'payment/topup'} selected>PAYMENT/TOPUP</option>
                              {options.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                              ))}
                            </select>
                            : ''
                        }
                      </th>
                      <th>FECHA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      page === '/balance'
                        ? operations.slice(0, 4).map(({ concept, amount, date, type }, index) =>
                          <Transaction key={index} concept={concept} amount={amount} date={date} type={type} />)
                        : operations
                          .filter(operation => operation.type === typeFilter || typeFilter === 'payment/topup')
                          .map(({ concept, amount, date, type }, index) =>
                            <Transaction key={index} concept={concept} amount={amount} date={date} type={type} />)
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
