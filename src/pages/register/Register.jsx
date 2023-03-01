/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/alkemy_logo.svg';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import styles from './Register.module.css';

const registerInputs = {
  email: '',
  password: '',
  first_name: '',
  last_name: ''
};

export const Register = () => {
  const { Register, errorMessage } = useAuth();

  const [errors, setErrors] = useState({});

  const { email, password, first_name, last_name, onInputChange } = useForm(registerInputs);

  const onValidacion = (email, password) => {
    let isError = false;
        // eslint-disable-next-line
    const regexEmail = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
    const errors = {};

    if (!email.trim()) {
      errors.email = 'Debes introducir un email.';
      isError = true;
    } else if (!regexEmail.test(email)) {
      errors.email = 'Debe ingresar un email con formato valido.';
      isError = true;
    }
    if (!first_name.trim()) {
      errors.first_name = 'Debes introducir un nombre.';
      isError = true;
    }
    if (!last_name.trim()) {
      errors.last_name = 'Debes introducir un apellido.';
      isError = true;
    }
    if (!password.trim()) {
      errors.password = 'Debes introducir una contraseña.';
      isError = true;
    } else if (password.length < 6) {
      errors.password = 'Ingrese una contraseña de por lo menos seis caracteres.';
      isError = true;
    }
    return isError ? errors : null;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const err = onValidacion(email, password, first_name, last_name);
    if (err === null) {
      Register({ email, password, first_name, last_name });
    } else {
        setErrors(err);
    }
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      console.log(errorMessage);
    }
  }, [errorMessage]);

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
                <h1 className="fs-4 card-title fw-bold mb-4">Sumate a Alybank</h1>
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
                      autoFocus
                      onChange={onInputChange}
                      />
                      {errors.email && <div className="alert alert-danger p-1 mt-2" role="alert">{errors.email}</div>}
                  </div>
                  <div className="mb-3">
                    <div className={`mb-2 w-100 ${styles.PasswordLabel}`}>
                      <label className="text-muted" htmlFor="password"><b>Nombre</b></label>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder='Ingresa tu nombre'
                      name="first_name"
                      // eslint-disable-next-line camelcase
                      value={first_name}
                      minLength="3"
                      required
                      autoComplete="true"
                      onChange={onInputChange}
                    />
                      {errors.first_name && <div className="alert alert-danger p-1 mt-2" role="alert">{errors.first_name}</div>}
                  </div>
                  <div className="mb-3">
                    <div className={`mb-2 w-100 ${styles.PasswordLabel}`}>
                      <label className="text-muted" htmlFor="password"><b>Apellido</b></label>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder='Ingresa tu apellido'
                      name="last_name"
                      // eslint-disable-next-line camelcase
                      value={last_name}
                      minLength="2"
                      required
                      autoComplete="true"
                      onChange={onInputChange}
                    />
                      {errors.last_name && <div className="alert alert-danger p-1 mt-2" role="alert">{errors.last_name}</div>}
                  </div>
                  <div className="mb-3">
                    <div className={`mb-2 w-100 ${styles.PasswordLabel}`}>
                      <label className="text-muted" htmlFor="password"><b>Contraseña</b></label>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder='Ingresa tu contraseña'
                      name="password"
                      value={password}
                      required
                      autoComplete="true"
                      onChange={onInputChange}
                    />
                    {errors.password && <div className="alert alert-danger p-1 mt-2" role="alert">{errors.password}</div>}
                  </div>
                  <div className="d-flex align-items-center">
                    <button type="submit" className="btn btn-primary ms-auto w-100" >
                      Registrate
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer py-3 border-0 ">
                <div className="text-center ">
                  ¿Ya tenes cuenta? <Link to="/" className="text-dark">Ingresa</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};
