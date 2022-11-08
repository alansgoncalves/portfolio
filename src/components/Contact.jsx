import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useEffect } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setValid] = useState(false);

  const validate = () => {
    return name.length && email.length && message.length;
  };

  useEffect(() => {
    const isValid = validate();
    setValid(isValid);
  }, [name, email, message]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tcksfw9",
        "template_2hn8dwk",
        e.target,
        "pSSLWIzHenmUEv1Yv"
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso! :)");
        },
        (error) => {
          alert(error.message);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

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
              onSubmit={sendEmail}
              className="flex flex-col max-w-[600px] w-full form-contact"
            >
              <input
                className="bg-[#ccd6f6] p-2 mt-10"
                type="text"
                placeholder="Informe seu nome"
                name="name"
                value={name}
                style={{ color: "#000000" }}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="my-4 p-2 bg-[#ccd6f6]"
                type="email"
                placeholder="Informe seu e-mail"
                name="email"
                value={email}
                style={{ color: "#000000" }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="bg-[#ccd6f6] p-2"
                value={message}
                name="message"
                rows="4"
                placeholder="Mensagem"
                style={{ color: "#000000" }}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                disabled={!isValid}
                className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
              >
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
