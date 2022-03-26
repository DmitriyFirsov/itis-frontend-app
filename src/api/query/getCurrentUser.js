import { gql } from '@apollo/client';
import project from '../fragments/project';

export default gql`
	query currentUser {
		me {
			avatarUrl
			email
			firstName
			id
			lastName
			projects {
				...ProjectFragment
			}
		}
	}
	${project}
`;
