import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import House from './Icons/House'

const ingresoSaldo = [{monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}]
const gastos = [{monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}]
const envioDinero = [{monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}]

function Movimientos() {

    const [token, setToken] = useState("")
    console.log(token)
    // Posible forma de hacer fetch //
    const getAuth = async () => {
      try {
          const response = await axios.post(
              'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login',
              {
                  'email': 'eldiego@maradona.com',
                  'password': 'eldiego'
              },
              {
                  headers: {
                      'accept': 'application/json',
                      'Content-Type': 'application/json'
                  }
              }
          );
          const data = await response.json()
          return data
      } catch (error) {
          console.log(error)
      }
  }

  const getData = async () => {
      try {
          const response = await fetch("https://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users", {
              headers: {
                  Accept: "application/json",
                  Authorization: token.accessToken,
              }
          })
          if (!response.ok) {
              throw new Error(`Error! status: ${response.status}`);
          }
          const data = await response.json()
          console.log(data) 
      } catch (error) {
          console.log(error)
      }
  }
  useEffect(() => {
      getAuth().then(token => setToken(token))
      if(token) {
        getData()
      }
      // getData().then(console.log)
  }, [])
  const movimientos = ingresoSaldo.concat(gastos).concat(envioDinero)

  return (
    <div>
    {
      movimientos.map((movimiento, index) => {
        return (
          <div key={index} className="flex justify-between items-center gap-[20px] mb-4">
            <House />
            <div className=''>
              <p className='text-sm mb-2'>{movimiento.concepto}</p>
              <p className='text-sm'>{movimiento.fecha}</p>
            </div>
            <p className='text-base'>${movimiento.monto}</p>
          </div>
        )
      })
    }  
    </div> 
  )
}

export default Movimientos