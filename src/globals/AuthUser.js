import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useQuery } from '@apollo/client';

import { USER_ME_QUERY } from 'api/query/currentUser';

const UserContext = createContext();

export function AuthUser({ children }) {
	const { data, loading } = useQuery(USER_ME_QUERY);
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
