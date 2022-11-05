import { UserEndpointSchema, UsersPOSTEndpointSchema } from 'src/schemas/UserSchema';
import { constants } from 'src/utils/constants';
import { HTTPVerbs } from 'src/utils/HTTPVerbs';

export const UserRepository = (signal) => {
	const baseUrl = constants.API_URL + 'users';
	return {
		registerUser: async (userPostEndPoint) => {
			try {
				const body = UsersPOSTEndpointSchema.parse(userPostEndPoint);

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
					return result.error;
				}

				const validatedResult = UserEndpointSchema.parse(result);

				return {
					...validatedResult,
					createdAt: new Date(validatedResult.createdAt),
					updatedAt: new Date(validatedResult.updatedAt),
				};
			} catch (error) {
				return error;
			}
		},
	};
};

