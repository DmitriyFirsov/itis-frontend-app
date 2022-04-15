import React from 'react';

import PasswordInput from '../inputs/PasswordInput';
import BaseWrapper from './components/BaseWrapper';
import ShowError from './components/ShowError';

export default function PasswordField({ label, error, ...props }) {
	return (
		<BaseWrapper label={label}>
			<PasswordInput isError={!!error} {...props} />
			<ShowError error={error} mt={0.25} />
		</BaseWrapper>
	);
}
