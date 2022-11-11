import React from 'react';
import { useSelector } from 'react-redux';
import balanceImg from 'src/assets/balance/balance.svg';
import cargasImg from 'src/assets/balance/cargas.svg';
import paymentsImg from 'src/assets/balance/payments.svg';
import { CardBalance } from 'src/components/Cards';
import { Heading } from 'src/components/Heading';
import { Select } from 'src/components/Select';
import { Input } from 'src/components/SignInForm/Input';
import { currencyCodeDefault } from 'src/models/currencyCodeDefault';
import { MovementType } from 'src/models/movementType.model';

function useCalculateBalance(movementList = []) {
	const [currencyCode, setCurrencyCode] = React.useState(currencyCodeDefault);
	const movementListBasedOnCurrency = movementList.filter((movement) => movement.currencyCode === currencyCode);
	const paymentsList = movementListBasedOnCurrency.filter((movement) => movement.type === MovementType.payment);
	const topupList = movementListBasedOnCurrency.filter((movement) => movement.type === MovementType.topup);
	const paymentSum = paymentsList.reduce((prev, curr) => prev + curr.amount, 0);
	const topupSum = topupList.reduce((prev, curr) => prev + curr.amount, 0);

	const onChangeCurrency = (e) => {
		const { value } = e.target;
		setCurrencyCode(value);
	};

	return {
		balance: topupSum - paymentSum,
		paymentSum,
		topupSum,
		currencyCode,
		onChangeCurrency,
		movementListBasedOnCurrency,
	};
}

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

	return (
		<main className="mx-auto w-full max-w-screen-xl px-4 py-10 xl:px-0">
			{/* <div className={`container mx-auto   my-12  flex flex-col gap-5 sm:px-12`}>
				<div className="rounded border border-ct-secondary-100 bg-ct-secondary-100/10 px-6 py-6"> */}
			<header className="mb-5 flex w-full flex-col gap-10 md:flex-row">
				<Heading className="text-ct-neutral-dark-700">Tu Balance</Heading>

				<div className="mt-auto w-full md:ml-auto md:max-w-xs">
					<Select label="Currency" onChange={onChangeCurrency} colorScheme="secondary">
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
			{/* </div>
			</div> */}
		</main>
	);
}
