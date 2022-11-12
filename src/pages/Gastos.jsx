import React from "react";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/loginContext";
import { errorNotification, successNotification } from "../utils/notifications";
import { ToastContainer } from 'react-toastify';

const Gastos = () => {
  const { getAccountID, getToken } = useContext(AuthContext);

  const [valorDolar, setValorDolar] = useState(0);
  const [data, setData] = useState({
    monto: "",
    moneda: "",
    concepto: "",
    date: new Date().toISOString().replace("T", " ").replace("Z", ""),
    type: "payment",
  });

  useEffect(() => {
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
      .then((res) => res.json())
      .then((res) => setValorDolar(parseInt(res[0].casa.compra)));
  }, []);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let conceptoValido = false;
    let monedaValida = false;
    let montoValido = false;

    if (data.monto > 0 && !isNaN(data.monto)) {
      montoValido = true;
    } else {
		  errorNotification("Monto no valido");
    }

    if (data.moneda === "ARS" || data.moneda === "USD") {
      if (data.moneda === "USD") {
        data.monto = data.monto * valorDolar;
        monedaValida = true;
      } else {
        monedaValida = true;
      }
    } else {
		  errorNotification("Moneda no valida");
    }

    if (data.concepto !== "") {
      conceptoValido = true;
    } else {
		  errorNotification("Concepto no valido");
    }
    if (monedaValida && conceptoValido && montoValido) {
      cargarGasto();
    }
  };

  const cargarGasto = () => {
    const { type, concepto, monto } = data;

    fetch(
      `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/1`,
      {
        body: JSON.stringify({
          type: "payment",
          amount: +monto,
          concept: concepto,
        }),
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if(data.error){
          errorNotification(data.error);
        }
        setData({
          monto: "",
          moneda: "",
          concepto: "",
        });
        successNotification("Gasto cargado con exito");
      })
  };

  return (
    <div>
      <section className="gastos w-full my-10">
        <ToastContainer />
        <h1 className="text-center text-4xl mt-6 lg:text-left lg:mt-14 lg:pl-5 lg:text-5xl font-bold text-cyan-500">
          Cargá tus gastos
        </h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <section className="bg-cyan-500 mx-auto rounded mt-[50px] md:w-[60%] w-[80%] lg:w-2/5 lg:p-10 p-[40px]">
            <label>
              <section className="sectionLabel flex flex-col items-center justify-center p-3 my-4">
                <span className="text-stone-200 text-left mb-3">
                  Monto a cargar:
                </span>
                <input
                  value={data.monto}
                  min={0}
                  type="number"
                  name="monto"
                  className="w-60 pt-1.5 pb-1 pr-3  bg-white text indent-1.5 text-black outline-stone-200 rounded placeholder:text-black"
                  onChange={handleOnChange}
                  placeholder="Ingrese el monto a cargar"
                  required
                />
              </section>
            </label>

            <label>
              <section className="sectionLabel flex flex-col items-center justify-center p-3 my-4">
                <span className="text-stone-200 text-left mb-3">
                  Moneda a utilizar:
                </span>
                <select
                  value={data.moneda}
                  className="w-60 pt-2 pb-2 rounded"
                  name="moneda"
                  onChange={handleOnChange}
                >
                  <option value="">Elegí tu moneda</option>
                  <option value="ARS">ARS</option>
                  <option value="USD">USD</option>
                </select>
              </section>
            </label>

            <label>
              <section className="sectionLabel flex flex-col items-center justify-center p-3 my-4">
                <span className="text-stone-200 text-left mb-3">
                  Concepto de la carga:
                </span>
                <input
                  value={data.concepto}
                  name="concepto"
                  type="text"
                  className="w-60 pt-1.5 pb-1 pr-3  bg-white text indent-1.5 text-black outline-stone-200 rounded placeholder:text-black"
                  onChange={handleOnChange}
                  placeholder="Ingrese el concepto de la carga"
                  required
                />
              </section>
            </label>

            <button
              type="submit"
              className="bg-white font-bold text-cyan-600 py-2 px-5 flex rounded text-lg  items-center justify-center mx-auto mt-6"
            >
              Cargar
            </button>
          </section>
        </form>
      </section>
    </div>
  );
};

export default Gastos;
