import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Sobre
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Olá! Sou Alan Gonçalves, muito prazer. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              A tecnologia sempre esteve no meu dia a dia, desde a criação de
              pequenos processos operacionais, até a integração de sistemas para
              definir as melhores rotas de entrega. Estou sempre em busca de
              projetos e desafios que impactem não somente as empresas como
              também a sociedade, o que me fez tomar a decisão de transição de
              carreira da área de Logística para Desenvolvimento de Software em
              2020.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
