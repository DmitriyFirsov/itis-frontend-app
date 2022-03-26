import { gql } from '@apollo/client';

export default gql`
	mutation destroyProject($id: ID!) {
		destroyProject(projectId: $id)
	}
`;
