import { useDispatch, useSelector } from "react-redux";
import alkemyApi from "../api/login";
import { onChecking, onLogin, onLogout } from "../redux/slices/auth.Slice";
import { setUser } from "../redux/slices/user.slice";
import { useTransactions } from "./useTransactions";
import Swal from "sweetalert2";
import { getFormattedDate } from "../helper/formatDate";
import { setAccountInformation } from "../redux/slices/account.slice";

export const useAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const { email, first_name, last_name, id } = useSelector(
    (state) => state.user
  );
  const { Autorizacion } = useTransactions();
  const dispatch = useDispatch();

  const Login = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await alkemyApi.post("/auth/login", { email, password });
      localStorage.setItem("token", data.accessToken);
      dispatch(onLogin());
      const user = await alkemyApi.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${data.accessToken}`
        }
      });
      const account = await alkemyApi.get("/accounts/me", {
        headers: {
          Authorization: `Bearer ${data.accessToken}`
        }
      });
      console.log(user);
      dispatch(setUser(user));
      dispatch(setAccountInformation(account.data));
    } catch (error) {
      Swal.fire(
        'Credenciales incorrectas',
        'Revise los datos ingresados e intente nuevamente',
        'error'
      );
      dispatch(onLogout("Usuario o Contraseña incorrecto"));
    }
  };

  const Register = async ({ email, password, first_name, last_name }) => {
    dispatch(onChecking());
    try {
      const res = await alkemyApi.post("/users", {
        email,
        password,
        first_name,
        last_name
      });
      console.log(res.data.id);
      const autenticatedUser = await alkemyApi.post("/auth/login", {
        email,
        password
      });
      const resAccount = await alkemyApi.post(
        "/accounts",
        {
          creationDate: getFormattedDate(),
          money: 100000,
          isBlocked: false,
          userId: res.data.id
        },
        {
          headers: {
            Authorization: `Bearer ${autenticatedUser.data.accessToken}`
          }
        }
      );
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cuenta creada!',
        showConfirmButton: false,
        timer: 2000
      });
      dispatch(setAccountInformation(resAccount.data));
      dispatch(onLogout());
      setTimeout(() => {
        window.location = "/";
      }, 2100);
    } catch (error) {
      dispatch(onLogout());
      Swal.fire(
        'Usuario duplicado',
        'Intente nuevamente con otro mail',
        'error'
      );
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

  const infoUsuario = async () => {
    try {
      const resp = await alkemyApi.get("/auth/me", Autorizacion);
      const account = await alkemyApi.get("/accounts/me", Autorizacion);
      dispatch(setUser(resp));
      dispatch(setAccountInformation(account.data[0]));
    } catch (error) {}
  };

  return {
    status,
    email,
    first_name,
    last_name,
    id,
    Login,
    verifToken,
    Logout,
    Register,
    infoUsuario
  };
};
