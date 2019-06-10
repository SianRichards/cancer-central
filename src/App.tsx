import React from 'react';
import './App.css';
import Main from "./containers";
import SearchPage from "./containers/searchpg";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home"
const App: React.FC = () => {
  return (
    <div className="App">
        <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/searching-page" component={SearchPage} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
