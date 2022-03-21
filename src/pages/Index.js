import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import useAuthUser from 'globals/AuthUser';
// import createProject from 'api/mutations/createProject';
import useCreateProject from 'hooks/mutations/useCreateProject';
import useCurrentUser from 'hooks/query/useCurrentUser';

import DefaultLayout from 'components/Layouts/DefaultLayout/DefaultLayout';
import EntityListWrapper from 'components/EntityListWrapper/EntityListWrapper';
import EntityCard from 'components/EntityCard';
import Button from 'components/form/inputs/Button';

const INITIAL_FORM_STATE = {
	name: 'New task 4',
	description: 'desc'
};

export default function Index() {
	const { dispatch, state: AuthUserState } = useAuthUser();
	const navigate = useNavigate();
	const handleLogoutClick = () => {
		dispatch({ type: 'logout' });
		navigate('/login');
	};
	const [formState, setFormState] = useState(INITIAL_FORM_STATE);

	const { create } = useCreateProject();
	const { currentUser } = useCurrentUser();

	const handleClick = async (event) => {
		event.preventDefault();

		await create(formState.name, formState.description);
	};

	useEffect(() => {
		if (!AuthUserState.user) {
			navigate('/login');
		}
	}, [AuthUserState.user]);

	return (
		<DefaultLayout title="Home page">
			{/* <Link to={'/login'}> Go to login page </Link>
			<Link to={'/registration'}> Go to registration page </Link> */}
			<Button onClick={handleLogoutClick}>Logout</Button>
			<Button onClick={handleClick}>Create project</Button>
			<EntityListWrapper>
				{currentUser?.projects?.map((project) => (
					<EntityCard key={project.id} entityName="Project" name={project.name} description={project.description} />
				))}
			</EntityListWrapper>
		</DefaultLayout>
	);
}
