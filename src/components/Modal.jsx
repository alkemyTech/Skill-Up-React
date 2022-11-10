import React from "react";
import { useModal } from "../hooks/useModal";
import { GrClose } from "react-icons/gr";

function Modal({ titleModal, textModal, imgModal, price }) {
  const { setShowModal, showModal } = useModal();

  if (showModal) {
    return (
      <section className="absolute w-3/4 h-screen">
        <button className="" onClick={() => setShowModal(false)}>
          <GrClose />
        </button>
        <section className="title">
          <h3 className="">{titleModal}</h3>
        </section>
        <section>
          <span>{`Price the bill ${price}`}</span>
        </section>
      </section>
    );
  } else {
    return (
      <>
        <section className="modal flex flex-row items-center justify-around w-full h-8 rounded-xl bg-violet-800">
          <figure className="w-8 h-8">
            <img
              className="w-full h-full"
              src={imgModal}
              alt={`img ${titleModal}`}
            />
          </figure>
          <section>
            <p onClick={() => setShowModal(true)}>{textModal}</p>
          </section>
        </section>
      </>
    );
  }
}

export default Modal;
