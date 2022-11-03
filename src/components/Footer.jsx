import React from "react";

const Footer = () => {
	return (
		<div className="bg-indigo-900 h-32 mt-40 flex flex-col items-center justify-center gap-4">
			<p className="text-stone-200 ">
				Todos los derechos reservados @2022
			</p>
			<p className="text-stone-200 italic">
				Desarrollado por{" "}
				<a className="underline" href="">
					Marco Allegri
				</a>
				,{" "}
				<a className="underline" href="">
					Tadeo Maddonni
				</a>
				,{" "}
				<a className="underline" href="">
					Tomás Sanchez
				</a>
				,{" "}
				<a className="underline" href="">
					Angel Landloker
				</a>
				,{" "}
				<a className="underline" href="">
					Juan Horisberg
				</a>{" "}
				Y{" "}
				<a className="underline" href="">
					Lucas de Palma
				</a>
			</p>
		</div>
	);
};

export default Footer;
