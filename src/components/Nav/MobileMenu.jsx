const MobileMenu = ({ setShowMenu, showMenu }) => {
	let positionPanel = showMenu ? 'right-0' : 'right-[-20rem]';
	let opacityBlackout = showMenu ? 'opacity-1' : 'opacity-0';
	let positionBlackout = showMenu ? 'left-0' : 'right-[-90rem]';

	return (
		<div
			className={`transition-all ease-in-out duration-1000 bg-black-transparent fixed ${opacityBlackout} ${positionBlackout} top-0 w-full h-full lg:hidden`}
			onClick={() => setShowMenu(false)}
		>
			<ul
				className={`transition-all ease-in-out duration-1000 fixed bg-ct-primary-base top-0 ${positionPanel} w-60 h-full flex flex-col justify-evenly`}
			>
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
				<li>
					<a className="text-ct-neutral-ligth-base mx-4 px-2 py-1 border rounded-lg">Logout</a>
				</li>
			</ul>
		</div>
	);
};

export { MobileMenu };

