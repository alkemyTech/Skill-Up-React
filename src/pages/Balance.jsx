import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UltimosEnvios from '../components/UltimosEnvios'
import UltimosCargas from '../components/UltimasCargas'
import { AuthContext } from '../context/loginContext'
import useFetchData from '../hooks/useFetchData'

const Balance = () => {

  const {getAccountID, getToken} = useContext(AuthContext)

  const {fetchedData, error, loading} = useFetchData({method: "GET", fetchUrl: `/accounts/${getAccountID()}`, headers: {Accept: "application/json", Authorization: `Bearer ${getToken()}`}})

  return (
    <div>
      <section className="w-full min-h-screen bg-white">
      <div className="container relative flex flex-col px-6 py-20 mx-auto">
            <section className="flex items-center flex-1">
                <div className="flex flex-col w-full ">
                    <h1 className="text-4xl font-extrabold text-center lg:text-7xl 2xl:text-7xl">
                        <span className="text-sky-500">
                            Tu balance es de ${fetchedData.money}
                        </span>
                    </h1>
                    <p className="lg:text-2xl 1x2:text-3xl mx-auto mt-6 text-lg text-center text-gray-400">
                      Si desea agregar saldo a su cuenta puede hacerlo dando click en <Link to="/carga-saldo" className='underline'>Carga tu saldo</Link>
                    </p>
                </div>
            </section>
            <section>
              <h2 className='text-4xl font-extrabold text-center my-10 lg:text-5xl 2xl:text-5xl mx-auto py-5 text-sky-500'>Ultimos Gastos</h2>
              <UltimosEnvios />
            </section>
            <section>
              <h2 className='text-4xl font-extrabold text-center my-10 lg:text-5xl 2xl:text-5xl mx-auto py-5 text-sky-500'>Ultimos Ingresos</h2>
              <UltimosCargas />
            </section>
        </div>
      </section>
    </div>
  )
}

export default Balance