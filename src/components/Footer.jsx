import React from "react";

const Footer = () => {
	const integrantes = [
		{ integrante: "Marco Allegri", linkedIn: "https://www.linkedin.com/in/marco-allegri/"}, 
		{ integrante: "Tadeo Maddonni", linkedIn: "https://www.linkedin.com/in/tadeo-maddonni-899836236/"},
		{ integrante: "Angel Landloker", linkedIn: "https://www.linkedin.com/in/angel-luis-landkoer-b41698236/"},
		{ integrante: "Tomás Sanchez", linkedIn: "#"},
		{ integrante: "Lucas De Palma", linkedIn: "https://www.linkedin.com/in/lucasdepalma/"},
	]
	
	return (

		<footer className="bg-cyan-500  w-full py-8 mt-auto">
			<div className="max-w-screen-xl mx-auto px-4">
				<ul className="max-w-screen-md mx-auto font-normal flex flex-wrap justify-between">
					{
						integrantes.map(integrante => (
							<li className="my-2" key={integrante.integrante}>
								<a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 "
								href={integrante.linkedIn} target="_blank">
									{integrante.integrante}
								</a>
							</li>
						))
					}

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
