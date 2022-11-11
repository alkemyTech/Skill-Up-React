import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/favi.jfif";

const NavBar = () => {
	const [toggle, setToggle] = useState(false);
	const handleToggle = () => {
		setToggle((prevToggle) => !prevToggle);
	};
	return (
		<header className="bg-white">
			<div className="container mx-auto  flex-wrap p-5 flex-col md:flex-row items-center hidden md:flex">
				<Link
					to="/"
					className="flex title-font font-normal items-center text-gray-900 mb-4 md:mb-0"
				>
					<img
						className="w-full h-10 max-w-md"
						src={logo}
						alt="404"
					/>
					<span className="ml-3 text-xl">
						<span className="text-sky-500">Alkemy</span>Bank
					</span>
				</Link>
				<nav className="md:ml-auto flex flex-wrap items-center gap-3 justify-center">
					<Link
						className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500"
						to="/"
					>
						Home
					</Link>
					<Link
						className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500"
						to="/envio-de-dinero"
					>
						Enviar dinero
					</Link>
					<Link
						className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500"
						to="/carga-saldo"
					>
						Carga tu saldo{" "}
					</Link>
					<Link
						className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500"
						to="/balance"
					>
						Balance
					</Link>
					<Link
						className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500"
						to="/gastos"
					>
						Gastos
					</Link>
					<Link
						className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500"
						to="/movimientos"
					>
						Movimientos
					</Link>
				</nav>
			</div>

			<header
				className={
					toggle
						? "bg-white flex md:hidden fixed z-30 w-full h-[80px]"
						: "bg-white flex md:hidden fixed z-30 w-full h-[80px]"
				}
			>
				<div className="flex w-full justify-between items-center ">
					<Link
						to="/"
						className="flex title-font font-normal items-center text-gray-900 mb-4 md:mb-0"
					>
						<span className="ml-3 text-xl">
							<span className="text-sky-500">Alkemy</span>Bank
						</span>
					</Link>

					<div
						className={toggle ? "flex flex-col justify-between w-[25px] h-[25px] mr-[20px]  z-50 hamburger active" : "flex flex-col justify-between w-[25px] h-[25px] mr-[20px]  z-50" }
						onClick={handleToggle}
					>
						<span
							className={
								toggle
									? " hamburguerLine w-full  h-[3px] transition-all-0.4s bg-white"
									: "hamburguerLine w-full  h-[3px] transition-all-0.4s bg-cyan-500"
							}
						></span>
						<span
							className={
								toggle
									? " hamburguerLine w-full  h-[3px] transition-all-0.4s bg-white"
									: "hamburguerLine w-full  h-[3px] transition-all-0.4s bg-cyan-500"
							}
						></span>
						<span
							className={
								toggle
									? " hamburguerLine w-full  h-[3px] transition-all-0.4s bg-white"
									: "hamburguerLine w-full  h-[3px] transition-all-0.4s bg-cyan-500"
							}
						></span>
					</div>
				</div>
				<div>
					<nav
						className={
							toggle
								? "md:ml-auto flex flex-col items-center gap-3 justify-center fixed  bottom-0  right-[0px] w-[250px] z-30 bg-cyan-500 topbar"
								: "md:ml-auto flex flex-col items-center gap-3 justify-center fixed  bottom-0 right-[-250px] w-[250px]  bg-white topbar"
						}
					>
						<Link
							className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500 text-white w-full ml-[70px] text-[20px] text-left"
							to="/"
							onClick={handleToggle}
						>
							Home
						</Link>
						<Link
							className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500 text-white w-full ml-[70px] text-[20px] text-left"
							to="/envio-de-dinero"
							onClick={handleToggle}
						>
							Enviar dinero
						</Link>
						<Link
							className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500 text-white w-full ml-[70px] text-[20px] text-left"
							to="/carga-saldo"
							onClick={handleToggle}
						>
							Carga tu saldo{" "}
						</Link>
						<Link
							className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500 text-white w-full ml-[70px] text-[20px] text-left"
							to="/balance"
							onClick={handleToggle}
						>
							Balance
						</Link>
						<Link
							className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500 text-white w-full ml-[70px] text-[20px] text-left"
							to="/gastos"
							onClick={handleToggle}
						>
							Gastos
						</Link>
						<Link
							className="border-b-2 border-transparent m-1 hover:text-cyan-800 transition-colors duration-300 hover:border-cyan-500 text-white w-full ml-[70px] text-[20px] text-left"
							to="/movimientos"
							onClick={handleToggle}
						>
							Movimientos
						</Link>
					</nav>
				</div>
			</header>
		</header>
	);
};

export default NavBar;
