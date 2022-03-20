import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';

import useAuthUser from 'globals/AuthUser';
import signUp from 'api/mutations/signUp';

import emailValidator from 'validators/stringValidators/emailValidator';
import useSharedValidation from 'validators/useSharedValidation';
import getFirstError from 'validators/helpers/getFirstError';
import emptyValidator from 'validators/stringValidators/emptyValidator';
import latinNumbersValidator from 'validators/stringValidators/latinNumbersValidator';
import minLengthValidatorBuilder from 'validators/stringValidators/minLengthValidatorBuilder';
import maxLengthValidatorBuilder from 'validators/stringValidators/maxLengthValidatorBuilder';
import useRequiredFieldsFilled from 'validators/useRequiredFieldsFilled';

import OneFormLayout from 'components/Layouts/OneFormLayout';
import useHandleChangeField from 'components/form/utils/useHandleChangeField';
import TextField from 'components/form/formFields/TextField';
import PasswordField from 'components/form/formFields/PasswordField';
import Button from 'components/form/inputs/Button';

const INITIAL_FORM_STATE = {
	email: '',
	firstName: '',
	lastName: '',
	password: ''
};

const VALIDATION_CONFIG = {
	email: (value) => getFirstError([emptyValidator, emailValidator], value),
	firstName: (value) =>
		getFirstError([emptyValidator, minLengthValidatorBuilder(2), maxLengthValidatorBuilder(10), latinNumbersValidator], value),
	lastName: (value) =>
		getFirstError([emptyValidator, minLengthValidatorBuilder(2), maxLengthValidatorBuilder(10), latinNumbersValidator], value),
	password: (value) => getFirstError([emptyValidator, minLengthValidatorBuilder(8)], value)
};

export default function Registration() {
	const [formState, setFormState] = useState(INITIAL_FORM_STATE);
	const [errorsState, isHasError] = useSharedValidation(formState, VALIDATION_CONFIG);

	const isRequiredFieldFilled = useRequiredFieldsFilled(formState, Object.keys(INITIAL_FORM_STATE));

	const handleEvents = useHandleChangeField(setFormState);

	const { state: AuthUser, dispatch } = useAuthUser();
	const navigate = useNavigate();
	useEffect(() => {
		if (AuthUser.user) {
			navigate('/', { replace: true });
		}
	}, [AuthUser.user]);

	const client = useApolloClient();
	const handleRegister = async (event) => {
		event.preventDefault();
		if (!isHasError && isRequiredFieldFilled && !AuthUser.isLoading) {
			dispatch({ type: 'loading' });
			const payload = await signUp(client, formState);
			dispatch({ type: 'loaded', payload });
		}
	};

	return (
		<OneFormLayout>
			<TextField
				label={'email'}
				id={'email'}
				onChange={handleEvents}
				onBlur={handleEvents}
				value={formState.email}
				error={errorsState.email}
			/>
			<TextField
				label={'First name'}
				id={'firstName'}
				onChange={handleEvents}
				onBlur={handleEvents}
				value={formState.firstName}
				error={errorsState.firstName}
			/>
			<TextField
				label={'Last name'}
				id={'lastName'}
				onChange={handleEvents}
				onBlur={handleEvents}
				value={formState.lastName}
				error={errorsState.lastName}
			/>
			<PasswordField
				label={'Password'}
				id={'password'}
				onChange={handleEvents}
				onBlur={handleEvents}
				value={formState.password}
				error={errorsState.password}
			/>
			<Button type="submit" disabled={isHasError || !isRequiredFieldFilled || AuthUser.isLoading} onClick={handleRegister}>
				Register
			</Button>
		</OneFormLayout>
	);
}
