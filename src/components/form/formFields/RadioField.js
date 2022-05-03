import React from 'react';

import BaseWrapper from 'components/form/formFields/components/BaseWrapper';
import ShowError from 'components/form/formFields/components/ShowError';

import RadioButton from 'components/form/inputs/RadioButton';

export default function RadioField({ label, error, ...other }) {
	return (
		<BaseWrapper label={label}>
			<RadioButton {...other} />
			<ShowError error={error} mt={0.25} />
		</BaseWrapper>
	);
}
