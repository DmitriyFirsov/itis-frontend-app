import { gql } from '@apollo/client';
import { USER_ME_QUERY } from '../query/currentUser';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants/authKeys';

const SIGN_IN_MUTATION = gql`
	mutation signIn($login: String!, $password: String!) {
		signin(input: { email: $login, password: $password }) {
			accessToken
			refreshToken
		}
	}
`;

export default function signIn(client, params) {
	return client.mutate({
		mutation: SIGN_IN_MUTATION,
		variables: params,
		refetchQueries: ({
			data: {
				signin: { accessToken, refreshToken }
			}
		}) => {
			localStorage.setItem(ACCESS_TOKEN, accessToken);
			localStorage.setItem(REFRESH_TOKEN, refreshToken);
			return [USER_ME_QUERY];
		}
	});
}
