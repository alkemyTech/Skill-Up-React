export const authQueryKeys = {
	auth: ['AUTH'],
	validateToken: (hasUserData) => [...authQueryKeys.auth, 'VALIDATE_TOKEN', hasUserData],
};
