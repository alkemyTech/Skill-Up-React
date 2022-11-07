import React, { useState } from "react";
import { useEffect } from "react";

const UltimasCargas = () => {
	const [cargas, setCargas] = useState([]);
	const getCargas = async () => {
		const response = await fetch(
			"http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions",
			{
				headers: {
					Accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6NDUzLCJyb2xlSWQiOjJ9LCJpYXQiOjE2Njc4MzQ5MzMsImV4cCI6MTY2NzkyMTMzM30.nNtKuWEs9WmNbtaCfXC08p0rKnPQeqTFa7RJU_Wq9hk",
				},
			}
		);
		const data = await response.json();
		const ultimasCargas = data.data;
		return ultimasCargas;
	};
	useEffect(() => {
		const getData = async () => {
			const ultimosMovimientos = await getCargas();
			const ultimasCargas = ultimosMovimientos.filter(
				(carga) => carga.type === "topup"
			);
			setCargas(ultimasCargas);
		};
		getData();
	}, []);

	const cargasElements = cargas.map((carga) => {
		return (
			<div
				className="p-6 rounded bg-cyan-600 text-white  w-fit"
				key={carga.id}
			>
				<div className="flex gap-2">
					<span>Monto:</span>
					<span className="bold">${carga.amount}</span>
				</div>
				<div className="flex gap-2">
					<span>Concepto</span>
					<span className="italic">{carga.concept}</span>
				</div>
				<div className="flex gap-2">
					<span>Fecha: </span>
					<span>{carga.date}</span>
				</div>
			</div>
		);
	});
	return (
		<div className="pt-8 pb-8flex items-center justify-center pb-12 ">
			{cargas ? (
				<div className="flex gap-6 justify-center flex-wrap">
					{cargasElements}
				</div>
			) : (
				<h3 className="text-3xl font-semibold text-cyan-600 text-center">
					No tienes cargas recientes
				</h3>
			)}
		</div>
	);
};

export default UltimasCargas;
