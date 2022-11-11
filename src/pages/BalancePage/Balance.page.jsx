import { useSelector } from 'react-redux';
import balanceImg from 'src/assets/balance/balance.svg';
import cargasImg from 'src/assets/balance/cargas.svg';
import paymentsImg from 'src/assets/balance/payments.svg';
import { CardBalance } from 'src/components/Cards';
import { Heading } from 'src/components/Heading';
import { Select } from 'src/components/Select';
import { useCalculateBalance } from '../../hooks/useCalculateBalance';

export default function BalancePage() {
	const movementList = useSelector((state) => state.movements.movementList);
	const isInfoLoaded = useSelector((state) => state.movements.isInfoLoaded);
	const currencyList = useSelector((state) => state.movements.currencyList);

	const { balance, paymentSum, topupSum, currencyCode, onChangeCurrency } = useCalculateBalance(movementList);

	const data = [
		{
			title: 'Balance',
			image: balanceImg,
			amount: balance,
		},
		{
			title: 'Cargas',
			image: cargasImg,
			amount: topupSum,
		},
		{
			title: 'Pagos',
			image: paymentsImg,
			amount: paymentSum,
		},
	];

	if (!isInfoLoaded) {
		return <>Skeleton</>;
	}

	return (
		<main className="mx-auto w-full max-w-screen-xl px-4 py-10 xl:px-0">
			<header className="mb-5 flex w-full flex-col gap-10 lg:flex-row">
				<Heading className="whitespace-nowrap text-ct-neutral-dark-700">Tu Balance</Heading>

				<div className="mt-auto w-full sm:max-w-xs lg:ml-auto">
					<Select label="Currency" onChange={onChangeCurrency} value={currencyCode} colorScheme="secondary">
						{currencyList.map((currency) => (
							<option key={currency} value={currency}>
								{currency}
							</option>
						))}
					</Select>
				</div>
			</header>

			<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-4">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
					{data.map((card) => (
						<CardBalance key={card.title} title={card.title} image={card.image} amount={card.amount} />
					))}
				</div>
			</section>
		</main>
	);
}
