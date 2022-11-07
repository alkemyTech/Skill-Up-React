import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/favi.jfif";

const NavBar = () => {
	return (
		<header className="bg-white">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a className="flex title-font font-normal items-center text-gray-900 mb-4 md:mb-0">
					<img className="w-full h-10 max-w-md" src={logo} alt="404"/>
					<span className="ml-3 text-xl">AlkemyBank</span>
				</a>
				<nav className="md:ml-auto flex flex-wrap items-center justify-center">
					<Link className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500" to="/home">
						Home
					</Link>
					<Link className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500" to="/envio-de-dinero">
						Enviar dinero
					</Link>
					<Link className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500" to="/carga-saldo">
						Carga tu saldo{" "}
					</Link>
					<Link className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500" to="/balance">
						Balance
					</Link>
					<Link className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500" to="/gastos">
						Gastos
					</Link>
					<Link className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500" to="/movimientos">
						Movimientos
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
