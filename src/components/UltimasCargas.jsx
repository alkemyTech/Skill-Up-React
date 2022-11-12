import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../context/loginContext";
import formatDate from "../utils/formatDate";
import SkeletonCard from "./SkeletonCard";

const UltimasCargas = ({ lastTransactions }) => {
	const [cargas, setCargas] = useState([]);
	const [loading, setLoading] = useState(true)
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
			.then((res) => setCargas(res.data.slice(0,6)))
			.catch((err) => console.log(err))
			.finally(() => setLoading(false))
	};

	useEffect(() => {
		const token = getToken();
		getCargas(token);
	}, [lastTransactions]);

	const cargasElements = cargas.filter(tx => tx.type !== "payment").map((carga) => {
		const date = formatDate(carga.date).tipo2;
		return (
			<div
				className="p-6 rounded bg-cyan-500 text-white  w-[300px]"
				key={carga.id}
			>
				<div className="flex gap-2">
					<span className="font-bold">Monto:</span>
					<span className="bold">${carga.amount}</span>
				</div>
				<div className="flex gap-2">
					<span className="font-bold">Concepto</span>
					<span className="italic">{carga.concept}</span>
				</div>
				<div className="flex gap-2">
					<span className="font-bold">Fecha: </span>
					<span>{date}</span>
				</div>
			</div>
		);
	});
	return (
		<div className="pt-8 items-center justify-center pb-12 flex  ">
            {loading ? 
				<SkeletonCard numberOfCards={4} />
				: cargas.length === 0 ?
				<h3 className="text-3xl font-semibold text-indigo-900 text-center">
				No tienes cargas recientes
				</h3>
				:
				<div className="flex gap-6 justify-center flex-wrap">
					{cargasElements}
				</div>
			}
		</div>
	);
};

export default UltimasCargas;
