import logo from 'src/assets/alkemy_logo.svg';
import { Heading } from 'src/components/Heading';

const Footer = () => {
	return (
		<footer className="flex justify-around items-center bg-ct-primary-base p-4 ">
			<section className="hidden md:block">
				<Heading as="h5" className="text-ct-neutral-ligth-base py-1">
					Contacto:
				</Heading>
				<ul>
					<li className="text-ct-neutral-ligth-base text-xs py-1">324 567 89 90</li>
					<li className="text-ct-neutral-ligth-base text-xs py-1">Cl. Manuela Del Valle # 5694</li>
					<li className="text-ct-neutral-ligth-base text-xs py-1">Horacio Sur, Perú</li>
				</ul>
			</section>
			<section>
				<img src={logo} alt="logo" />
				<p className="text-ct-neutral-ligth-base text-xs py-1">&copy; {new Date().getFullYear()} All rights reserved</p>
			</section>
			<section>
				<ul>
					<li className="text-ct-neutral-ligth-base text-xs py-1">
						<button className="hover:underline">Términos de Servicio</button>{' '}
					</li>
					<li className="text-ct-neutral-ligth-base text-xs py-1">
						<button className="hover:underline">Privacidad</button>{' '}
					</li>
					<li className="text-ct-neutral-ligth-base text-xs py-1">
						<button className="hover:underline">PQRS</button>
					</li>
				</ul>
			</section>
		</footer>
	);
};
export { Footer };

