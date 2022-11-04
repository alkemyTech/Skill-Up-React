import React, { useEffect } from "react";
import CargaDeSaldoForm from "../components/CargaDeSaldoForm";
import UltimasCargas from "../components/UltimasCargas";
const CargaSaldo = () => {
	return (
		<div className="pt-16 bg-stone-200">
			<h1 className="text-left pl-5 text-4xl font-bold text-indigo-900">
				Carga Tu saldo
			</h1>

			<div className="flex justify-center items-center">
				<CargaDeSaldoForm />
			</div>
			<h2 className="text-left mt-14 pl-5 text-4xl font-bold text-indigo-900">
				Últimas cargas
			</h2>
			<UltimasCargas />
		</div>
	);
};

export default CargaSaldo;
