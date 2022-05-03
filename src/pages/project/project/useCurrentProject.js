import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../../../api/query/getProject';

const useCurrentProject = (id) => {
	const { data, loading, error } = useQuery(GET_PROJECT, {
		variables: {
			id
		}
	});

	return {
		data: data?.me?.projects[0],
		isLoading: loading,
		error
	};
};

export default useCurrentProject;
