// hooks
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { updatePage } from '../../../store/states/page';
import { updateUser, resetUser } from '../../../store/states/user';
import { useResetPasswordMutation } from '../../../services/dataApi.js';
// components
import CustomInput from '../../../components/CustomInput/CustomInput';
import AvatarUser from '../../../components/AvatarUser/AvatarUser';
// layouts
import DecorationLayout from '../../../layout/DecorationLayout/DecorationLayout';
import ModalLayout from '../../../layout/ModalLayout/ModalLayout';
// services
import { endpoints } from '../../../services/Endpoints';

import { ContentPerfil } from './Perfil.styles';

function Profile() {
    const [userInfo, setUserInfo] = useState(null);
    const [stateChangePassword, setStateChangePassword] = useState({
        modal: false,
        current_password: '',
        new_password: '',
        repeat_password: '',
        change_password: false
    });
    const [editUserInfo, setEditUserInfo] = useState(false);
    const UserState = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const [resetPassword] = useResetPasswordMutation();

    useEffect(() => {
        setUserInfo({
            ...UserState
        });
    }, []);

    useEffect(() => {
        if (stateChangePassword.change_password) {
            window.scroll(0, 1000);
        }
    }, [stateChangePassword.change_password]);

    const handleEditUser = () => setEditUserInfo(!editUserInfo);

    const handleChangeInputs = (e) => {
        const { value, name } = e.target;

        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };

    const handleSubmitUser = async (e) => {
        e.preventDefault();

        if (!userInfo.first_name || !userInfo.last_name || !userInfo.email) {
            enqueueSnackbar('Field name require', { variant: 'error' });
            return;
        }

        dispatch(updatePage({ isLoading: true }));

        try {
            const headerService = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            };

            await axios.put(
                endpoints.base + endpoints.updateUser + userInfo.user_id,
                {
                    first_name: userInfo.first_name,
                    last_name: userInfo.last_name,
                    email: userInfo.email,
                    roleId: userInfo.role_id,
                    points: userInfo.points
                },
                headerService
            );

            const currentUser = await axios.get(
                endpoints.base + endpoints.currentUser,
                headerService
            );

            const dataUser = {
                first_name: currentUser.data.first_name,
                last_name: currentUser.data.last_name,
                email: currentUser.data.email,
                role_id: currentUser.data.roleId,
                points: currentUser.data.points,
                user_id: currentUser.data.id
            };

            dispatch(updateUser(dataUser));
            setEditUserInfo(false);
            dispatch(updatePage({ isLoading: false }));
            enqueueSnackbar('Update user', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar('A mistaked occurred', { variant: 'error' });
            dispatch(updatePage({ isLoading: false }));
        }
    };

    const handleShowModal = () =>
        setStateChangePassword({
            ...stateChangePassword,
            current_password: '',
            modal: !stateChangePassword.modal
        });

    const handleChangePassword = (e) => {
        const { value, name } = e.target;

        setStateChangePassword({
            ...stateChangePassword,
            [name]: value
        });
    };

    const handleSubmitVerifyPassword = async (e) => {
        e.preventDefault();

        dispatch(updatePage({ isLoading: true }));
        try {
            const datos = {
                email: userInfo.email,
                password: stateChangePassword.current_password
            };
            await axios.post(endpoints.base + endpoints.login, datos);

            enqueueSnackbar('Success', { variant: 'success' });

            setStateChangePassword({
                ...stateChangePassword,
                current_password: '',
                modal: false,
                change_password: true
            });
            dispatch(updatePage({ isLoading: false }));
        } catch (error) {
            enqueueSnackbar('Invalid password', { variant: 'error' });
            setStateChangePassword({
                ...stateChangePassword,
                current_password: ''
            });
            dispatch(updatePage({ isLoading: false }));
        }
    };

    const handleSubmitNewPassword = async (e) => {
        e.preventDefault();

        if (!(!!stateChangePassword.new_password || stateChangePassword.repeat_password)) {
            enqueueSnackbar('Invalid fields', { variant: 'error' });
            return;
        }
        if (stateChangePassword.new_password !== stateChangePassword.repeat_password) {
            enqueueSnackbar('Passwords do not match', { variant: 'error' });
            return;
        }

        dispatch(updatePage({ isLoading: true }));
        try {
            await resetPassword({
                id: userInfo.user_id,
                password: stateChangePassword.new_password
            });
            enqueueSnackbar('Password changed', { variant: 'success' });
            setStateChangePassword({
                ...stateChangePassword,
                new_password: '',
                repeat_password: '',
                change_password: false
            });
            dispatch(updatePage({ isLoading: false }));
        } catch (error) {
            enqueueSnackbar('Error server', { variant: 'error' });
            setStateChangePassword({
                ...stateChangePassword,
                new_password: '',
                repeat_password: ''
            });
            dispatch(updatePage({ isLoading: false }));
        }
    };

    const onClickSignOut = () => {
        dispatch(resetUser());
    };

    return (
        <DecorationLayout>
            <ContentPerfil>
                <button type="button" onClick={onClickSignOut} className="sign-out f-14 fw-7">
                    Sign out
                </button>

                <AvatarUser />

                <div className="content-info">
                    {userInfo && (
                        <>
                            <CustomInput
                                name="first_name"
                                id="first_name"
                                value={userInfo.first_name}
                                placeholder="First Name"
                                label="First Name"
                                onChange={handleChangeInputs}
                                disabled={!editUserInfo}
                            />
                            <CustomInput
                                name="last_name"
                                id="last_name"
                                value={userInfo.last_name}
                                placeholder="Last name"
                                label="Last name"
                                onChange={handleChangeInputs}
                                disabled={!editUserInfo}
                            />
                            <CustomInput
                                name="email"
                                id="email"
                                value={userInfo.email}
                                placeholder="Email"
                                type="email"
                                label="Email"
                                onChange={handleChangeInputs}
                                disabled={!editUserInfo}
                            />
                            <button
                                type="button"
                                className="btn primary"
                                onClick={!editUserInfo ? handleEditUser : handleSubmitUser}>
                                {!editUserInfo ? 'Edit' : 'Save'}
                            </button>
                        </>
                    )}
                </div>

                <div className="content-password">
                    {!stateChangePassword.change_password ? (
                        <CustomInput
                            name="password"
                            id="password"
                            value="********"
                            placeholder="Password"
                            label="Password"
                            onChange={handleChangeInputs}
                            disabled
                        />
                    ) : (
                        <>
                            <CustomInput
                                name="new_password"
                                id="new_password"
                                type="password"
                                value={stateChangePassword.new_passsword}
                                placeholder="New password"
                                label="New password"
                                onChange={handleChangePassword}
                            />
                            <CustomInput
                                name="repeat_password"
                                id="repeat_password"
                                type="password"
                                value={stateChangePassword.repeat_password}
                                placeholder="Repeat password"
                                label="Repeat password"
                                onChange={handleChangePassword}
                            />
                        </>
                    )}
                    <button
                        type="button"
                        className="btn primary"
                        onClick={
                            !stateChangePassword.change_password
                                ? handleShowModal
                                : handleSubmitNewPassword
                        }>
                        Change Password
                    </button>
                </div>
            </ContentPerfil>

            <ModalLayout onClose={handleShowModal} show={stateChangePassword.modal}>
                <div className="d-flex gap-2 column">
                    <h4 className="text t-center">Enter your current password to continue</h4>
                    <form onSubmit={handleSubmitVerifyPassword}>
                        <CustomInput
                            name="current_password"
                            id="current_password"
                            type="password"
                            value={stateChangePassword.current_password}
                            placeholder="Password"
                            label="Password"
                            onChange={handleChangePassword}
                        />
                        <button
                            type="submit"
                            className="btn primary"
                            disabled={!stateChangePassword.current_password}>
                            Continue
                        </button>
                    </form>
                </div>
            </ModalLayout>
        </DecorationLayout>
    );
}

export default Profile;
