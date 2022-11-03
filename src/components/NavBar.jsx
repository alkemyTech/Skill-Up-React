import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="flex pt-4 justify-between h-14 items-center bg-stone-200">
			<div className="pl-5">
				<Link to="/home">
					<span className="font-bold text-indigo-900 text-xl">
						AlkemyBank
					</span>
				</Link>
			</div>
			<div>
				<ul
					className="flex gap-8 pr-5
				"
				>
					<li>
						<Link className="text-indigo-900 font-bold" to="/home">
							Home
						</Link>
					</li>
					<li>
						<Link
							className="text-indigo-900 font-bold"
							to="/envio-de-dinero"
						>
							Enviar dinero
						</Link>
					</li>
					<li>
						<Link
							className="text-indigo-900 font-bold"
							to="/carga-saldo"
						>
							Carga tu saldo{" "}
						</Link>
					</li>
					<li>
						<Link
							className="text-indigo-900 font-bold"
							to="/balance"
						>
							Balance
						</Link>
					</li>
					<li>
						<Link
							className="text-indigo-900 font-bold"
							to="/gastos"
						>
							Gastos
						</Link>
					</li>
					<li>
						<Link
							className="text-indigo-900 font-bold"
							to="/movimientos"
						>
							Movimientos
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
