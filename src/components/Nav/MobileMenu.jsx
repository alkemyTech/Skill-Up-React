import { Button } from '../Button';
import { Link } from 'react-router-dom';

const MobileMenu = ({ setShowMenu, showMenu, handlerLogin }) => {
	let positionPanel = showMenu ? 'right-0' : 'right-[-20rem]';
	let opacityBlackout = showMenu ? 'opacity-1' : 'opacity-0';
	let positionBlackout = showMenu ? 'left-0' : 'right-[-90rem]';

	return (
		<div
			className={`transition-all ease-in-out duration-1000 bg-black-transparent fixed z-10 ${opacityBlackout} ${positionBlackout} top-0 w-full h-full lg:hidden`}
			onClick={() => setShowMenu(false)}
		>
			<ul
				className={`transition-all ease-in-out duration-1000 fixed bg-ct-primary-base top-0 ${positionPanel} w-60 h-full flex flex-col justify-evenly`}
			>
				<li>
					<Link to="/deposit" className="text-ct-neutral-ligth-base px-2 py-1 mx-4">Carga de saldo</Link>
				</li>
				<li>
					<Link to="/bills" className="text-ct-neutral-ligth-base px-2 py-1 mx-4">Gastos</Link>
				</li>
				<li>
					<Link to="/balance" className="text-ct-neutral-ligth-base px-2 py-1 mx-4">Balance</Link>
				</li>
				<li>
					<Link to="/transactions" className="text-ct-neutral-ligth-base px-2 py-1 mx-4">Movimientos</Link>
				</li>
				<li>
					<Link to ="/transfer" className="text-ct-neutral-ligth-base px-2 py-1 mx-4">Envio de dinero</Link>
				</li>
				<li className="px-2 mx-4">
					<Button variant="secondary" onClick={handlerLogin}>
						Logout
					</Button>
				</li>
			</ul>
		</div>
	);
};

export { MobileMenu };

