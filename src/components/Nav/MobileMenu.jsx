import { Button } from '../Button';
import close from '../../assets/close.svg';
import { ButtonLogout } from '../ButtonLogout';

const MobileMenu = ({ setShowMenu, showMenu, handlerLogin }) => {
	let positionPanel = showMenu ? 'right-0' : 'right-[-20rem]';
	let opacityBlackout = showMenu ? 'opacity-1' : 'opacity-0';
	let positionBlackout = showMenu ? 'left-0' : 'right-[-90rem]';

	return (
		<div
			className={`transition-all ease-in-out duration-1000 bg-black-transparent fixed ${opacityBlackout} ${positionBlackout} top-0 w-full h-full lg:hidden`}
		>
			<ul
				className={`transition-all ease-in-out duration-1000 fixed bg-ct-primary-base top-0 ${positionPanel} w-60 h-full flex flex-col justify-evenly`}
			>
				<li>
					<img
						src={close}
						alt="close button"
						className="absolute w-6 top-4 left-4 text-ct-neutral-ligth-base"
						onClick={() => setShowMenu(false)}
					/>
				</li>
				<li>
					<a className="text-ct-neutral-ligth-base px-2 py-1 mx-4">Carga de saldo</a>
				</li>
				<li>
					<a className="text-ct-neutral-ligth-base px-2 py-1 mx-4">Gastos</a>
				</li>
				<li>
					<a className="text-ct-neutral-ligth-base px-2 py-1 mx-4">Balance</a>
				</li>
				<li>
					<a className="text-ct-neutral-ligth-base px-2 py-1 mx-4">Movimientos</a>
				</li>
				<li>
					<a className="text-ct-neutral-ligth-base px-2 py-1 mx-4">Envio de dinero</a>
				</li>
				<li className="px-2 mx-4">
					<ButtonLogout variant="secondary" handlerLogin={handlerLogin}>
						Logout
					</ButtonLogout>
				</li>
			</ul>
		</div>
	);
};

export { MobileMenu };

