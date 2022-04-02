import { useMutation } from '@apollo/client';
import updateProject from 'api/mutations/updateProject';
import getCurrentUser from 'api/query/getCurrentUser';

const useUpdateProject = () => {
	const [mutation, { data }] = useMutation(updateProject, {
		refetchQueries: [{ query: getCurrentUser }]
	});

	const update = async (id, name, description) => {
		await mutation({ variables: { id, name, description } });
	};

	return {
		update,
		data
	};
};

export default useUpdateProject;
