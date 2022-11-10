import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'src/components/Button';
import { Heading } from 'src/components/Heading';
import { Input } from 'src/components/SignInForm/Input';
import { webRoutes } from 'src/utils/web.routes';
import { ErrorMessage } from './ErrorMessage';

const regexValidator = {
	first_name: /[a-zA-Z]/,
	last_name: /[a-zA-Z]/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
};

const fieldNames = {
	first_name: 'first_name',
	last_name: 'last_name',
	email: 'email',
	password: 'password',
	confirmPassword: 'confirmPassword',
};
const booleanFields = Object.fromEntries(Object.entries(fieldNames).map(([key]) => [key, false]));
const emptyFields = Object.fromEntries(Object.entries(fieldNames).map(([key]) => [key, '']));

export const SignInForm = ({ accounstRepository, authRepository, usersRepository, className }) => {
	const navigate = useNavigate();
	const [formValues, setFormValues] = React.useState(emptyFields);
	const [touchedFields, setTouchedFields] = React.useState({ ...booleanFields });
	const [errorFields, setErrorFields] = React.useState({ ...booleanFields });

	const { mutate: onSubmit } = useMutation(
		async (event) => {
			event.preventDefault();
			const user = await usersRepository().register(formValues);
			await authRepository().login(formValues);

			const Account = await accounstRepository().create({ userId: user.id });
			const userWithAccount = user.assignAccount(Account.id);

			await usersRepository().edit({ userId: user.id, editUser: userWithAccount });
			const userInfo = await authRepository().userInfo();
			return userInfo;
		},
		{
			onSuccess: async () => {
				navigate(webRoutes.login);
				toast.success('Registered successfully');
			},
			onError: async () => {
				toast.error('Something went wrong, please try again');
			},
		},
	);

	function onChange(e) {
		const { value = '', name = '' } = e.target;
		setFormValues((s) => ({ ...s, [name]: value }));
	}
	function onTouch(name, value) {
		setTouchedFields((s) => ({ ...s, [name]: value }));
	}
	function onError(name, value) {
		setErrorFields((s) => ({ ...s, [name]: value }));
	}
	const isSomeError = Object.values(errorFields).some((fieldValue) => fieldValue);
	const isPasswordMatch = formValues.password === formValues.confirmPassword;
	const isPasswordErrorMessageVisible = touchedFields.password && errorFields.password;

	const isConfirmPasswordError =
		errorFields[fieldNames.confirmPassword] || (touchedFields.confirmPassword && !isPasswordMatch);

	const isConfirmPasswordErrorMessageVisible =
		(touchedFields.confirmPassword && errorFields.confirmPassword) ||
		(touchedFields.confirmPassword && !isPasswordMatch);

	return (
		<form
			onSubmit={onSubmit}
			className={`${className} mx-auto mt-4 flex max-w-md flex-col gap-5 rounded border border-ct-primary-100 bg-ct-primary-100/10 p-4 sm:mt-8`}
		>
			<Heading className="m-auto text-ct-primary-600">Sign up</Heading>

			<Input
				autoFocus
				label="First name"
				name={fieldNames.first_name}
				value={formValues.first_name}
				error={errorFields[fieldNames.first_name]}
				pattern={regexValidator.first_name}
				onTouch={onTouch}
				onError={onError}
				onChange={onChange}
				required
			/>

			<Input
				label="Last name"
				name={fieldNames.last_name}
				value={formValues.last_name}
				error={errorFields[fieldNames.last_name]}
				pattern={regexValidator.last_name}
				onTouch={onTouch}
				onError={onError}
				onChange={onChange}
				required
			/>

			<Input
				label="Email"
				name={fieldNames.email}
				value={formValues.email}
				error={errorFields[fieldNames.email]}
				pattern={regexValidator.email}
				onTouch={onTouch}
				onError={onError}
				onChange={onChange}
				required
			/>

			<div className="relative">
				<Input
					label="Password"
					type="password"
					name={fieldNames.password}
					error={errorFields[fieldNames.password]}
					pattern={regexValidator.password}
					onTouch={onTouch}
					onError={onError}
					onChange={onChange}
					value={formValues.password}
					required
				/>

				<ErrorMessage className={`inset-0-0 absolute h-full w-full`} error={isPasswordErrorMessageVisible}>
					Tip: 8 characters beetwen uppercase, lowercase and numbers.
				</ErrorMessage>
			</div>

			<div className="relative">
				<Input
					label="Confirm password"
					type="password"
					name={fieldNames.confirmPassword}
					error={isConfirmPasswordError}
					onTouch={onTouch}
					onError={onError}
					onChange={onChange}
					value={formValues.confirmPassword}
					required
				/>

				<ErrorMessage className="inset-0-0 absolute h-full w-full" error={isConfirmPasswordErrorMessageVisible}>
					Tip: Password should match.
				</ErrorMessage>
			</div>

			<Button type="submit" variant="primary" disabled={isSomeError}>
				Create account
			</Button>
		</form>
	);
};