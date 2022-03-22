import { useMutation } from '@apollo/client';
import removeProject from 'api/mutations/removeProject';
import getCurrentUser from 'api/query/getCurrentUser';

const useRemoveProject = () => {
	const [mutation, { data }] = useMutation(removeProject, {
		refetchQueries: [{ query: getCurrentUser }]
	});

	const remove = async (id) => {
		await mutation({ variables: { id } });
	};

	return {
		remove,
		data
	};
};

export default useRemoveProject;
