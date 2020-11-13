import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Ranking.css";

export default class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://localhost:3333/ranking?_sort=tempo,movimentos&_order=asc,asc&_limit=10"
    )
      .then((resultado) => resultado.json())
      .then((resultadoJSON) => {
        this.setState((state) => {
          return { ranking: resultadoJSON };
        });
      });
  }

  render() {
    return (
      <div className="ranking-container">
        <table>
          <thead>
            <tr>
              <td>Ranking</td>
              <td>Jogador</td>
              <td>Movimentos</td>
              <td>Tempo</td>
            </tr>
          </thead>
          <tbody>
            {this.state.ranking.map((player, index) => (
              <tr className={index % 2 === 0 ? "even" : "odd"}>
                <td>{index + 1}</td>
                <td>{player.jogador}</td>
                <td>{player.movimentos}</td>
                <td>{player.tempo} s</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-jogar-container">
          <Link to="/jogo">Jogar</Link>
        </div>
      </div>
    );
  }
}
