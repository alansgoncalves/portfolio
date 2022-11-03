import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full form-contact"
      >
        <div className="pb-8 contact">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contato
          </p>
          <p className="text-gray-300 py-4">
            Para entrar em contato, preencha o formulário abaixo
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
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
          rows="6"
          placeholder="Mensagem"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
