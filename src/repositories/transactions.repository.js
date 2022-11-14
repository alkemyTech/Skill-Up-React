import { TransactionEndpointToModel } from 'src/adapters/TransactionEndpointToModel.adapter';
import { AuthRepository } from 'src/repositories/auth.repository';
import { IdSchema } from 'src/schemas/id.schema';
import { TransactionCreateSchema } from 'src/schemas/transactionCreate.schema';
import { TransactionEditSchema } from 'src/schemas/transactionEdit.schema';
import { TransactionEndpointSchema } from 'src/schemas/transactionEndpoint.schema';
import { TransactionGETEndpointSchema } from 'src/schemas/TransactionGETEndpoint.schema';
import { TransactionPOSTEndpointSchema } from 'src/schemas/transactionPOSTEndpoint.schema';
import { adminCredentials } from 'src/utils/EnvVariables';
import { constants } from 'src/utils/constants';
import { findAccessToken } from 'src/utils/findAccessToken';
import { formatAccessToken } from 'src/utils/formatAccessToken';
import { HTTPVerbs } from 'src/utils/HTTPVerbs';

export const TransactionsRepository = (signal) => {
	const baseUrl = constants.API_URL + '/transactions';
	return {
		create: async (createTransaction) => {
			const body = TransactionCreateSchema.parse(createTransaction);

			const response = await fetch(baseUrl, {
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json',
				},
				signal,
				method: HTTPVerbs.POST,
				body: JSON.stringify(body),
			});

			const result = await response.json();
			if (!response.ok) {
				throw new Error(result.error);
			}

			const validatedResult = TransactionPOSTEndpointSchema.parse(result);
			return validatedResult;
		},

		findAllPaginated: async ({ page }) => {
			const accessToken = findAccessToken();

			const response = await fetch(`${constants.API_URL}${page}`, {
				headers: { accept: 'application/json', Authorization: formatAccessToken(accessToken) },
				signal,
				method: HTTPVerbs.GET,
			});

			const result = await response.json();
			if (!response.ok) {
				throw new Error(result.error);
			}

			const validatedResult = TransactionGETEndpointSchema.parse(result);
			const transactionList = validatedResult.data.map(TransactionEndpointToModel);
			return {
				...validatedResult,
				data: transactionList,
				currencyCode: Array.from(new Set(transactionList.map((t) => t.currencyCode))),
			};
		},

		edit: async (editTransaction) => {
			const body = TransactionEditSchema.parse(editTransaction);

			const { accessToken } = await AuthRepository(signal).login(adminCredentials, false);

			const response = await fetch(`${baseUrl}/${editTransaction.id}`, {
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json',
					Authorization: formatAccessToken(accessToken),
				},
				signal,
				method: HTTPVerbs.PUT,
				body: JSON.stringify(body),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error);
			}

			const validatedResult = TransactionEndpointSchema.parse(result);
			return TransactionEndpointToModel(validatedResult);
		},

		findById: async (movementId) => {
			const _movementId = IdSchema.parse(parseInt(movementId, 10));
			const accessToken = findAccessToken();
			const response = await fetch(`${baseUrl}/${_movementId}`, {
				headers: {
					accept: 'application/json',
					Authorization: formatAccessToken(accessToken),
				},
				signal,
				method: HTTPVerbs.GET,
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error);
			}

			const validatedResult = TransactionEndpointSchema.parse(result);
			return TransactionEndpointToModel(validatedResult);
		},
	};
};
