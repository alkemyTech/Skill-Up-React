import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { Spinner } from 'src/components/Spinner';
import { webRoutes } from 'src/utils/web.routes';

const BalancePage = React.lazy(() => import('src/pages/BalancePage/Balance.page'));
const BillsPage = React.lazy(() => import('src/pages/BillsPage/Bills.page'));
const DepositPage = React.lazy(() => import('src/pages/DepositPage/Deposit.page'));
const HomePage = React.lazy(() => import('src/pages/HomePage/Home.page'));
const LoginPage = React.lazy(() => import('src/pages/LoginPage/Login.page'));
const NotFoundPage = React.lazy(() => import('src/pages/NotFoundPage/NotFound.page'));
const SignInPage = React.lazy(() => import('src/pages/SignInPage/SignIn.page'));
const TransactionsPage = React.lazy(() => import('src/pages/TransactionsPage/Transactions.page'));
const TransferPage = React.lazy(() => import('src/pages/TransferPage/Transfer.page'));

export const Router = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route
						path={webRoutes.home}
						element={
							<Suspense fallback={<Spinner />}>
								<HomePage />
							</Suspense>
						}
					/>
					<Route
						path={webRoutes.signin}
						element={
							<Suspense fallback={<Spinner />}>
								<SignInPage />
							</Suspense>
						}
					/>
					<Route
						path={webRoutes.login}
						element={
							<Suspense fallback={<Spinner />}>
								<LoginPage />
							</Suspense>
						}
					/>
					<Route
						path={webRoutes.balance}
						element={
							<Suspense fallback={<Spinner />}>
								<BalancePage />
							</Suspense>
						}
					/>
					<Route
						path={webRoutes.bills}
						element={
							<Suspense fallback={<Spinner />}>
								<BillsPage />
							</Suspense>
						}
					/>
					<Route
						path={webRoutes.transactions}
						element={
							<Suspense fallback={<Spinner />}>
								<TransactionsPage />
							</Suspense>
						}
					/>
					<Route
						path={webRoutes.transfer}
						element={
							<Suspense fallback={<Spinner />}>
								<TransferPage />
							</Suspense>
						}
					/>
					<Route
						path={webRoutes.deposit}
						element={
							<Suspense fallback={<Spinner />}>
								<DepositPage />
							</Suspense>
						}
					/>
					<Route
						path={webRoutes.notFound}
						element={
							<Suspense fallback={<Spinner />}>
								<NotFoundPage />
							</Suspense>
						}
					/>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};
