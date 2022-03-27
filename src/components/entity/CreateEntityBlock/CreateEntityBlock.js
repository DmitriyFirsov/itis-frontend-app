import React, { useState } from 'react';

import useHandleChangeField from 'components/form/utils/useHandleChangeField';
import TextField from 'components/form/formFields/TextField';

import { Wrapper, CreateBlock, Title, Form, StyledButton } from './components';

const INITIAL_FORM_STATE = { name: '', description: '' };

export default function CreateEntityBlock({ entity, handleLogoutClick, createRequest }) {
	const [formState, setFormState] = useState(INITIAL_FORM_STATE);
	const handleEvents = useHandleChangeField(setFormState);

	const handleCreateClick = async (event) => {
		event.preventDefault();

		await createRequest(formState.name, formState.description);
		setFormState(INITIAL_FORM_STATE);
	};

	return (
		<Wrapper>
			<CreateBlock>
				<Title>{`Create ${entity} form:`}</Title>
				<Form>
					<TextField id="name" label="Name*" value={formState.name} onChange={handleEvents} onBlur={handleEvents} required></TextField>
					<TextField
						id="description"
						label="Description"
						value={formState.description}
						onChange={handleEvents}
						onBlur={handleEvents}
					></TextField>
					<StyledButton type="submit" onClick={(event) => handleCreateClick(event)} disabled={formState.name.trim() === ''}>
						Create
					</StyledButton>
				</Form>
			</CreateBlock>
			<StyledButton onClick={handleLogoutClick}>Logout</StyledButton>
		</Wrapper>
	);
}
