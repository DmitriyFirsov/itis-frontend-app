import React from 'react';

import TextField from 'components/form/formFields/TextField';
import Button from 'components/form/inputs/Button';

import { Wrapper, Header, Form, ButtonWrapper, StyledImage } from './components';
import EditImg from './images/pen.png';
import RemoveImg from './images/trash-bin.png';

export default function EntityCard({ title, name, id, description, onRemoveClick }) {
	return (
		<Wrapper>
			<Header>
				{title}
				<ButtonWrapper>
					<Button>
						<StyledImage src={EditImg} alt="presentation" />
					</Button>
					<Button onClick={() => onRemoveClick(id)}>
						<StyledImage src={RemoveImg} alt="presentation" />
					</Button>
				</ButtonWrapper>
			</Header>
			<Form>
				<TextField label="Name" value={name} disabled />
				<TextField label="Description" value={description} disabled />
			</Form>
		</Wrapper>
	);
}
