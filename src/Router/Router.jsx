import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { HomePage } from 'src/pages/HomePage';

export const Router = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};
