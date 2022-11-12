import React, { useEffect, useState } from "react";
import CargaDeSaldoForm from "../components/CargaDeSaldoForm";
import UltimasCargas from "../components/UltimasCargas";
const CargaSaldo = () => {
	const [lastTransactions, setLastTransactions] = useState();
	return (
		<div className="pt-5 flex flex-col gap-5 ">
			<h1 className="text-center text-4xl mt-6 lg:text-left lg:mt-14 lg:pl-5 lg:text-5xl font-bold text-cyan-500">
				Cargá Tu saldo
			</h1>

			<div className="flex justify-center items-center">
				<CargaDeSaldoForm setLastTransactions={setLastTransactions} />
			</div>
			<h2 className="text-center text-4xl mt-6 lg:text-left lg:mt-14 lg:pl-5 lg:text-5xl font-bold text-cyan-500">
				Últimas cargas
			</h2>
			<UltimasCargas lastTransactions={lastTransactions} />
		</div>
	);
};

export default CargaSaldo;
