import React from "react";
import Modal from "../components/Modal";

const Gastos = () => {
  return (
    <>
      <main>
        <section className="main w-full h-screen flex flex-col items-center text-sky-600">
          <section className="title p-10">
            <h2 className="text-4xl">Something</h2>
            <h4 className="text-2xl">Something</h4>
          </section>
          <section className="cardData grid grid-cols-2 grid-rows-2 items-center justify-items-center w-2/4 h-72 text-stone-200 rounded-lg bg-violet-900">
            <span className="col-start-1 col-span-1 row-start-1 row-span-1">{`Name : ${""}`}</span>
            <span className="col-start-2 col-span-1 row-start-1 row-span-1">{`LastName : ${""}`}</span>
            <span className="col-start-1 col-span-2 row-start-2 row-span-1">{`Money : $${124}`}</span>
          </section>
          <section className="bills flex flex-col justify-start w-9/12 overflow-y-scroll py-8 mt-8 mb-10">
            <Modal
              titleModal={"COMO!"}
              textModal={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro libero ducimus amet."
              }
              imgModal={
                "data:image/jpeg;base64,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"
              }
              price={123}
            />

            <Modal
              titleModal={"Telefonia Movil"}
              textModal={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea modi neque culpa, nisi voluptatum!"
              }
              imgModal={
                "https://www.redpoints.com/wp-content/uploads/2019/01/consumer20electronics201.png"
              }
              price={982}
            />
            <Modal
              titleModal={"Gas"}
              textModal={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio!"
              }
              imgModal={
                "https://prensanews.co/wp-content/uploads/2021/03/Gas-Natural.jpg"
              }
              price={7443}
            />
          </section>
        </section>
      </main>
    </>
  );
};

export default Gastos;
