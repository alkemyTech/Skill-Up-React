
import { useDispatch, useSelector } from "react-redux";
import alkemyApi from "../api/login";
import { onChecking, onLogin, onLogout } from "../redux/slices/auth.Slice";

export const useAuth = () => {
    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const Login = async({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await alkemyApi.post("/auth/login", { email, password });
            localStorage.setItem("token", data.accessToken);
            dispatch(onLogin());
        } catch (error) {
            dispatch(onLogout("Usuario o Contraseña incorrecto"));
        }
    };

    const Register = async({ email, password }) => {
        dispatch(onChecking());
        try {
         const { data } = await alkemyApi.post("/users", { email, password });
         dispatch(onLogout());
         window.location = "/";
        } catch (error) {
            dispatch(onLogout());
        }
    };

    const verifToken = () => {
        const token = localStorage.getItem("token");
        dispatch(onLogin());
        if (!token) {
            dispatch(onLogout());
        }
    };

    const Logout = () => {
        localStorage.clear();
        dispatch(onLogout());
    };

    return {

        status,
        user,
        errorMessage,
        Login,
        verifToken,
        Logout,
        Register

    };
};