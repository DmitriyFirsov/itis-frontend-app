import { gql } from '@apollo/client';

const CREATE_PROJECT_MUTATION = gql`
  mutation createProject($name: String!, $description: String) {
    createProject(name: $name, description: $description) {
      description
      name
      users {
        avatarUrl
        email
        firstName
        id
        lastName
      }
    }
  }
`;

export default async function createProject(client, params) {
	const { data } = await client.mutate({ mutation: CREATE_PROJECT_MUTATION, variables: params });

	return data;
}
