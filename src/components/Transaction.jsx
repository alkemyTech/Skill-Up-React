import React from 'react';
import { handleDate } from '../helper/helper';
import { truncateString } from '../helper/truncateString';

export const Transaction = ({ concept, amount, date, type }) => {
  return (
    <tr>
      <td scope="row text-break">{concept ? truncateString(concept) : type === "topup" ? "Carga rapida" : "Pago rapido"}</td>
    <td>
      ${amount}
      </td>
    <td>
      <span className={`badge ${type === 'topup' ? 'bg-success' : 'bg-danger'}`}>{type}</span>
      </td>
    <td>
      <p className="text-secondary">{handleDate(date)}</p>
    </td>
  </tr>
  );
};
