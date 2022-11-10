import { Heading } from 'src/components/Heading';

export default function HomePage() {
	return (
		<div className="flex  w-full flex-col place-content-center px-4 py-40">
			<header className="contents">
				<img src={'./alkemy_logo.svg'} className="mx-auto max-w-md" alt="logo" />
				<Heading as="h3" className="text-center">
					Bienvenido a AlkyBank
				</Heading>
			</header>
		</div>
	);
}
