import React from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import groupBy from 'lodash/groupBy';
import startCase from 'lodash/startCase';
import lowerCase from 'lodash/lowerCase';
import upperFirst from 'lodash/upperFirst';

import FormError from 'components/form/FormError';
import DefaultLayout from 'components/Layouts/DefaultLayout/DefaultLayout';

import { GET_PROJECT } from 'api/query/getProject';
import { CREATE_TASK } from 'api/mutations/createTask';
import {
	ProjectDescriptionContainer,
	TaskContainer,
	TaskGroupContainer,
	TaskGroupTitle,
	TaskListContainer,
	TasksContainer
} from './components';
import useCurrentProject from './useCurrentProject';


export default function ProjectPage() {
	const { id } = useParams();
	const { data, isLoading, error } = useCurrentProject(id);
	const [mutation] = useMutation(CREATE_TASK, {
		refetchQueries: [{ query: GET_PROJECT, variables: { id } }]
	});

	const handleClick = async () => {
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
			{data?.description && <ProjectDescriptionContainer>{data.description}</ProjectDescriptionContainer>}
			{error && <FormError>{error.message}</FormError>}
			{data?.tasks && (
				<TasksContainer>
					{Object.entries(groupBy(data.tasks, ({ status }) => status)).map(([status, tasks]) => {
						return (
							<TaskGroupContainer key={status}>
								<TaskGroupTitle>{upperFirst(lowerCase(startCase(status)))}</TaskGroupTitle>
								<TaskListContainer>
									{tasks.map(({ id, title, description }) => {
										return (
											<TaskContainer key={id}>
												<div>
													{id} {title}
												</div>
												<div>{description}</div>
											</TaskContainer>
										);
									})}
								</TaskListContainer>
							</TaskGroupContainer>
						);
					})}
				</TasksContainer>
			)}
			<button onClick={handleClick}>test button</button>
		</DefaultLayout>
	);
}
