import React from "react";
import "./Header.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export default function Header() {
  return (
    <>
      <div className="section presentation" id="home">
        <img src="/me.jpg" alt="" />
        <h4 className="h4">PORTFOLIO</h4>
        <h1 className="display-1 h1 name">Denis de Castro Reis</h1>
        <h5 className="mt-1 h5">| FULL-STACK DEVELOPER |</h5>
        <div className="mt-3">
          <button className="buttonClass btn"> SAIBA MAIS</button>
        </div>
        <div className="contacts mb-5">
          <a href="" className="mr-5">
            <FaGithub className="icon icon1" />
          </a>
          <a href="" className="ml-5">
            <FaLinkedin className="icon icon2" />
          </a>
        </div>
      </div>
    </>
  );
}
