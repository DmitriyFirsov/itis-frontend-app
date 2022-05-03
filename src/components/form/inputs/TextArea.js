import React from 'react';
import BaseInput from './BaseInput';
import styled from 'styled-components';

const StyledBaseInput = styled(BaseInput)`
	> textarea {
		resize: vertical;
	}
`;

export default function TextArea(props) {
	return <StyledBaseInput inputAs={'textarea'} {...props} />;
}
