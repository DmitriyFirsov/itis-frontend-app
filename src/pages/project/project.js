import React from 'react';
import { useParams } from 'react-router-dom';
import groupBy from 'lodash/groupBy';

import DefaultLayout from 'components/Layouts/DefaultLayout/DefaultLayout';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PROJECT } from '../../api/query/getProject';
import { CREATE_TASK } from '../../api/mutations/createTask';

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
	const [mutation] = useMutation(CREATE_TASK, {
		refetchQueries: [{ query: GET_PROJECT, variables: { id } }]
	});

	const handleClick = async () => {
		console.log(id);
		await mutation({
			variables: {
				projectId: +id,
				title: 'tests title',
				description: 'some description',
				status: 'STARTED'
			}
		});
	};

	return (
		<DefaultLayout title={isLoading ? '' : `Project: ${data?.name}`}>
			{error && <div>{error.message}</div>}
			{data?.description && <div>{data.description}</div>}
			{data?.tasks && (
				<div>
					{Object.entries(groupBy(data.tasks, ({ status }) => status)).map(([status, tasks]) => {
						return (
							<div key={status}>
								<div>{status}</div>
								<div>
									{tasks.map(({ id, title, description }) => {
										return (
											<div key={id}>
												<div>
													{id} {title}
												</div>
												<div>{description}</div>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			)}
			<button onClick={handleClick}>test button</button>
		</DefaultLayout>
	);
}
