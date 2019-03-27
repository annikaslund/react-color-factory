import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Colors from "./Colors";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/colors" render={() => <Colors />}/>
            <Route exact path="/colors/:color" render={() => <Color />}/>
            <Route exact path="/colors/new" render={() => <NewColorForm />}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
