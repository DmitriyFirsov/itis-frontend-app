import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useAuthUser from '../globals/AuthUser';

export default function withAuth(Component, redirectTo = '/') {
	return function WithAuthComponent() {
		const { user, isLoading } = useAuthUser();

		const navigate = useNavigate();
		useEffect(() => {
			if (isLoading === false && user) {
				navigate(redirectTo, { replace: true });
			}
		}, [isLoading, user]);

		return <Component />;
	};
}
