import { useState } from 'react';
import logo from 'src/assets/alkemy_logo.svg';
import hamburger from 'src/assets/menu.svg';

const Navbar = () => {
	const [isLogged, setIsLogged] = useState(false);

	return (
		<header className="flex justify-between items-center bg-ct-primary-base p-4">
			<img src={logo} alt="logo" tabIndex="0" />
			<nav>
				{isLogged ? (
					<>
						<ul className="hidden lg:flex">
							<li>
								<button className="text-ct-neutral-ligth-base px-2 py-1 mx-4">Carga de saldo</button>
							</li>
							<li>
								<button className="text-ct-neutral-ligth-base px-2 py-1 mx-4">Gastos</button>
							</li>
							<li>
								<button className="text-ct-neutral-ligth-base px-2 py-1 mx-4">Balance</button>
							</li>
							<li>
								<button className="text-ct-neutral-ligth-base px-2 py-1 mx-4">Movimientos</button>
							</li>
							<li>
								<button className="text-ct-neutral-ligth-base px-2 py-1 mx-4">Envio de dinero</button>
							</li>
							<li>
								<button className="text-ct-neutral-ligth-base mx-4 px-2 py-1 border rounded-lg">Logout</button>
							</li>
						</ul>
						<button className="w-7 lg:hidden align-middle">
							<img src={hamburger} alt="menu" />
						</button>
					</>
				) : (
					<button className="text-ct-neutral-ligth-base border px-2 py-1 rounded-lg">Login</button>
				)}
			</nav>
		</header>
	);
};

export { Navbar };
