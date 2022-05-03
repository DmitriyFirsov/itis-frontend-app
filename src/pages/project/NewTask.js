import React from 'react';
import { useParams } from 'react-router-dom';

import OneFormLayout from 'components/Layouts/OneFormLayout';
import TextField from '../../components/form/formFields/TextField';
import RadioField from '../../components/form/formFields/RadioField';
import TextAreaField from '../../components/form/formFields/TextAreaField';
import { statusToTitle } from './utils/statusToTitle';
import Button from '../../components/form/inputs/Button';

const STATUSES = ['NOT_STARTED', 'STARTED', 'FINISHED'];
const STATUSES_OPTIONS = STATUSES.map((status) => ({
	id: status,
	name: statusToTitle(status)
}));

const INITIAL_STATE = {
	title: '',
	description: '',
	status: STATUSES[0],
};


export default function NewTask() {
	const { id } = useParams();




	return (
		<OneFormLayout>
			<TextField label={'Title'} id={'title'} />
			<TextAreaField label={'Description'} id={'description'} />
			<RadioField label={'Status *'} options={STATUSES_OPTIONS} />
			<Button>Create task</Button>
		</OneFormLayout>
	);
}
