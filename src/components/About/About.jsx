import React from "react";
import {
  FaLaravel,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaVuejs,
  FaCss3,
  FaHtml5,
  FaGit,
} from "react-icons/fa";
import "./About.css";
function About() {
  return (
    <div className="section about" id="about">
      <div className="firstContent mt-5">
        <h5 className="sobre mt-5">Sobre mim...</h5>
        <h1>Sobre o meu trabalho.</h1>
        <div className="text mt-5">
          <p>
            Estudante de engenharia de software após uma mudança de área, sem
            nunca desistir de seguir meu desejo de trabalhar com tecnologia,
            sigo com força de vontade e desejo de aprender mais e melhorar a
            cada dia, atuo como desenvolvedor full-stack atualmente e ofereço
            também a opção de freelancer auxiliando com projetos web, mobile,
            front-end, back-end e design.
          </p>
        </div>
      </div>
      <div className="secondContent mt-5 d-flex flex-wrap flex-md-nowrap mb-5">
        <div className="firstSection mr-3">
          <div className="info">
            <h4>Nome:</h4>
            <h5>Denis de Castro Reis</h5>
          </div>
          <div className="info">
            <h4>Nascimento</h4>
            <h5>29/11/1998</h5>
          </div>
          <div className="info">
            <h4>Cargo</h4>
            <h5>Junior - Full-stack</h5>
          </div>
          <div className="info">
            <h4>Email:</h4>
            <h5>reisdenis98@gmail.com</h5>
          </div>
        </div>
        <div className="secondSection">
          <div className="info">
            <h4>Tecnologias:</h4>
            <div className="icons">
              <FaLaravel className="laravel icon" />
              <FaReact className="react icon" />
              <FaHtml5 className="html icon" />
              <FaCss3 className="css icon" />
              <FaBootstrap className="bootstrap icon" />
              <FaVuejs className="vue icon" />
              <FaGithub className="github icon" />
              <FaGit className="git icon" />
            </div>
          </div>
          <div className="info">
            <h4>Nascimento</h4>
            <h5>29 de Novembro de 1998</h5>
          </div>
          <div className="info">
            <h4>Cargo</h4>
            <h5>Junior - Full-stack</h5>
          </div>

          <div className="info">
            <h4>Email:</h4>
            <h5>reisdenis98@gmail.com</h5>
          </div>
        </div>
      </div>
      <div className="buttons d-flex flex-wrap">
        <a
          href="https://wa.me/552112997245856"
          target="blank"
          className="btn button1 button"
        >
          ENTRE EM CONTATO
        </a>
        <button className="btn button2 button">DOWNLOAD CV</button>
      </div>
    </div>
  );
}

export default About;
