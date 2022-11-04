import React from "react";

const Footer = () => {
	return (

		<footer className="bg-cyan-600  w-full py-8">
			<div className="max-w-screen-xl mx-auto px-4">
				<ul className="max-w-screen-md mx-auto font-normal flex flex-wrap justify-between">
					<li className="my-2">
						<a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 "
						   href="https://www.linkedin.com/in/marco-allegri/">
							Marco Allegri
						</a>
					</li>
					<li className="my-2">
						<a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 "
						   href="https://www.linkedin.com/in/tadeo-maddonni-899836236/">
							Tadeo Maddonni
						</a>
					</li>
					<li className="my-2">
						<a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 "
						   href="#">
							Tomás Sanchez
						</a>
					</li>
					<li className="my-2">
						<a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 "
						   href="#">
							Angel Landloker
						</a>
					</li>
					<li className="my-2">
						<a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 "
						   href="#">
							Juan Horisberg
						</a>
					</li>
					<li className="my-2">
						<a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 "
						   href="https://www.linkedin.com/in/lucasdepalma/">
							Lucas De Palma
						</a>
					</li>
				</ul>
				<div
					className="text-center text-stone-200 italic pt-5 sm:pt-8 font-light flex items-center justify-center">
					Todos los derechos reservados @2022
				</div>
			</div>
		</footer>
	);
};

export default Footer;
