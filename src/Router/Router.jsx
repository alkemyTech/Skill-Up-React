import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { SignInForm } from 'src/components/SignInForm';
import { HomePage } from 'src/pages/HomePage';

export const Router = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/signin" element={<SignInForm />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};
