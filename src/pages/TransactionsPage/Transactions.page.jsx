import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'src/components/Button';
import { Heading } from 'src/components/Heading';
import { MovementCard } from 'src/components/MovementCard';
import { Pagination } from 'src/components/Pagination';
import { Select } from 'src/components/Select';
import { Input } from 'src/components/SignInForm/Input';
import { Text } from 'src/components/Text';
import { MovementType } from 'src/models/movementType.model';
import { useMovementsFilters } from './useMovementsFilters';

export default function TransactionsPage() {
	const movementList = useSelector((state) => state.movements.movementList);
	const currencyList = useSelector((state) => state.movements.currencyList);
	const isLoadedMovementsInfo = useSelector((state) => state.movements.isInfoLoaded);

	const {
		result: transactionListPaginated,
		filterFields,
		filterFieldsNames,
		totalPages,
		currentPage,
		itemsPerPage,
		onFilterFieldChange,
		onItemsPerPageChange,
		changePage,
		clearFilters,
	} = useMovementsFilters(movementList);
	const [showConcept, setShowConcept] = React.useState(false);

	if (!isLoadedMovementsInfo) {
		return <main>skeleton</main>;
	}

	return (
		<main className="mx-auto w-full max-w-screen-xl px-4 py-8 xl:px-0">
			<Heading className="mb-8 text-ct-neutral-dark-700">Movements</Heading>

			<fieldset className="grid gap-4 rounded border border-ct-neutral-dark-100 px-4 pb-4 shadow-md md:grid-cols-[repeat(4,1fr)]">
				<Text as="legend" className="px-2 font-bold tracking-wider">
					Filters
				</Text>

				<Select
					colorScheme="tertiary"
					label="Currency"
					name={filterFieldsNames.currency}
					id=""
					value={filterFields.currency}
					className=""
					onChange={onFilterFieldChange}
				>
					{currencyList.map((c) => (
						<option key={c} value={c}>
							{c}
						</option>
					))}
				</Select>

				<Select
					colorScheme="tertiary"
					label="Operation"
					name={filterFieldsNames.movementType}
					id=""
					className=""
					value={filterFields.movementType}
					onChange={onFilterFieldChange}
				>
					<option value="">All</option>
					{Object.values(MovementType).map((c) => (
						<option key={c} value={c}>
							{c}
						</option>
					))}
				</Select>

				<Input
					colorScheme="tertiary"
					label="Concept"
					type="text"
					name={filterFieldsNames.conceptFilter}
					value={filterFields.conceptFilter}
					onChange={onFilterFieldChange}
				/>

				<Button onClick={clearFilters} colorScheme="tertiary">
					Clear filters
				</Button>
			</fieldset>

			<div className="mx-auto mt-8 grid gap-2 sm:mr-0 sm:grid-cols-[auto_1fr] ">
				<div className="my-2 ml-auto flex items-center sm:ml-0">
					<Input
						label="Show concepts"
						labelPosition="left"
						colorScheme="secondary"
						type="checkbox"
						id="Show all concepts"
						name="Show all concepts"
						value={showConcept}
						onChange={() => setShowConcept((s) => !s)}
					/>
				</div>

				<Pagination
					className="ml-auto w-full sm:max-w-md"
					totalPages={totalPages}
					currentPage={currentPage}
					onChangePage={changePage}
					changeItemsPerPage={onItemsPerPageChange}
					itemsPerPag={itemsPerPage}
				/>
			</div>

			<ol className="my-10 grid grid-cols-[repeat(auto-fill,minmax(min(100%,20rem),1fr))] gap-4">
				{transactionListPaginated?.map((movement) => (
					<motion.li
						key={movement.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<MovementCard {...movement} showConcept={showConcept} />
					</motion.li>
				))}
			</ol>

			<Pagination
				className="mx-auto my-4 max-w-md sm:mr-0"
				totalPages={totalPages}
				currentPage={currentPage}
				onChangePage={changePage}
				changeItemsPerPage={onItemsPerPageChange}
				itemsPerPag={itemsPerPage}
			/>
		</main>
	);
}
