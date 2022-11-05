import { IdSchema } from 'src/schemas/id.schema';
import { UsersCreateSchema } from 'src/schemas/userCreate.schema';
import { UserEndpointSchema } from 'src/schemas/userEndpoint.schema';
import { constants } from 'src/utils/constants';
import { HTTPVerbs } from 'src/utils/HTTPVerbs';
import { z } from 'zod';

const userEditSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	email: z.string(),
	password: z.string(),
	roleId: IdSchema,
});

export const UsersRepository = (signal) => {
	const baseUrl = constants.API_URL + 'users';

	return {
		register: async (userCreate) => {
			const body = UsersCreateSchema.parse(userCreate);

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

			const validatedResult = UserEndpointSchema.parse(result);

			return {
				...validatedResult,
				createdAt: new Date(validatedResult.createdAt),
				updatedAt: new Date(validatedResult.updatedAt),
			};
		},

		edit: async (editUser) => {
			const body = userEditSchema.parse(editUser);

			const response = await fetch(baseUrl, {
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json',
				},
				signal,
				method: HTTPVerbs.PUT,
				body: JSON.stringify(body),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error);
			}
			// Thsi user iformation is not updated
			const validatedResult = UserEndpointSchema.parse(result);
			return validatedResult;
		},
	};
};
