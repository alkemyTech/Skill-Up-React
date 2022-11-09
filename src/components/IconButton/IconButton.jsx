import React from 'react';
import { Icon } from 'src/components/Icon/Icon';

/**
 * @typedef {Object} CustomProps
 * @property {JSX.IntrinsicElements["svg"]} [icon]
 * @param {React.ComponentProps<"button"> & CustomProps} props
 */
export function IconButton({ className = '', icon, ...props }) {
	return (
		<button
			className={`rounded-md p-2 leading-[0] outline-ct-neutral-ligth-400 disabled:border-gray-400 disabled:opacity-60 ${className}`}
			{...props}
		>
			<Icon as={icon} />
		</button>
	);
}
