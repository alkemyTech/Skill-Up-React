import { Transaction } from 'src/models/transaction.model';

export function TransactionEndpointToModel(TransactionEndpoint) {
	return Transaction.create({ ...TransactionEndpoint, amount: parseInt(TransactionEndpoint.amount, 10) });
}
