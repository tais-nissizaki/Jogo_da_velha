import React from "react";
import Ranking from "./Ranking";
import Header from "./Header";

export default class TelaRanking extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Header />
        </header>
        <Ranking />
      </div>
    );
  }
}
