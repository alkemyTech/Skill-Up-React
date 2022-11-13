export const transactionsQueryKeys = /**@type {const}*/ ({
	transactions: ['transactions'],
	transactionsFindById: (transactionId) => [...transactionsQueryKeys.transactions, transactionId],
});
