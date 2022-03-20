import { gql } from '@apollo/client';

export default gql`
	fragment ProjectFragment on Project {
		createdAt
		creator {
			avatarUrl
			email
			firstName
			id
			lastName
		}
		description
		id
		name
		updatedAt
		users {
			avatarUrl
			email
			firstName
			id
			lastName
		}
	}
`;
