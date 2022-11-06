import React from 'react';
import { Text } from 'src/components/Text';

export const Input = React.forwardRef(
	/**
	 * @typedef {Object} CustomProps
	 * @property {string} [label]
	 * @param {React.ComponentProps<"input"> & CustomProps} props
	 */
	function Input({ label, className = '', error, onError, onChange, onTouch, pattern, ...props }, ref) {
		const id = React.useId();
		const [touched, setTouched] = React.useState(false);

		const _onChange = (e) => {
			const { value = '', name = '' } = e.target;
			const _touched = value.length > 0 || touched;

			if (_touched) setTouched(true);

			onChange(e);
			onTouch?.(name, _touched);

			const isValid = pattern?.test?.(value);
			if (pattern) onError?.(name, !isValid);
		};

		return (
			<div className="flex flex-col">
				{label && (
					<Text as="label" htmlFor={id} className="font-medium text-ct-primary-600">
						{label}
					</Text>
				)}

				<Text
					{...props}
					as="input"
					ref={ref}
					onChange={_onChange}
					id={id}
					className={`${className} ${
						error ? 'border-red-500' : 'border-ct-primary-100'
					} rounded border px-2 py-1 outline-ct-secondary-200`}
				/>
			</div>
		);
	},
);
