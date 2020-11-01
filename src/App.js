import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Header from "./components/UI/Header";
import CharacterPage from "./components/Pages/CharacterPage";
import MainPage from "./components/Pages/MainPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Redirect from exact="/" to="/home" />
          <Route exact path="/home">
            <MainPage />
          </Route>
          <Route path="/character/:charName" component={CharacterPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
