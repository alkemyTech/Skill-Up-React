import { Link } from 'react-router-dom';

import { useState } from 'react';
import logo from '../../assets/alkemy_logo.svg';
import hamburger from '../../assets/menu.svg';
import { MobileMenu } from './MobileMenu';
import { Button } from '../Button';

const Navbar = () => {
	const [isLogged, setIsLogged] = useState(true);
	const [showMenu, setShowMenu] = useState(false);

	const handlerShowMenu = () => setShowMenu(!showMenu);
	const handlerLogin = () => {
		setIsLogged(!isLogged);
	};

	return (
		<header className="flex justify-between items-center bg-ct-primary-base p-4">
			<Link to="/">
				<img src={logo} alt="logo" tabIndex="0" />
			</Link>
			<nav>
				{isLogged ? (
					<>
						<ul className="hidden lg:flex ">
							<li className="flex justify-center items-center">
								<Link
									to="/deposit"
									className="transition-all ease-in-out duration-200 text-ct-neutral-ligth-base px-2 py-1 mx-4 cursor-pointer hover:text-ct-neutral-medium-200"
								>
									Carga de saldo
								</Link>
							</li>
							<li className="flex justify-center items-center">
								<Link
									to="/bills"
									className="transition-all ease-in-out duration-200 text-ct-neutral-ligth-base px-2 py-1 mx-4 cursor-pointer hover:text-ct-neutral-medium-200"
								>
									Gastos
								</Link>
							</li>
							<li className="flex justify-center items-center">
								<Link
									to="/balance"
									className="text-ct-neutral-ligth-base px-2 py-1 mx-4 cursor-pointer hover:text-ct-neutral-medium-200"
								>
									Balance
								</Link>
							</li>
							<li className="flex justify-center items-center">
								<Link
									to="/transactions"
									className="transition-all ease-in-out duration-200 text-ct-neutral-ligth-base px-2 py-1 mx-4 cursor-pointer hover:text-ct-neutral-medium-200"
								>
									Movimientos
								</Link>
							</li>
							<li className="flex justify-center items-center">
								<Link
									to="/transfer"
									className="transition-all ease-in-out duration-200 text-ct-neutral-ligth-base px-2 py-1 mx-4 cursor-pointer hover:text-ct-neutral-medium-200"
								>
									Envio de dinero
								</Link>
							</li>
							<li className="flex justify-center">
								<Button variant="secondary" onClick={handlerLogin}>
									Logout
								</Button>
							</li>
						</ul>
						{<MobileMenu setShowMenu={setShowMenu} showMenu={showMenu} handlerLogin={handlerLogin} />}
						<div className="w-7 lg:hidden align-middle" onClick={handlerShowMenu}>
							<img src={hamburger} alt="menu" />
						</div>
					</>
				) : (
					<Link to="/login">
						<Button variant="primary" onClick={handlerLogin}>
							Login
						</Button>
					</Link>
				)}
			</nav>
		</header>
	);
};

export { Navbar };
