import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
	mutation createTask($projectId: ID!, $title: String!, $description: String!, $status: TaskStatus!) {
		createTask(projectId: $projectId, title: $title, description: $description, status: $status) {
			id
		}
	}
`;
