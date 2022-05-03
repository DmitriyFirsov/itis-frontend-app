import styled from 'styled-components';

export const ProjectDescriptionContainer = styled.div`
	margin: 2em;
	font-size: 1.25em;
`;

export const TasksContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 2em;
	justify-content: space-around;
`;

export const TaskGroupContainer = styled.div`
	padding: 0.85em;
	border-radius: 8px;
	background: aliceblue;
`;

export const TaskGroupTitle = styled.h2`
	font-size: 1.25em;
	padding-bottom: 0.3em;
`;

export const TaskListContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
`;

export const TaskContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
  padding: 0.4em;
  border-radius: 8px;
  border: 1px solid darkgray;
`;
