import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useApolloClient, useQuery } from '@apollo/client';

import { USER_ME_QUERY } from 'api/query/currentUser';

const UserContext = createContext();

export function AuthUser({ children }) {
	const { data, loading, refetch } = useQuery(USER_ME_QUERY);
	const client = useApolloClient();
	useEffect(() => {
		const cb = client.onClearStore(async () => {
			await refetch();
		});
		return () => {
			cb();
		};
	}, []);
	const value = useMemo(
		() => ({
			user: data ? data.me : null,
			isLoading: loading
		}),
		[data, loading]
	);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default function useAuthUser() {
	return useContext(UserContext);
}
