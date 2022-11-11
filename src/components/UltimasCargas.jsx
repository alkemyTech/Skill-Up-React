import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../context/loginContext";
import formatDate from "../utils/formatDate";

const UltimasCargas = ({ lastTransactions }) => {
	const [cargas, setCargas] = useState([]);
	const { getToken } = useContext(AuthContext);
	const getCargas = (userToken) => {
		fetch(
			"http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions",
			{
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${userToken}`,
				},
			}
		)
			.then((res) => res.json())
			.then((res) => setCargas(res.data.slice(0,6)));
	};

	useEffect(() => {
		const token = getToken();
		getCargas(token);
	}, [lastTransactions]);

	const cargasElements = cargas.map((carga) => {
		const date = formatDate(carga.date).tipo2;
		return (
			<div
				className="p-6 rounded bg-cyan-500 text-white  w-[300px]"
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
					<span>{date}</span>
				</div>
			</div>
		);
	});
	return (
		<div className="pt-8 items-center justify-center pb-12 flex  ">
			{cargas != [] ? (
				<div className=" gap-6 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
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
