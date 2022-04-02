import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
	border: unset;
	background: unset;
	outline: unset;
	width: 100%;
	font-size: 1em;
`;

export const Container = styled.div(({ $isError, $disabled }) => {
	return css`
		display: inline-flex;
		flex-direction: row;
		align-items: center;

		width: 100%;
		min-height: 30px;
		background-color: white;

		padding: 0.2em;
		border: 3px solid ${$isError ? 'red' : '#bb7db2'};
		border-radius: 6px;

		${$disabled &&
		css`
			border-color: grey;
		`}
	`;
});

export const SlotContainer = styled.div`
	display: flex;
	align-items: center;
`;
