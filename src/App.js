import "./App.css";
import Header from "./Header";
import TelaRanking from "./TelaRanking";
import TelaJogoDaVelha from "./TelaJogoDaVelha";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={TelaRanking} />
          <Route exact path="/jogo" component={TelaJogoDaVelha} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
