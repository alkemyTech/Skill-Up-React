import { useInfiniteQuery } from '@tanstack/react-query';
import { transactionsQueryKeys } from 'src/models/transactions.queryKeys';
import { TransactionsRepository } from 'src/repositories/transactions.repository';

export function useTransactionsFindAllQuery() {
	return useInfiniteQuery({
		queryKey: transactionsQueryKeys.transactions,
		queryFn: async ({ pageParam = '/transactions/?page=0', signal }) => {
			const result = await TransactionsRepository(signal).findAllPaginated({ page: pageParam });
			return result;
		},
		getNextPageParam: (lastPage) => lastPage.nextPage,
	});
}
