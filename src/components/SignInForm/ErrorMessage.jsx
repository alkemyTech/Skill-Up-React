import React from 'react';

export const ErrorMessage = ({ error, className, children }) => {
	return <small className={`${error ? 'text-ct-secondary-500 visible' : 'invisible'} ${className}`}>{children}</small>;
};
