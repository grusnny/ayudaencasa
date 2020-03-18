import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Categories from './Home/Categories'
import Home from './Home/Home';
import Loginp from './Login/Loginp';
import MyAccount from './MyAccount/MyAccount';
import LoginForm from "./Login/LoginForm";
import PageError from './PageError/PageError';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
           <Route exact path="/" 
           component={Categories}/>
           <Route
              exact
              path="/categorias"
              render={() => <Categories name="Categorias" />} />
            <Route
              exact
              path="/loginp"
              render={() => <Loginp name="Iniciar Sesión" />} />
            <Route
              exact
              path="/MyAccount"
              render={() => <MyAccount />} />
            <Route
              exact
              path="/home"
              render={() => <Home />} />
            <Route
              exact
              path="/logincorreo"
              render={() => <LoginForm />} />
            <Route component={PageError} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
import { Form } from 'reactstrap';
export default App;