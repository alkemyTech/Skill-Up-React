// hooks
import { Suspense, lazy } from 'react';
import { Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthGuard from './AuthGuard';
// componets
import Loader from '../components/Loader/Loader';
// pages
import RoutesWithNotFound from './RoutesWithNotFound';
// utils
import { PRIVATE, PUBLIC } from './PathUrl';

const SignIn = lazy(() => import('../pages/SignIn/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));

const PrivateLayout = lazy(() => import('../layout/PrivateLayout/PrivateLayout'));
const Home = lazy(() => import('../pages/Private/Home/Home'));
const TopUp = lazy(() => import('../pages/Private/TopUp/TopUp'));
const Transactions = lazy(() => import('../pages/Private/Transactions/Transactions'));
const Profile = lazy(() => import('../pages/Private/Profile/Profile'));
const Contact = lazy(() => import('../pages/Private/Contact/Contact'));
const Payment = lazy(() => import('../pages/Private/Payment/Payment'));

function Router() {
    const PageState = useSelector((store) => store.page);

    return (
        <Suspense fallback={<Loader loading />}>
            <BrowserRouter>
                <RoutesWithNotFound>
                    <Route path="/" element={<Navigate to={`${PRIVATE.root}/${PRIVATE.home}`} />} />

                    <Route path={PUBLIC.signin} element={<SignIn />} />
                    <Route path={PUBLIC.signup} element={<SignUp />} />

                    <Route element={<AuthGuard />}>
                        <Route path={`${PRIVATE.root}`} element={<PrivateLayout />}>
                            <Route path={PRIVATE.home} element={<Home />} />
                            <Route path={PRIVATE.topUp} element={<TopUp />} />
                            <Route path={PRIVATE.payment} element={<Payment />} />
                            <Route path={PRIVATE.transactions} element={<Transactions />} />
                            <Route path={PRIVATE.profile} element={<Profile />} />
                            <Route path={PRIVATE.contact} element={<Contact />} />
                        </Route>
                    </Route>
                </RoutesWithNotFound>
                <Loader loading={PageState.isLoading} />
            </BrowserRouter>
        </Suspense>
    );
}

export default Router;
