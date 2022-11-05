import { useState } from 'react';
import logo from '../../assets/alkemy_logo.svg';
import { MobileMenu } from './MobileMenu';
import { Button } from '../Button';
import avatar from '../../assets/avatar.svg';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { ButtonLogout } from '../ButtonLogout';

const Navbar = ({ isVisible, setIsVisible }) => {
	const [isLogged, setIsLogged] = useState(true);
	const [showMenu, setShowMenu] = useState(false);

	const handlerShowMenu = () => setShowMenu(!showMenu);
	const handlerLogin = () => {
		setIsLogged(!isLogged);
	};

	return (
		<header className="flex justify-between items-center bg-ct-primary-base p-4">
			<img src={logo} alt="logo" tabIndex="0" />
			<nav>
				{isLogged ? (
					<>
						<ul className="hidden lg:flex ">
							<li className="flex justify-center items-center">
								<a className="transition-all ease-in-out duration-200 text-ct-neutral-ligth-base px-2 py-1 mx-4 cursor-pointer hover:text-ct-neutral-medium-200">
									Carga de saldo
								</a>
							</li>
							<li className="flex justify-center items-center">
								<a className="transition-all ease-in-out duration-200 text-ct-neutral-ligth-base px-2 py-1 mx-4 cursor-pointer hover:text-ct-neutral-medium-200">
									Gastos
								</a>
							</li>
							<li className="flex justify-center items-center">
								<a className="text-ct-neutral-ligth-base px-2 py-1 mx-4 cursor-pointer hover:text-ct-neutral-medium-200">
									Balance
								</a>
							</li>
							<li className="flex justify-center items-center">
								<a className="transition-all ease-in-out duration-200 text-ct-neutral-ligth-base px-2 py-1 mx-4 cursor-pointer hover:text-ct-neutral-medium-200">
									Movimientos
								</a>
							</li>
							<li className="flex justify-center items-center">
								<a className="transition-all ease-in-out duration-200 text-ct-neutral-ligth-base px-2 py-1 mx-4 cursor-pointer hover:text-ct-neutral-medium-200">
									Envío de dinero
								</a>
							</li>
							<li className="flex justify-center ml-8">
								<img src={avatar} alt="avatar" className="w-10 cursor-pointer" onClick={() => setIsVisible(true)} />
								{isVisible && (
									<div
										data-close={true}
										className={`w-auto  flex-col items-center absolute right-0 top-[72px] bg-ct-secondary-600 p-4  rounded-bl-lg shadow-xl `}
									>
										<Text as="p" className="mb-3" data-close={true}>
											Lucía Cárdenas
										</Text>
										<ButtonLogout variant="mini" handlerLogin={handlerLogin} close={true} />
									</div>
								)}
							</li>
						</ul>
						<div className="flex items-center gap-4 lg:hidden" onClick={handlerShowMenu}>
							<img src={avatar} alt="menu" className="w-10" />
							<Heading as="h3" className="text-ct-neutral-ligth-base ">
								Lucía Cárdenas
							</Heading>
						</div>
						{<MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} handlerLogin={handlerLogin} />}
					</>
				) : (
					<Button variant="primary" onClick={handlerLogin}>
						Login
					</Button>
				)}
			</nav>
		</header>
	);
};

export { Navbar };

