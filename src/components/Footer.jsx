import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { FiTwitter } from "react-icons/fi";
import ReactWhatsapp from "react-whatsapp";

const Footer = () => {
  return (
    <div className="flex justify-center items-center text-gray-300 bg-[#0a192f] social-icon">
      <ul className="flex flex-row justify-between">
        <li className="h-[60px] flex justify-between items-center">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/alansouzagoncalves/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="h-[60px] flex justify-between items-center">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/alansgoncalves"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li className="h-[60px] flex justify-between items-center">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://twitter.com/manovelho85"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter size={30} />
          </a>
        </li>
        <li className="h-[60px] flex justify-between items-center">
          <ReactWhatsapp number="+55 21981621029" style={{ display: "flex" }}>
            <BsWhatsapp size={30} />
          </ReactWhatsapp>
        </li>
        <li className="h-[60px] flex justify-between items-center">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://drive.google.com/file/d/17VK0ZRmJvLRmvmxg6Xm9nxgGZATs3pZX/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <CgFileDocument size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
