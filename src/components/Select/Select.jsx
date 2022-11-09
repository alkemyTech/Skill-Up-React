import React from 'react';
import { Text } from 'src/components/Text';

/**
 * @typedef {Object} CustomProps
 * @property {string} [label]
 
 * @param {React.ComponentProps<"input"> & CustomProps} props
 */
export function Select({ className, children, label, ...props }) {
	const id = React.useId();

	return (
		<div className={`grid`}>
			{label && (
				<Text as="label" htmlFor={id} className="font-medium text-ct-primary-600">
					{label}
				</Text>
			)}

			<Text
				as="select"
				{...props}
				id={id}
				className={`${className} min-h-[40px] rounded border border-ct-primary-100  px-2 py-1  outline-ct-secondary-200`}
			>
				{children}
			</Text>
		</div>
	);
}
