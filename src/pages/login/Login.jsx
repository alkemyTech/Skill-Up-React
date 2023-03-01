// eslint-disable-file no-use-before-define
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/alkemy_logo.svg';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import styles from './Login.module.css';

const loginInputs = {
  email: '',
  password: ''
};

export const Login = () => {
  const { Login } = useAuth();

  const { email, password, onInputChange } = useForm(loginInputs);

  const [errors, setErrors] = useState({});

  const onValidacion = (email, password) => {
    let isError = false;
    // eslint-disable-next-line
    const regexEmail = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
    const errors = {};

    if (!password.trim()) {
      errors.password = 'Debes introducir una contraseña.';
      isError = true;
    } else if (password.length < 3) {
      errors.password = 'Ingrese una contraseña de por lo menos tres caracteres.';
      isError = true;
    }
    if (!email.trim()) {
      errors.email = 'Debes introducir un email.';
      isError = true;
    } else if (!regexEmail.test(email)) {
      errors.email = 'Debe ingresar un email con formato valido.';
      isError = true;
    }
    return isError ? errors : null;
  };

  const handleSubmit = event => {
    event.preventDefault();
    const err = onValidacion(email, password);
    if (err === null) {
      Login({ email, password });
    } else {
        setErrors(err);
    }
  };

  return (
    <section className="h-100 animate__animated animate__fadeIn">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-sm-12">
            <div className="text-center my-5">
              <img src={logo} alt="AlkyBank" width="200"/>
            </div>
            <div className={`card shadow-lg ${styles.FormCard}`}>
              <div className={`card-body ${styles.FormContent}`}>
                <h1 className="fs-4 card-title fw-bold mb-4">Iniciar sesión</h1>
                <form method="POST" className="needs-validation" noValidate autoComplete="off" id="loginform" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="email"><b>Correo electrónico</b></label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Ingrese su correo electronico"
                      name="email"
                      value={ email }
                      required
                      onChange={onInputChange}
                      />
                      {errors.email && <div className="alert alert-danger p-1 mt-2" role="alert">{errors.email}</div>}
                  </div>
                  <div className="mb-3">
                    <div className={`mb-2 w-100 ${styles.PasswordLabel}`}>
                      <label className="text-muted" htmlFor="password"><b>Contraseña</b></label>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Ingrese su contraseña"
                      name="password"
                      value={password}
                      required
                      onChange={onInputChange}
                    />
                    {errors.password && <div className="alert alert-danger p-1 mt-2" role="alert">{errors.password}</div>}
                  </div>
                  <div className="d-flex align-items-center">
                    <button type="submit" className="btn btn-primary ms-auto w-100">
                      Ingresar
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  ¿Todavia no sos Alkymer? <Link to="/Register" className="text-dark">Sumate</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};
