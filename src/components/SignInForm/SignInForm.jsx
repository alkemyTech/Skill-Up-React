import React from 'react';
import { Heading } from 'src/components/Heading';
import { Input } from 'src/components/SignInForm/Input';
import { UsersRepository } from 'src/repositories/users.repository';
import { ErrorMessage } from './ErrorMessage';

const regexValidator = {
	first_name: /[a-zA-Z]/,
	last_name: /[a-zA-Z]/,
	email: /^[a-zA-Z]+[a-zA-Z0-9_.]+@[a-zA-Z.]+[a-zA-Z]$/,
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

export const SignInForm = ({ className }) => {
	const [formValues, setFormValues] = React.useState(emptyFields);
	const [touchedFields, setTouchedFields] = React.useState({ ...booleanFields });
	const [errorFields, setErrorFields] = React.useState({ ...booleanFields });

	const isPasswordMatch = formValues.password === formValues.confirmPassword;

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

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				UsersRepository().register(formValues);
			}}
			className={`${className} mx-auto flex max-w-md flex-col gap-5 rounded border border-ct-primary-100 bg-ct-primary-100/10 p-4`}
		>
			<Heading className="m-auto text-ct-primary-600">Signin</Heading>
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

				<ErrorMessage
					className={`inset-0-0 absolute h-full w-full`}
					error={touchedFields.password && errorFields.password}
				>
					Tip: 8 caracters beetwen uppercase, lowercase and numbers.
				</ErrorMessage>
			</div>
			<div className="relative">
				<Input
					label="Confirm password"
					type="password"
					name={fieldNames.confirmPassword}
					error={errorFields[fieldNames.confirmPassword] || (touchedFields.confirmPassword && !isPasswordMatch)}
					onTouch={onTouch}
					onError={onError}
					onChange={onChange}
					value={formValues.confirmPassword}
					required
				/>
				<ErrorMessage
					className={`inset-0-0 absolute h-full w-full`}
					error={
						(touchedFields.confirmPassword && errorFields.confirmPassword) ||
						(touchedFields.confirmPassword && !isPasswordMatch)
					}
				>
					Tip: Password should match.
				</ErrorMessage>
			</div>
			<button type="submit" className="mt-6 rounded border bg-ct-primary-300 p-2 font-bold text-ct-primary-50">
				Signin
			</button>
		</form>
	);
};
