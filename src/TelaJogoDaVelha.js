import React from "react";
import { Link } from "react-router-dom";
import "./TelaJogoDaVelha.css";
import JogoDaVelha from "./JogoDaVelha";

export default class TelaJogoDaVelha extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <div className="header-container">
            <div className="header-link-partida">
              <Link to="/">{"<< Voltar para página inicial"}</Link>
            </div>
            <h2>Partida</h2>
          </div>
        </header>
        <JogoDaVelha />
      </div>
    );
  }
}
