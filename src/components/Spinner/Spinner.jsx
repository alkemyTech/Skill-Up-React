import React from 'react';

export const Spinner = ({ className }) => {
	return (
		<div className={`${className} fixed inset-0 flex items-center justify-center bg-ct-neutral-dark-400/20`}>
			<div>Spinner</div>
		</div>
	);
};
