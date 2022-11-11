import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";

const ConfirmacionEnvioDinero = ({ state, setState }) => {
  const [names, setNames] = useState({
    emisor: "",
    receptor: "",
  });
  const { token, user } = useUser();
  const auth = `Bearer ${token}`;
  const headers = {
    Authorization: auth,
    accept: "application/json",
    "Content-Type": "application/json",
  };
  useEffect(() => {
    const getNames = async () => {
      const toAccount = await (
        await fetch(
          `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/${state.to_account_id}`,
          {
            headers,
          }
        )
      ).json();
      const toUser = await (
        await fetch(
          `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users/${toAccount.userId}`,
          {
            headers,
          }
        )
      ).json();
      setNames({
        emisor: `${user.first_name} ${user.last_name}`,
        receptor: `${toUser.first_name} ${toUser.last_name}`,
      });
    };
    getNames();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await fetch(
      `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          ...state,
          date: new Date(),
          type: "topup",
        }),
      }
    );
    location.reload();
    return false;
  };
  return (
    <div className="w-2/5 p-7 bg-cyan-500 rounded">
      <form action="" onSubmit={onSubmit}>
        <div className="mt-3 flex flex-col gap-4">
          <span className="text-stone-200 font-bold text-left">
            Emisor: {names.emisor}
          </span>
        </div>

        <div className="mt-3 flex flex-col gap-3">
          <span className="text-stone-200 font-bold text-left">
            Receptor: {names.receptor}
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <span className="text-stone-200 font-bold text-left">
            Cuenta de destino: {state.to_account_id}
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <span className="text-stone-200 font-bold text-left">
            Concepto: {state.concept}
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <span className="text-stone-200 font-bold text-left">
            Suma: {state.amount}
          </span>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="bg-stone-200 font-bold text-cyan-500 pt-1 pb-1 pl-3 pr-3 flex rounded  items-center justify-center text-center "
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmacionEnvioDinero;
