import React from 'react';

import { Container, SlotContainer, StyledInput } from './components';

export default function BaseInput({ className, leftSlot, rightSlot, isError, disabled, ...props }) {
	return (
		<Container className={className} $isError={isError} $disabled={disabled}>
			{leftSlot && <SlotContainer>{leftSlot}</SlotContainer>}
			<StyledInput disabled={disabled} {...props} />
			{rightSlot && <SlotContainer>{rightSlot}</SlotContainer>}
		</Container>
	);
}
