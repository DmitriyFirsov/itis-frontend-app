import { useQuery } from '@apollo/client';
import getCurrentUser from 'api/query/getCurrentUser';

const useCurrentUser = () => {
	const { data } = useQuery(getCurrentUser);

	return {
		currentUser: data?.me || {}
	};
};

export default useCurrentUser;
