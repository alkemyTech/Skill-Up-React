import React from 'react'
import { Link } from 'react-router-dom'
import ImagenNotFound from "../assets/img/404.png"

export default function NotFound()  {
  return (
      <div>
          <header className="bg-white">
              <div className="container px-6 py-16 mx-auto">
                  <div className="items-center lg:flex">
                      <div className="w-full lg:w-1/2">
                          <div className="lg:max-w-lg">
                              <h1 className="text-2xl text-gray-800 lg:text-3xl">Página no encontrada
                                  <span className="text-cyan-400"> Error 404</span></h1>
                                  <p className="mt-4 text-gray-600">La ruta que está queriendo acceder no existe</p>
                              <div className="lg:mt-0 lg:flex-shrink-0">
                                  <div className=" inline-flex rounded-md shadow mt-5">
                                      <button type="button"
                                              className="py-4 px-6  bg-cyan-600 hover:bg-cyan-900 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                          <Link to="/">Volver al inicio</Link>
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                          <img className="w-full h-full max-w-md" src={ImagenNotFound}
                               alt="404"/>
                      </div>
                  </div>

              </div>
          </header>
      </div>
  )
}
