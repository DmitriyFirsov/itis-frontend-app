import React from 'react';
import { useParams } from 'react-router-dom';

import DefaultLayout from 'components/Layouts/DefaultLayout/DefaultLayout';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../../api/query/getProject';

const useCurrentProject = (id) => {
	const { data, loading, error } = useQuery(GET_PROJECT, {
		variables: {
			id
		}
	});

	return {
		data: data?.me?.projects[0],
		isLoading: loading,
		error
	};
};

export default function ProjectPage() {
	const { id } = useParams();
	const { data, isLoading, error } = useCurrentProject(id);

	return (
		<DefaultLayout title={isLoading ? '' : `Project: ${data?.name}`}>
			{error && <div>{error.message}</div>}
			{data?.description && <div>{data.description}</div>}
		</DefaultLayout>
	);
}
