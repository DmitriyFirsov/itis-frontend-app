import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';

import useAuthUser from 'globals/AuthUser';
import createProject from 'api/mutations/createProject';

import DefaultLayout from 'components/Layouts/DefaultLayout/DefaultLayout';
import Button from 'components/form/inputs/Button';

const INITIAL_FORM_STATE = {
	name: 'New task 2',
	description: 'desc'
};

export default function Index() {
	const { /* dispatch, */ state: AuthUserState } = useAuthUser();
	const navigate = useNavigate();
	// const handleClick = () => {
	// 	dispatch({ type: 'logout' });
	// 	navigate('/login');
	// };
	const [formState, setFormState] = useState(INITIAL_FORM_STATE);

	const client = useApolloClient();
	const handleClick = async (event) => {
		event.preventDefault();

		await createProject(client, formState);
	};

	useEffect(() => {
		if (!AuthUserState.user) {
			navigate('/login');
		}
	}, [AuthUserState.user]);

	return (
		<DefaultLayout title="Home page">
			{/* <Link to={'/login'}> Go to login page </Link>
			<Link to={'/registration'}> Go to registration page </Link>
			<Button onClick={handleClick}> Logout </Button> */}
			<Button onClick={handleClick}>Create project</Button>
			<ul>
				{AuthUserState?.user?.projects?.map((project) => (
					<li key={project.id}>{project.name}</li>
				))}
			</ul>
		</DefaultLayout>
	);
}
