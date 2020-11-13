import React from "react";
import "./JogoDaVelha.css";

export default class JogoDaVelha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jogadas: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      movimentos: 0,
      jogador: "H",
      nomeJogador: "",
    };
    this.alterarNomeJogador = this.alterarNomeJogador.bind(this);
    this.enviarDados = this.enviarDados.bind(this);
  }

  handleClickPosition(x, y) {
    if (!this.verificaJaPreenchido(x, y)) {
      this.registrarJogada(x, y);
      setTimeout(() => this.jogadaMaquina(), 1000);
    }
  }

  registrarJogada(x, y) {
    this.setState((state) => {
      const jodaga = state.jogadas;
      jodaga[y][x] = state.jogador === "H" ? "X" : "O";
      return {
        ...this.state,
        jogadas: jodaga,
        movimentos: state.movimentos + 1,
        jogador: state.jogador === "H" ? "M" : "H",
        vencedor: "",
      };
    });
    this.verificarGanhador();
  }

  verificarGanhador() {
    if (
      (this.verificarCoordenadas(0, 0, 1, 0, 2, 0) &&
        this.state.jogadas[0][0] === "X") ||
      (this.verificarCoordenadas(0, 1, 1, 1, 2, 1) &&
        this.state.jogadas[1][0] === "X") ||
      (this.verificarCoordenadas(0, 2, 1, 2, 2, 2) &&
        this.state.jogadas[2][0] === "X") ||
      (this.verificarCoordenadas(0, 0, 0, 1, 0, 1) &&
        this.state.jogadas[0][0] === "X") ||
      (this.verificarCoordenadas(1, 0, 1, 1, 1, 2) &&
        this.state.jogadas[0][1] === "X") ||
      (this.verificarCoordenadas(2, 0, 2, 1, 2, 2) &&
        this.state.jogadas[0][2] === "X") ||
      (this.verificarCoordenadas(0, 0, 1, 1, 2, 2) &&
        this.state.jogadas[0][0] === "X") ||
      (this.verificarCoordenadas(2, 0, 1, 1, 0, 2) &&
        this.state.jogadas[0][2] === "X")
    ) {
      this.setState((state) => {
        return {
          ...state,
          vencedor: "H",
        };
      });
    } else if (
      (this.verificarCoordenadas(0, 0, 1, 0, 2, 0) &&
        this.state.jogadas[0][0] !== "X") ||
      (this.verificarCoordenadas(0, 1, 1, 1, 2, 1) &&
        this.state.jogadas[1][0] !== "X") ||
      (this.verificarCoordenadas(0, 2, 1, 2, 2, 2) &&
        this.state.jogadas[2][0] !== "X") ||
      (this.verificarCoordenadas(0, 0, 0, 1, 0, 1) &&
        this.state.jogadas[0][0] !== "X") ||
      (this.verificarCoordenadas(1, 0, 1, 1, 1, 2) &&
        this.state.jogadas[0][1] !== "X") ||
      (this.verificarCoordenadas(2, 0, 2, 1, 2, 2) &&
        this.state.jogadas[0][2] !== "X") ||
      (this.verificarCoordenadas(0, 0, 1, 1, 2, 2) &&
        this.state.jogadas[0][0] !== "X") ||
      (this.verificarCoordenadas(2, 0, 1, 1, 0, 2) &&
        this.state.jogadas[0][2] !== "X")
    ) {
      this.setState((state) => {
        return {
          ...state,
          vencedor: "M",
        };
      });
    }
  }

  verificarCoordenadas(x1, y1, x2, y2, x3, y3) {
    return (
      this.state.jogadas[y1][x1] === this.state.jogadas[y2][x2] &&
      this.state.jogadas[y1][x1] === this.state.jogadas[y3][x3] &&
      this.state.jogadas[y3][x3] !== ""
    );
  }

  verificaJaPreenchido(x, y) {
    return this.state.jogadas[y][x] !== "";
  }

  jogadaMaquina() {
    let x = 0;
    let y = 0;
    do {
      x = Math.floor(Math.random() * 3);
      y = Math.floor(Math.random() * 3);
    } while (this.verificaJaPreenchido(x, y));
    this.registrarJogada(x, y);
  }
  enviarDados(event) {
    alert(this.state.nomeJogador);

    const opcoes = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jogador: this.state.nomeJogador,
        movimentos: 3,
        tempo: 20,
      }),
    };
    fetch(`http://localhost:3333/ranking`, opcoes)
      .then((resposta) => {
        return resposta.json();
      })
      .then((dados) => {});

    event.preventDefault();
  }
  alterarNomeJogador(event) {
    this.setState({ nomeJogador: event.target.value });
  }

  render() {
    return (
      <div className="container-jogo">
        <div style={{ width: "99%", flexDirection: "row" }}>
          <div className="div-humano">
            {this.state.jogador === "H" ? "Humano" : "Máquina"}
          </div>
          <div className="container-tabela-jogo">
            <table className="tabela-jogo">
              <tr>
                <td onClick={() => this.handleClickPosition(0, 0)}>
                  {this.state.jogadas[0][0]}
                </td>
                <td onClick={() => this.handleClickPosition(1, 0)}>
                  {this.state.jogadas[0][1]}
                </td>
                <td onClick={() => this.handleClickPosition(2, 0)}>
                  {this.state.jogadas[0][2]}
                </td>
              </tr>
              <tr>
                <td onClick={() => this.handleClickPosition(0, 1)}>
                  {this.state.jogadas[1][0]}
                </td>
                <td onClick={() => this.handleClickPosition(1, 1)}>
                  {this.state.jogadas[1][1]}
                </td>
                <td onClick={() => this.handleClickPosition(2, 1)}>
                  {this.state.jogadas[1][2]}
                </td>
              </tr>
              <tr>
                <td onClick={() => this.handleClickPosition(0, 2)}>
                  {this.state.jogadas[2][0]}
                </td>
                <td onClick={() => this.handleClickPosition(1, 2)}>
                  {this.state.jogadas[2][1]}
                </td>
                <td onClick={() => this.handleClickPosition(2, 2)}>
                  {this.state.jogadas[2][2]}
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            flexDirection: "row",
          }}
        >
          {this.state.vencedor !== "" && this.state.vencedor === "H" && (
            <div>
              <form onSubmit={this.enviarDados}>
                <div>Você venceu</div>
                <div>
                  <input
                    type="text"
                    value={this.state.nomeJogador}
                    onChange={this.alterarNomeJogador}
                  />
                </div>
                <div>
                  <input type="submit" value="Finalizar" />
                </div>
              </form>
            </div>
          )}
          {this.state.vencedor !== "" && this.state.vencedor === "M" && (
            <div>A máquina venceu</div>
          )}
        </div>
      </div>
    );
  }
}
