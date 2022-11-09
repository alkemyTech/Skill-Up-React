import { motion } from 'framer-motion';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import React from 'react';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { IoIosSend } from 'react-icons/io';
import { Button } from 'src/components/Button';
import { Pagination } from 'src/components/Pagination';
import { Select } from 'src/components/Select';
import { Input } from 'src/components/SignInForm/Input';
import { Text } from 'src/components/Text';
import { MovementType } from 'src/models/movementType.model';
import { useMovementsFilters } from './useMovementsFilters';
import { useTransactionsFindAllQuery } from './useTransactionsFindAllQuery';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

export default function TransactionsPage() {
	const { data: transactionPageList, hasNextPage, fetchNextPage } = useTransactionsFindAllQuery();
	const hasOtherPageParam = !!transactionPageList?.pageParams.at(-1);
	const transactionListMerged = transactionPageList?.pages.map((page) => page.data).flat();
	const currencyCodes = Array.from(new Set(transactionPageList?.pages.map((page) => page.currencyCode).flat()));
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
	} = useMovementsFilters(transactionListMerged);

	React.useEffect(() => {
		if (hasNextPage || (hasNextPage && hasOtherPageParam)) fetchNextPage();
	}, [hasNextPage, hasOtherPageParam]);

	if (!transactionPageList) {
		return <></>;
	}

	return (
		<main className="mx-auto max-w-screen-xl px-4 py-8">
			<h1 className="mb-8">Movements</h1>

			<fieldset className="my-8 grid gap-4 rounded border p-4 md:grid-cols-[repeat(4,1fr)]">
				<Text as="legend" className="px-2">
					Filters
				</Text>

				<Select
					label="Currency"
					name={filterFieldsNames.currency}
					id=""
					value={filterFields.currency}
					className=""
					onChange={onFilterFieldChange}
				>
					{currencyCodes.map((c) => (
						<option key={c} value={c}>
							{c}
						</option>
					))}
				</Select>

				<Select
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
					label="Concept"
					type="text"
					name={filterFieldsNames.conceptFilter}
					value={filterFields.conceptFilter}
					onChange={onFilterFieldChange}
				/>

				<Button onClick={clearFilters}>Clear filters</Button>
			</fieldset>

			<Pagination
				className="mx-auto my-4 max-w-md sm:mr-0"
				totalPages={totalPages}
				currentPage={currentPage}
				onChangePage={changePage}
				changeItemsPerPage={onItemsPerPageChange}
				itemsPerPag={itemsPerPage}
			/>

			<ol className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,28rem),1fr))] gap-4">
				{transactionListPaginated?.map((v) => (
					<motion.li
						key={v.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<article
							className={`${
								v.type === MovementType.topup
									? 'border-ct-primary-400'
									: v.type === MovementType.payment
									? 'border-ct-secondary-400'
									: 'border-ct-neutral-dark-800'
							} grid grid-cols-[auto_1fr_auto] items-center gap-2 rounded border p-2`}
						>
							<i className="overflow-hidden rounded-full border text-5xl">
								{v.isTransference ? (
									<IoIosSend className="text-ct-neutral-dark-800" />
								) : v.type === MovementType.payment ? (
									<GiPayMoney className="text-ct-secondary-400" />
								) : (
									v.type === MovementType.topup && <GiReceiveMoney className="text-ct-primary-500" />
								)}
							</i>

							<Text as="p">{v.conceptDecoded}</Text>
							<div>
								<Text as="p" className="text-right">
									{v.amount} {v.currencyCode}
								</Text>
								<Text title={`${new Date(v.date).toLocaleDateString()} ${new Date(v.date).toLocaleTimeString()}`}>
									{timeAgo.format(new Date(v.date))}
								</Text>
							</div>
						</article>
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
