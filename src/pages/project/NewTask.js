import React from 'react';
import { useParams } from 'react-router-dom';

import OneFormLayout from 'components/Layouts/OneFormLayout';
import TextField from '../../components/form/formFields/TextField';
import RadioField from '../../components/form/formFields/RadioField';

export default function NewTask() {
	const { id } = useParams();
	return (
		<OneFormLayout>
			<TextField label={'Title'} />
			<TextField label={'Description'} />
			<RadioField
				label={'Status *'}
				options={[
					{
						id: 'NOT_STARTED',
						name: 'NOT_STARTED'
					},
					{
						id: 'STARTED',
						name: 'STARTED'
					},
					{
						id: 'FINISHED',
						name: 'FINISHED'
					}
				]}
			/>
		</OneFormLayout>
	);
}
