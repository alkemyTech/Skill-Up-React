// hooks
import { useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { updateUser } from '../../store/states/user';
import { updatePage } from '../../store/states/page';

// components
import CustomInput from '../../components/CustomInput/CustomInput';
// layouts
import DecorationLayout from '../../layout/DecorationLayout/DecorationLayout';
// utils
import { PUBLIC } from '../../router/PathUrl';
import { endpoints } from '../../services/Endpoints';

import { ContentSignIn } from './SignIn.styles';

function Login() {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });
    const { enqueueSnackbar } = useSnackbar();

    // const navigate = useNavigate();
    const dispacth = useDispatch();
    const UserState = useSelector((store) => store.user);

    const submitHandler = async (e) => {
        e.preventDefault();

        dispacth(updatePage({ isLoading: true }));

        try {
            const login = await axios.post(endpoints.base + endpoints.login, {
                email: formValues.email,
                password: formValues.password
            });
            const headerService = {
                headers: {
                    Authorization: `Bearer ${login.data.accessToken}`
                }
            };

            const currentUser = await axios.get(
                endpoints.base + endpoints.currentUser,
                headerService
            );

            const currentAccount = await axios.get(
                endpoints.base + endpoints.currentAccount,
                headerService
            );

            const dataUser = {
                token: login.data.accessToken,
                first_name: currentUser.data.first_name,
                last_name: currentUser.data.last_name,
                email: currentUser.data.email,
                role_id: currentUser.data.roleId,
                points: currentUser.data.points,
                user_id: currentUser.data.id,
                account_id: currentAccount.data[0].id,
                money: currentAccount.data[0].money,
                is_blocked: currentAccount.data[0].isBlocked
            };
            dispacth(updateUser(dataUser));
            dispacth(updatePage({ isLoading: false }));
        } catch (error) {
            enqueueSnackbar('Ocurrio un problema.', { variant: 'error' });
            dispacth(updatePage({ isLoading: false }));
        }
    };

    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value.trim()
        });
    };

    if (UserState.token) {
        return <Navigate to="/" />;
    }

    return (
        <DecorationLayout>
            <ContentSignIn>
                <div className="contenedor-imagen">
                    <h2 className="f-24">
                        Welcome to <br /> Alkemy Bank
                    </h2>
                </div>

                <form onSubmit={submitHandler} className="form">
                    <CustomInput
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        value={formValues.email}
                    />
                    <CustomInput
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="Password"
                        onChange={handleInputChange}
                        value={formValues.password}
                    />
                    <button
                        type="submit"
                        className="btn primary"
                        disabled={!(!!formValues.email && !!formValues.password)}>
                        Log in
                    </button>
                </form>
                <p className="t-center f-12 fw-3">
                    ¿You dont have an account?{' '}
                    <Link to={PUBLIC.signup} className="c-primary fw-4">
                        Sign up here!
                    </Link>
                </p>
            </ContentSignIn>
        </DecorationLayout>
    );
}

export default Login;
