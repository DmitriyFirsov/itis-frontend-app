import React, { /* useState, */ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuthUser from 'globals/AuthUser';
import useCreateProject from 'hooks/mutations/useCreateProject';
import useRemoveProject from 'hooks/mutations/useRemoveProject';
import useCurrentUser from 'hooks/query/useCurrentUser';

import DefaultLayout from 'components/Layouts/DefaultLayout/DefaultLayout';
import EntityListWrapper from 'components/entity/EntityListWrapper/EntityListWrapper';
import EntityCard from 'components/entity/EntityCard';
import Button from 'components/form/inputs/Button';

const INITIAL_FORM_STATE = {
	name: 'New task 5',
	description: 'desc'
};

export default function Index() {
	const { dispatch, state: AuthUserState } = useAuthUser();
	const navigate = useNavigate();
	const handleLogoutClick = () => {
		dispatch({ type: 'logout' });
		navigate('/login');
	};
	// const [formState, setFormState] = useState(INITIAL_FORM_STATE);

	const { create } = useCreateProject();
	const { remove } = useRemoveProject();
	const { currentUser } = useCurrentUser();

	const handleClick = async (event) => {
		event.preventDefault();

		await create(INITIAL_FORM_STATE.name, INITIAL_FORM_STATE.description);
	};

	useEffect(() => {
		if (!AuthUserState.user) {
			navigate('/login');
		}
	}, [AuthUserState.user]);

	return (
		<DefaultLayout title="Home page">
			<Button onClick={handleLogoutClick}>Logout</Button>
			<Button onClick={handleClick}>Create project</Button>
			<EntityListWrapper>
				{currentUser?.projects?.map((project) => (
					<EntityCard
						key={project.id}
						id={project.id}
						title="Project"
						name={project.name}
						description={project.description}
						onRemoveClick={remove}
					/>
				))}
			</EntityListWrapper>
		</DefaultLayout>
	);
}
