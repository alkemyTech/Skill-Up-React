import React from 'react';
import { Button } from 'src/components/Button';
import { Heading } from 'src/components/Heading';
import { Title } from 'src/components/Title';

export const HomePage = () => {
	return (
		<div className="w-full h-screen bg-ct-primary-400 flex place-content-center flex-col px-4">
			<header className="contents">
				<img src={'./alkemy_logo.svg'} className="max-w-md mx-auto" alt="logo" />
				<Heading as="h3" className="text-center">
					Bienvenido a AlkyBank
				</Heading>
			</header>
		</div>
	);
};
