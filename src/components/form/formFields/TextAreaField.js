import React from 'react';

import BaseWrapper from './components/BaseWrapper';
import ShowError from './components/ShowError';
import TextArea from '../inputs/TextArea';

export default function TextAreaField({ error, label, ...other }) {
	return (
		<BaseWrapper label={label}>
			<TextArea {...other} />
			<ShowError error={error} mt={0.25} />
		</BaseWrapper>
	);
}
