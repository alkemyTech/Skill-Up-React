import { Heading } from 'src/components/Heading';

export default function HomePage() {
	return (
		<div className="flex h-screen w-full flex-col place-content-center bg-ct-primary-400 px-4">
			<header className="contents">
				<img src={'./alkemy_logo.svg'} className="mx-auto max-w-md" alt="logo" />
				<Heading as="h3" className="text-center">
					Bienvenido a AlkyBank
				</Heading>
			</header>
		</div>
	);
}
