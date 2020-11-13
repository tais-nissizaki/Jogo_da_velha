import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div className="header-container">
          <div className="header-link">
            <a
              href="https://github.com/tais-nissizaki/jogo_da_velha"
              target="_blank"
              rel="noreferrer"
            >
              Visitar o GitHub do desenvolvedor
            </a>
          </div>
          <h2>Bem vindo ao jogo da velha</h2>
        </div>
      </header>
    );
  }
}
