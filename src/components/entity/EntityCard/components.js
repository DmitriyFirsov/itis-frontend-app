import styled from 'styled-components';

const defaultBorderRadius = '8px';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid black;
	border-radius: ${defaultBorderRadius};
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #e3c09b;
	padding: 0.5rem;
	border-top-left-radius: ${defaultBorderRadius};
	border-top-right-radius: ${defaultBorderRadius};
	border-bottom: 1px solid black;
`;

export const Title = styled.div``;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	> :nth-child(n):not(:last-child) {
		margin-right: 0.5em;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	background-color: #d7cbd4;

	border-bottom-left-radius: ${defaultBorderRadius};
	border-bottom-right-radius: ${defaultBorderRadius};

	> * {
		margin-bottom: 0.5rem;
	}
`;

export const StyledImage = styled.img`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20px;
	height: 20px;
`;
