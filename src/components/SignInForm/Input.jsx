import React from 'react';
import { Text } from 'src/components/Text';
import { themeColorScheme } from 'src/ui/themeColorScheme';

export const Input = React.forwardRef(
	/**
	 * @typedef {Object} CustomProps
	 * @property {string} [label]
	 @property {"primary" | "secondary" | "tertiary" } [props.colorScheme]
	 * @param {React.ComponentProps<"input"> & CustomProps} props
	 */
	function Input(
		{
			label,
			className = '',
			colorScheme = themeColorScheme.primary,
			error,
			onError,
			onChange,
			onTouch,
			pattern,
			...props
		},
		ref,
	) {
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
			<div className="grid">
				{label && (
					<Text as="label" htmlFor={id} className="font-semibold text-ct-neutral-medium-700">
						{label}
					</Text>
				)}

				<input
					{...props}
					ref={ref}
					onChange={_onChange}
					id={id}
					className={`${className} ${
						error
							? 'border-ct-danger-500'
							: colorScheme === themeColorScheme.primary
							? 'border-ct-primary-500'
							: colorScheme === themeColorScheme.secondary
							? 'border-ct-secondary-500'
							: colorScheme === themeColorScheme.tertiary
							? 'border-ct-tertiary-500'
							: ''
					} rounded border px-2 py-1 outline-ct-special1-500`}
				/>
			</div>
		);
	},
);
