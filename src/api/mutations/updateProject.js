import { gql } from '@apollo/client';

export default gql`
	mutation updateProject($id: ID!, $name: String!, $description: String) {
		updateProject(projectId: $id, name: $name, description: $description) {
			description
			id
			name
		}
	}
`;
