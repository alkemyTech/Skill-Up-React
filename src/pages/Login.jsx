import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/loginContext";
import { ToastContainer } from 'react-toastify';

function Login() {
  const { setDataLogin, dataLogin, login } = useContext(AuthContext);

  const handleChangeValueLogin = (e) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
  };

  return (
    <>
      <main className="min-h-screen">
        <ToastContainer />
        <section className="main flex flex-col justify-center items-center w-full h-auto py-20 bg-white ">
          <section className="py-12">
            <h2 className="mb-4 text-4xl font-bold text-primary-color">
              Bienvenido a Alkemy Bank
            </h2>
            <h4 className="mt-4 text-2xl font-semibold text-sky-400">Inicia sesión</h4>
          </section>
          <form
            onSubmit={(e) => login(e)}
            className="flex flex-col items-center"
          >
            <label className="flex flex-col items-center">
              <input
                required={true}
                className="w-96 p-2 mb-5 border-2 border-solid rounded-lg border-sky-600 placeholder:pl-3 placeholder:text-sky-600"
                type="email"
                onChange={(e) => handleChangeValueLogin(e)}
                value={dataLogin.email}
                placeholder="Ingresa tu email"
                name="email"
              />
              <input
                required={true}
                className="w-96 p-2 mt-3 border-2 border-solid rounded-lg border-sky-600 placeholder:pl-3 placeholder:text-sky-600"
                type="password"
                onChange={(e) => handleChangeValueLogin(e)}
                value={dataLogin.password}
                placeholder="Ingresa tu contraseña"
                name="password"
              />
            </label>
            <button className="w-40 h-11 mt-10 p-2 rounded-lg text-stone-200 bg-sky-600">
              Inicia sesión
            </button>
          </form>
          <Link className="mt-7" to={`/registrar`}>
            <span className="underline font-medium text-secondary-color">
              ¿Aún no tenés cuenta? Registrate acá
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}

export default Login;
