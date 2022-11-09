import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../context/loginContext";

const CargaDeSaldoForm = () => {
	const { isAuthenticated } = useContext(AuthContext);
	const [valorDolar, setValorDolar] = useState(0);

	const [data, setData] = useState({
		monto: "",
		moneda: "",
		concepto: "",
	});

	useEffect(() => {
		fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
			.then((res) => res.json())
			.then((res) => setValorDolar(parseInt(res[0].casa.compra)));
	}, []);

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

		if (data.moneda === "ARS" || data.moneda === "USD") {
			if (data.moneda === "USD") {
				data.monto = data.monto * valorDolar;
				data.concepto = data.concepto + " (Eran USD)";
				monedaValida = true;
			} else {
				console.log("moneda valido");
				monedaValida = true;
			}
		} else {
			console.log("moneda no valido");
		}

		if (data.concepto.length > 0) {
			console.log("Concepto valido");
			conceptoValido = true;
		} else {
			console.log("Concepto no valido");
		}
		console.log("Moneda" + " : " + monedaValida);
		if (monedaValida && conceptoValido && montoValido) {
			cargaDeSaldo();
		}
	};

	const cargaDeSaldo = () => {
		fetch(
			"http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/268",
			{
				body: JSON.stringify({
					type: "topup",
					concept: data.concepto,
					amount: data.monto,
				}),
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${isAuthenticated.token}`,
					"Content-Type": "application/json",
				},
				method: "POST",
			}
		)
			.then((res) => res.json())
			.then((data) => console.log(data));
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
	email: lgonzales@example.com
	pass: lg12345
	User Id: 1181
	Account id: 268
	Token 8/11: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MTE4MSwicm9sZUlkIjoyfSwiaWF0IjoxNjY3OTMxMTEwLCJleHAiOjE2NjgwMTc1MTB9.XcqGfeGZl-WyJWuevCihYgMEdSKZVrhM82uQrQIFbn4
*/
