// hooks
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
// import Swal from 'sweetalert2';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/states/user';
import { updatePage } from '../../store/states/page';
// components
import CustomInput from '../../components/CustomInput/CustomInput';
// layouts
import DecorationLayout from '../../layout/DecorationLayout/DecorationLayout';
// utils
import { PUBLIC } from '../../router/PathUrl';
import { endpoints } from '../../services/Endpoints';

import { ContentSignUp } from './SignUp.styles';

function SignUp() {
    // const navigate = useNavigate();
    const dispacth = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const UserState = useSelector((store) => store.user);

    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        pswrepeat: ''
    });

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value.trim()
        });
    };

    const validarPassword = () => data.password === data.pswrepeat;

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!validarPassword()) {
            enqueueSnackbar('Las contraseñas no coinciden', { variant: 'error' });
            return;
        }

        dispacth(updatePage({ isLoading: true }));
        try {
            const signUpUser = await axios.post(endpoints.base + endpoints.createUser, {
                first_name: data.first_name,
                email: data.email,
                last_name: data.last_name,
                password: data.password,
                roleId: 2,
                points: 0
            });
            const signInUser = await axios.post(endpoints.base + endpoints.login, {
                email: signUpUser.data.email,
                password: data.password
            });

            const createAccount = await axios.post(
                endpoints.base + endpoints.createAccount,
                {
                    creationDate: new Date(),
                    money: 0,
                    isBlocked: false,
                    userId: signInUser.data.id
                },
                {
                    headers: {
                        Authorization: `Bearer ${signInUser.data.accessToken}`
                    }
                }
            );

            const dataUser = {
                token: signInUser.data.accessToken,
                first_name: signUpUser.data.first_name,
                last_name: signUpUser.data.last_name,
                email: signUpUser.data.email,
                role_id: signUpUser.data.roleId,
                points: signUpUser.data.points,
                user_id: signUpUser.data.id,
                account_id: createAccount.data.id,
                money: createAccount.data.money,
                is_blocked: createAccount.data.isBlocked
            };

            dispacth(updateUser(dataUser));
            dispacth(updatePage({ isLoading: false }));
        } catch (error) {
            enqueueSnackbar('Ocurrio un error', { variant: 'error' });
            dispacth(updatePage({ isLoading: false }));
        }
    };

    if (UserState.token) {
        return <Navigate to="/" />;
    }

    return (
        <DecorationLayout>
            <ContentSignUp>
                <div className="contenedor-imagen">
                    <h1 className="t-center f-24">
                        Welcome to <br /> Alkemy Bank
                    </h1>
                </div>

                <form onSubmit={submitHandler} className="form">
                    <CustomInput
                        name="first_name"
                        placeholder="First name"
                        label="First Name"
                        onChange={handleInputChange}
                        value={data.first_name}
                    />
                    <CustomInput
                        name="last_name"
                        placeholder="Last name"
                        label="Last Name"
                        onChange={handleInputChange}
                        value={data.last_name}
                    />
                    <CustomInput
                        name="email"
                        placeholder="Email"
                        label="Email"
                        type="email"
                        onChange={handleInputChange}
                        value={data.email}
                    />
                    <CustomInput
                        name="password"
                        placeholder="Password"
                        label="Password"
                        type="password"
                        onChange={handleInputChange}
                        value={data.password}
                    />
                    <CustomInput
                        name="pswrepeat"
                        placeholder="Repeat password"
                        label="Repeat password"
                        type="password"
                        onChange={handleInputChange}
                        value={data.pswrepeat}
                    />
                    <button
                        type="submit"
                        className="btn primary"
                        disabled={
                            !(
                                !!data.email &&
                                !!data.first_name &&
                                !!data.last_name &&
                                !!data.password &&
                                !!data.pswrepeat
                            )
                        }>
                        Create account
                    </button>
                </form>
                <p className="f-12 fw-3 t-center">
                    ¿You have an account?{' '}
                    <Link to={PUBLIC.signin} className="c-primary fw-4">
                        Sig in here!
                    </Link>
                </p>
            </ContentSignUp>
        </DecorationLayout>
    );
}

export default SignUp;
