import React, { /* useState, */ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuthUser from 'globals/AuthUser';
import useCreateProject from 'hooks/mutations/useCreateProject';
import useRemoveProject from 'hooks/mutations/useRemoveProject';
import useUpdateProject from 'hooks/mutations/useUpdateProject';

import DefaultLayout from 'components/Layouts/DefaultLayout/DefaultLayout';
import EntityListWrapper from 'components/entity/EntityListWrapper/EntityListWrapper';
import EntityCard from 'components/entity/EntityCard';
import CreateEntityBlock from 'components/entity/CreateEntityBlock';
import { useApolloClient } from '@apollo/client';

export default function Index() {
	const { user, isLoading } = useAuthUser();

	const client = useApolloClient();
	const navigate = useNavigate();
	const handleLogoutClick = async () => {
		localStorage.clear();
		await client.clearStore();
		navigate('/login');
	};

	const { create, loading, error } = useCreateProject();
	const { remove } = useRemoveProject();
	const { update } = useUpdateProject();

	useEffect(() => {
		if (isLoading === false && !user) {
			navigate('/login');
		}
	}, [user, isLoading]);

	return (
		<DefaultLayout title="Home page">
			<CreateEntityBlock entity="project" handleLogoutClick={handleLogoutClick} createRequest={create} isLoading={loading} error={error} />
			<EntityListWrapper>
				{user?.projects?.map(({ id, name, description }) => (
					<EntityCard
						key={id}
						id={id}
						title="Project"
						name={name}
						description={description}
						onRemoveClick={remove}
						onUpdateClick={update}
					/>
				))}
			</EntityListWrapper>
		</DefaultLayout>
	);
}
