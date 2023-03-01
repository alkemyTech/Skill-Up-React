import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PUBLIC } from './PathUrl';

export default function AuthGuard() {
    const userState = useSelector((store) => store.user);
    const existUser = !!userState.token;

    return !existUser ? <Navigate replace to={PUBLIC.signin} /> : <Outlet />;
}
