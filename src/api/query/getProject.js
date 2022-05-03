import { gql } from '@apollo/client';

export const GET_PROJECT = gql`
	query getProject($id: ID!) {
		me {
			id
			projects(id: $id) {
				id
				name
				description
				tasks {
					id
					status
					title
					description
				}
			}
		}
	}
`;
