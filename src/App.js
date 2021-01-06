import React from "react";
import LoginForm from "./components/LoginForm";
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import DetailedPage from './components/DetailedPage'

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/home/:id' component={DetailedPage} />
      </Switch>
    </div>
  );
}

export default App;
