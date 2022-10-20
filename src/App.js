import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>Seach Page</h1>
          </Route>
          <Route>
            <Home path="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
