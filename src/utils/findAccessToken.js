import { AccessTokenSchema } from 'src/schemas/accessToken.schema';
import { LSKeys } from 'src/utils/localStorageKeys';

export function findAccessToken() {
	let accessToken = window.localStorage.getItem(LSKeys.accessToken);
	accessToken = AccessTokenSchema.parse(accessToken);

	return accessToken;
}
