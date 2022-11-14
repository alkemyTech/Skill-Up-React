import React, { useState } from 'react'
import ConfirmacionEnvioDinero from '../components/ConfirmacionEnvioDinero'
import EnvioDineroForm from '../components/EnvioDineroForm'
import UltimosEnvios from '../components/UltimosEnvios'


const EnvioDinero = () => {
  const [state, setState] = useState(0)
  return (
    <div className="pt-16 bg-stone-200">
      <h1 className="text-left pl-5 text-4xl font-bold text-sky-600">
        Envia Dinero
      </h1>

      <div className="flex justify-center items-center">
        {state == 0 ?
          <EnvioDineroForm state={state} setState={setState} />
          : <ConfirmacionEnvioDinero state={state} setState={setState} />
        }
      </div>
      <h2 className="text-left mt-14 pl-5 text-4xl font-bold text-sky-600">
        Últimos Envios
      </h2>
      <UltimosEnvios />
    </div>
  )
}

export default EnvioDinero