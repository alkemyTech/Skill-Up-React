import React, { useState } from 'react'
import ConfirmacionEnvioDinero from '../components/ConfirmacionEnvioDinero'
import EnvioDineroForm from '../components/EnvioDineroForm'
import UltimosEnvios from '../components/UltimosEnvios'


const EnvioDinero = () => {
  const [sendTransaction, setSendTransaction] = useState()
  const [state, setState] = useState(0)
  return (
		<div>
			<h1 className="text-center text-4xl mt-6 lg:text-left lg:mt-14 lg:pl-5 lg:text-5xl font-bold text-cyan-500">
				Envia Dinero
			</h1>

			<div className="flex justify-center items-center">
				{state == 0 ? (
					<EnvioDineroForm state={state} setState={setState} />
				) : (
					<ConfirmacionEnvioDinero
            setSendTransaction={setSendTransaction}
						state={state}
						setState={setState}
					/>
				)}
			</div>
			<h2 className=" mt-[50px] text-center text-4xl lg:text-left lg:mt-14 lg:pl-5 lg:text-5xl font-bold text-cyan-500">
				Últimos Envios
			</h2>
			<UltimosEnvios sendTransaction={sendTransaction} />
		</div>
  );
}

export default EnvioDinero