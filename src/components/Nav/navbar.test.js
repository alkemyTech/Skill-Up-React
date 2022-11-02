import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Navbar } from './Navbar';

describe('Navbar', () => {
	it('must have an image', () => {
		render(<Navbar />);
		const image = screen.getAllByRole('img');
		expect(image[0]).toHaveAttribute('alt', 'logo');
	});

	it('must have a login button', () => {
		render(<Navbar />);
		expect(screen.getByText(/Login/)).toBeInTheDocument();
	});
});
