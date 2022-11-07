import { Link } from "react-router-dom";
// import logo from "../assets/img/favi.jfif";

function Login() {
  return (
    <>
      <main>
        <section className="main flex flex-col justify-center items-center w-full h-auto py-10 bg-stone-200 text-violet-900">
          <section className="py-12">
            <h2 className="mb-4 text-4xl font-bold">
              Bienvenido a Alkemy Bank
            </h2>
            <h4 className="mt-4 text-2xl font-semibold">Inicia sesión</h4>
          </section>
          <form className="flex flex-col items-center">
            <label className="flex flex-col items-center">
              <input
                className="w-96 p-2 mb-5 border-2 border-solid rounded-lg border-violet-900 placeholder:pl-3 placeholder:text-violet-900"
                type="email"
                placeholder="Ingresa tu email"
                name="email"
              />
              <input
                className="w-96 p-2 mt-3 border-2 border-solid rounded-lg border-violet-900 placeholder:pl-3 placeholder:text-violet-900"
                type="password"
                placeholder="Ingresa tu contraseña"
                name="password"
              />
            </label>
            <button className="w-40 h-11 mt-10 p-2 rounded-lg text-stone-200 bg-violet-900">
              Inicia sesión
            </button>
          </form>
          <Link className="mt-7" to={`/registrar`}>
            <span className="underline font-medium">
              ¿Aún no tenés cuenta? Registrate acá
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}

export default Login;
