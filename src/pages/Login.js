import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';

import useAuthUser from 'globals/AuthUser';
import signIn from 'api/mutations/signIn';

import OneFormLayout from 'components/Layouts/OneFormLayout';
import Button from 'components/form/inputs/Button';
import PasswordField from 'components/form/formFields/PasswordField';
import TextField from 'components/form/formFields/TextField';
import useHandleChangeField from 'components/form/utils/useHandleChangeField';

import emailValidator from 'validators/stringValidators/emailValidator';
import useSharedValidation from 'validators/useSharedValidation';
import getFirstError from 'validators/helpers/getFirstError';
import emptyValidator from 'validators/stringValidators/emptyValidator';
import minLengthValidatorBuilder from 'validators/stringValidators/minLengthValidatorBuilder';
import useRequiredFieldsFilled from 'validators/useRequiredFieldsFilled';
import FormError from '../components/form/FormError';

const INITIAL_FORM_STATE = { login: '', password: '' };
const VALIDATION_CONFIG = {
	login: (value) => getFirstError([emptyValidator, emailValidator], value),
	password: (value) => getFirstError([emptyValidator, minLengthValidatorBuilder(8)], value)
};

export default function Login() {
	const [formState, setFormState] = useState(INITIAL_FORM_STATE);
	const [errorsState, isHasClientErrors] = useSharedValidation(formState, VALIDATION_CONFIG);

	const isRequiredFieldFilled = useRequiredFieldsFilled(formState, Object.keys(INITIAL_FORM_STATE));

	const handleEvents = useHandleChangeField(setFormState);

	const { user, isLoading } = useAuthUser();
	const client = useApolloClient();

	const [isSignInLoading, setIsSignInLoading] = useState(false);
	const [signInError, setSignInError] = useState();
	const handleSignIn = async (event) => {
		event.preventDefault();
		if (!isHasClientErrors && isRequiredFieldFilled) {
			setIsSignInLoading(true);
			try {
				await signIn(client, formState);
			} catch (error) {
				setSignInError(error);
			} finally {
				setIsSignInLoading(false);
			}
		}
	};

	const navigate = useNavigate();
	useEffect(() => {
		if (isLoading === false && user) {
			navigate('/', { replace: true });
		}
	}, [isLoading, user]);

	return (
		<OneFormLayout>
			{signInError && <FormError>{signInError.message}</FormError>}
			<TextField id="login" label="email" value={formState.login} error={errorsState.login} onChange={handleEvents} onBlur={handleEvents} />
			<PasswordField
				id="password"
				label="password"
				value={formState.password}
				error={errorsState.password}
				onChange={handleEvents}
				onBlur={handleEvents}
			/>
			<Button type="submit" disabled={isHasClientErrors || isSignInLoading || !isRequiredFieldFilled || isLoading} onClick={handleSignIn}>
				Log in
			</Button>
		</OneFormLayout>
	);
}
