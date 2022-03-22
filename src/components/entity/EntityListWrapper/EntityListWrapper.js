import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div(
	() => css`
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-left: 3rem;

		> :nth-child(n) {
			margin-bottom: 1rem;
			margin-right: 3rem;
		}
	`
);

export default function EntityListWrapper({ children }) {
	return <Wrapper>{children}</Wrapper>;
}
