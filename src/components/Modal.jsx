import React from "react";
import { useModal } from "../hooks/useModal";
import { GrClose } from "react-icons/gr";

function Modal({ titleModal, textModal, imgModal, price }) {
  const { setShowModal, showModal, setSurePay, surePay } = useModal();

  if (showModal) {
    return (
      <section className="absolute right-0 top-9 left-32 w-3/4 h-screen rounded-xl bg-sky-400">
        <button
          className="absolute right-8 top-4"
          onClick={() => setShowModal(false)}
        >
          <GrClose />
        </button>
        <section className="title pt-10">
          <h3 className="text-4xl">{titleModal}</h3>
        </section>
        <section className="context pt-8 px-10">
          <p className="">{textModal}</p>
        </section>

        <section className="payment pt-10">
          <span>{`Price the bill ${price}`}</span>
          {surePay ? (
            <section className="acceptPay">
                <span>Seguro que quieres</span>
            </section>
          ) : (
            <section className="flex flex-col items-center justify-center pt-10">
              <span>Deseas pagar el recibo?</span>
              <button
                onClick={() => null}
                className="w-24 my-3 p-2 text-stone-200 border-2 border-solid border-violet-800"
              >
                Si
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="w-24 my-3 p-2 text-stone-200 border-2 border-solid border-violet-800"
              >
                Aun no
              </button>
            </section>
          )}
        </section>
      </section>
    );
  } else {
    return (
      <>
        <section className="modal flex flex-row items-center justify-around w-3/4 h-8 p-5 mt-0 mb-3 mx-auto rounded-xl bg-violet-800">
          <figure className="w-10 h-10">
            <img
              className="w-full h-full rounded-lg"
              src={imgModal}
              alt={`img ${titleModal}`}
            />
          </figure>
          <section>
            <p onClick={() => setShowModal(true)} className="text-sm">
              {textModal}
            </p>
          </section>
        </section>
      </>
    );
  }
}

export default Modal;
