import React from "react";
import { useState } from "react";

const CargaDeSaldoForm = () => {
	const [data, setData] = useState({});
	const cargaDeSaldo = () => {
		fetch("", {
			method: "POST",
			body: JSON.stringify({
				data,
			}),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				withCredentials: true,
			},
		});
	};

	return (
		<div className="w-2/5 p-7 bg-indigo-900 rounded">
			<form action="">
				<div className="flex justify-start gap-5 ">
					<div className="flex flex-col gap-3">
						<span className="text-stone-200 text-left">
							Monto a cargar:
						</span>
						<input
							type="text"
							name="monto"
							className="outline outline-2 pt-1 pb-1 pr-3 bg-indigo-900 text indent-1.5 text-stone-200 outline-stone-200 rounded"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<span className="text-stone-200 text-left">
							Monto a cargar:
						</span>
						<input
							type="text"
							className="outline outline-2 pt-1 pb-1 pr-3 bg-indigo-900 text indent-1.5 text-stone-200 outline-stone-200 rounded"
						/>
					</div>
				</div>
				<div className="mt-4 flex flex-col gap-3">
					<span className="text-stone-200 text-left">
						Concepto de la carga:
					</span>
					<input
						type="text"
						className="outline outline-2 pt-1 pb-1 pr-3 bg-indigo-900 text indent-1.5 text-stone-200 outline-stone-200 rounded"
					/>
				</div>
				<div className="mt-5">
					<button
						type="submit"
						className="bg-stone-200 font-bold text-indigo-900 pt-1 pb-1 pl-3 pr-3 flex rounded  items-center justify-center text-center "
					>
						Cargar
					</button>
				</div>
			</form>
		</div>
	);
};

export default CargaDeSaldoForm;

/* 

User response
{
  "id": 329, // UserID
  "first_name": "Nicolas",
  "last_name": "Perez",
  "email": "nicop@example.com",
  "password": "$2b$10$i95jOhrGwWsNJrIVeaLPheL0BEn/g5pUu0mKTaXv4W1PCh8LBiWJu", // abc123
  "points": 50,
  "roleId": 2,
  "updatedAt": "2022-11-03T14:57:56.096Z",
  "createdAt": "2022-11-03T14:57:56.096Z"
} 
*/

/* 
Account response  // topup => Deposito => Carga y  payment => pago (xd)

{
  "id": 47, // AccounId
  "creationDate": "2022-10-26T10:00:00.000Z",
  "money": 200,
  "isBlocked": false,
  "userId": 329,
  "updatedAt": "2022-11-03T15:33:37.709Z",
  "createdAt": "2022-11-03T15:33:37.709Z"
}
*/
