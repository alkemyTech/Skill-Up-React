import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <>
      <main>
        <section className="main flex flex-col justify-center items-center w-full h-auto py-10 bg-stone-200 text-violet-900">
          <section className="py-12">
            <h2 className="mb-4 text-4xl font-bold">
              Bienvenido a Alkemy Bank
            </h2>
            <h4 className="mt-4 text-2xl font-semibold">Registrate</h4>
          </section>
          <form
            className="flex flex-col items-center"
          >
            <label className="grid grid-cols-2 grid-rows-3 gap-3">
              <input
                className="col-start-1 col-span-1 row-start-1 row-span-1 p-2 mb-5 border-2 border-solid rounded-lg border-violet-900 placeholder:pl-3 placeholder:text-violet-900"
                type="text"
                placeholder="Ingresa tu nombre"
                name={`first_name`}
                required
              />
              <input
                className="col-start-2 col-span-1 row-start-1 row-span-1 p-2 mb-5 border-2 border-solid rounded-lg border-violet-900 placeholder:pl-3 placeholder:text-violet-900"
                type="text"
                placeholder="Ingresa tu apellido"
                name={`last_name`}
                required
              />
              <input
                className="col-start-1 col-span-2 row-start-2 row-span-1 p-2 mb-5 border-2 border-solid rounded-lg border-violet-900 placeholder:pl-3 placeholder:text-violet-900"
                type="email"
                placeholder="Ingresa tu email"
                name={`email`}
                required
              />
              <input
                className="col-start-1 col-span-2 row-start-3 row-span-1 p-2 mb-5 border-2 border-solid rounded-lg border-violet-900 placeholder:pl-3 placeholder:text-violet-900"
                type="password"
                placeholder="Ingresa tu contraseña"
                name={`password`}
                required
              />
            </label>
            <button className="w-40 h-11 mt-10 p-2 rounded-lg text-stone-200 bg-violet-900">
              Registrarse
            </button>
          </form>
          <Link className="mt-7" to={`/`}>
            <span className="underline font-medium">
              ¿Ya tenés cuenta? Iniciá sesión
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}
