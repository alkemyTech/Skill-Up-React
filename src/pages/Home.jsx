import React from "react";
import { Link } from "react-router-dom";
import {
	BsPeople,
	BsArrowDownSquare,
	BsGraphUp,
	BsCoin,
	BsCalendarCheck,
	BsCash,
} from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../context/loginContext";


function Home() {
	return (
		<div>
			<section className="w-full min-h-screen bg-white ">
				<div className="container relative flex flex-col px-6 py-20 mx-auto">
					<section className="flex items-center flex-1">
						<div className="flex flex-col w-full ">
							<h1 className="text-4xl font-extrabold text-center lg:text-7xl 2xl:text-7xl">
								<span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-primary-color to-sky-500">
									Bienvenido,
								</span>
								<span className="text-transparent bg-gradient-to-tr bg-clip-text from-secondary-color via-sky-500 to-primary-color">
									Nombre
								</span>
							</h1>

							<p className="lg:text-4xl 2xl:text-3xl mx-auto mt-6 text-lg text-center text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-sky-500 to-light-sky-blue">
								¿Qué operación desea realizar el día de hoy?
							</p>
						</div>
					</section>
				</div>
				<div className="bg-white">
					<div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
						<div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
							<Link to="/envio-de-dinero">
								<div className="px-10 py-20 text-center transition duration-500 transform bg-gray-100 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
									<BsPeople className="icons" />
									<p className="font-semibold text-gray-500 text-2xl">
										Enviar dinero
									</p>
								</div>
							</Link>
							<Link to="/retirar-dinero">
								<div className="px-10 py-20 text-center transition duration-500 transform bg-gray-100 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
									<BsArrowDownSquare className="icons" />
									<p className="font-semibold text-gray-500 text-2xl">
										Retirar dinero
									</p>
								</div>
							</Link>
							<Link to="/carga-saldo">
								<div className="px-10 py-20 text-center transition duration-500 transform bg-gray-100 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
									<BsCoin className="icons" />
									<p className="font-semibold text-gray-500 text-2xl">
										Carga tu saldo
									</p>
								</div>
							</Link>
							<Link to="/gastos">
								<div className="px-10 py-20 text-center transition duration-500 transform bg-gray-100 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
									<BsGraphUp className="icons" />
									<p className="font-semibold text-gray-500 text-2xl">
										Gastos
									</p>
								</div>
							</Link>
							<Link to="/movimientos">
								<div className="px-10 py-20 text-center transition duration-500 transform bg-gray-100 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
									<BsCalendarCheck className="icons" />
									<p className="font-semibold text-gray-500 text-2xl">
										Movimientos
									</p>
								</div>
							</Link>
							<Link to="/balance">
								<div className="px-10 py-20 text-center transition duration-500 transform bg-gray-100 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
									<BsCash className="icons" />
									<p className="font-semibold text-gray-500 text-2xl">
										Balance
									</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
