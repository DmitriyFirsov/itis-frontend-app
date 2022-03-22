import { gql } from '@apollo/client';

export default gql`
	mutation destroyProject($projectId: ID!) {
		destroyProject(projectId: $projectId)
	}
`;
