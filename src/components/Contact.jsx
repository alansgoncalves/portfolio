import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] text-gray-300 contact-form"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="">
            <div className="sm:text-left pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                Contato
              </p>
            </div>
            <div>
              <p className="flex flex-row items-center">
                <AiOutlineMail size={30} />
                &nbsp;&nbsp;alansg.tech@gmail.com
              </p>
            </div>
            <br />
            <div>
              <p className="flex flex-row items-center">
                <BsTelephone size={30} />
                &nbsp;&nbsp;(21) 98162-1029
              </p>
            </div>
            <br />
            <div>
              <p className="flex flex-row items-center">
                <GoLocation size={30} />
                &nbsp;&nbsp;Rua Silvia Pozzano, 2880 - Rio de Janeiro/RJ
              </p>
            </div>
          </div>
          <div className="talk-form">
            <p
              className="
              text-4xl
              font-bold
              inline
              border-b-4
              border-pink-600
              text-gray-300"
            >
              Vamos conversar?
            </p>
            <br />
            <br />
            <p>
              Adoraria ouvir suas ideias para trabalharmos juntos. Você pode
              entrar em contato comigo através do formulário abaixo:
            </p>
            <form
              method="POST"
              action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
              className="flex flex-col max-w-[600px] w-full form-contact"
            >
              <input
                className="bg-[#ccd6f6] p-2 mt-10"
                type="text"
                placeholder="Informe seu nome"
                name="name"
              />
              <input
                className="my-4 p-2 bg-[#ccd6f6]"
                type="email"
                placeholder="Informe seu e-mail"
                name="email"
              />
              <textarea
                className="bg-[#ccd6f6] p-2"
                name="message"
                rows="4"
                placeholder="Mensagem"
              ></textarea>
              <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
