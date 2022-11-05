import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/Layout';

import { SignInForm } from 'src/components/SignInForm';
import { LoginForm } from 'src/components/LoginForm';
import { HomePage } from 'src/pages/HomePage';
import NotFound from 'src/pages/NotFound/NotFound';

export const Router = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/signin" element={<SignInForm />} />
					<Route path="/login" element={<LoginForm />} />
					<Route path="/balance" element={<LoginForm />} />
					<Route path="/bills" element={<LoginForm />} />
					<Route path="/transactions" element={<LoginForm />} />
					<Route path="/transfer" element={<LoginForm />} />
					<Route path="/deposit" element={<LoginForm />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};
