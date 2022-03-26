import { gql } from '@apollo/client';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants/authKeys';
import { USER_ME_QUERY } from '../query/currentUser';

const SIGN_UP_MUTATION = gql`
	mutation signUp($email: String!, $password: String!, $firstName: String, $lastName: String) {
		signup(input: { email: $email, password: $password, firstName: $firstName, lastName: $lastName }) {
			accessToken
			refreshToken
		}
	}
`;

export default function signUp(client, params) {
	return client.mutate({
		mutation: SIGN_UP_MUTATION,
		variables: params,
		refetchQueries: ({
			data: {
				signup: { accessToken, refreshToken }
			}
		}) => {
			localStorage.setItem(ACCESS_TOKEN, accessToken);
			localStorage.setItem(REFRESH_TOKEN, refreshToken);
			return [USER_ME_QUERY];
		}
	});
}
