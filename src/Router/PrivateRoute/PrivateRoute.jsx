import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthentication } from 'src/hooks/useAuthentication';
import { AuthRepository } from 'src/repositories/auth.repository';
import { webRoutes } from 'src/utils/web.routes';

export const PrivateRoute = ({ children }) => {
	const navigate = useNavigate();
	const { isAuthenticated, isAuthenticating } = useAuthentication(AuthRepository);

	React.useEffect(() => {
		if (!isAuthenticated && !isAuthenticating) {
			toast.warning('Session expired');
			navigate(webRoutes.login, { replace: true });
		}
	}, [isAuthenticated, isAuthenticating]);

	if (!isAuthenticated || isAuthenticating) {
		return <div />;
	}

	return <>{children}</>;
};
