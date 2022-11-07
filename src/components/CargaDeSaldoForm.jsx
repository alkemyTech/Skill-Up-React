import React from "react";
import { useState } from "react";
import Select from "react-select";

const CargaDeSaldoForm = () => {
	const [data, setData] = useState({
		monto: "",
		moneda: "",
		concepto: "",
	});
	console.log(data);
	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setData((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Enviado");

		let conceptoValido = false;
		let monedaValida = false;
		let montoValido = false;

		if (data.monto > 0 && !isNaN(data.monto)) {
			console.log("Monto valido");
			montoValido = true;
		} else {
			console.log("Monto no valido");
		}

		if (
			data.moneda === "ARS" ||
			data.moneda === "USD" ||
			data.moneda === "Euros"
		) {
			console.log("moneda valido");
			monedaValida = true;
		} else {
			console.log("moneda no valido");
		}

		if (data.concepto.length > 0) {
			console.log("Concepto valido");
			conceptoValido = true;
		} else {
			console.log("Concepto no valido");
		}

		if (monedaValida && conceptoValido && montoValido) {
			cargaDeSaldo();
		}
	};
	const cargaDeSaldo = () => {
		fetch(
			"http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/60",
			{
				body: JSON.stringify({
					type: "topup",
					concept: data.concepto,
					amount: parseInt(data.monto),
				}),
				headers: {
					Accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6NDUzLCJyb2xlSWQiOjJ9LCJpYXQiOjE2Njc4MzQ5MzMsImV4cCI6MTY2NzkyMTMzM30.nNtKuWEs9WmNbtaCfXC08p0rKnPQeqTFa7RJU_Wq9hk",
					"Content-Type": "application/json",
				},
				method: "POST",
			}
		).then((res) => console.log(res.json()));
	};

	return (
		<div className="w-2/5 p-7 bg-cyan-600 rounded">
			<form
				action=""
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<div className="flex justify-start gap-5 ">
					<div className="flex flex-col gap-3 w-1/2">
						<span className="text-stone-200 text-left">
							Monto a cargar:
						</span>
						<input
							type="text"
							name="monto"
							className="pt-1.5 pb-1 pr-3  bg-white text indent-1.5 text-black outline-stone-200 rounded placeholder:text-black"
							onChange={handleOnChange}
							placeholder="Ingrese el monto a cargar"
						/>
					</div>
					<div className="flex flex-col gap-3 w-1/2">
						<span className="text-stone-200 text-left">
							Moneda a utilizar:
						</span>
						<select
							className="pt-2 pb-2 rounded"
							name="moneda"
							onChange={handleOnChange}
						>
							<option value="">Elegí tu moneda</option>
							<option value="ARS">ARS</option>
							<option value="USD">USD</option>
							<option value="Euros">Euros</option>
						</select>
					</div>
				</div>
				<div className="mt-4 flex flex-col gap-3">
					<span className="text-stone-200 text-left">
						Concepto de la carga:
					</span>
					<input
						name="concepto"
						type="text"
						className=" pt-1 pb-1 pr-3 bg-white text indent-1.5 text-black outline-stone-200 rounded placeholder:text-black"
						onChange={handleOnChange}
						placeholder="Ingrese el concepto de la carga"
					/>
				</div>
				<div className="mt-5">
					<button
						type="submit"
						className="bg-white font-bold text-cyan-600 pt-1 pb-1 pl-3 pr-3 flex rounded  items-center justify-center text-center "
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
