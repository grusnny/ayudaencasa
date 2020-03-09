import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormText, Container, Button } from 'reactstrap';
class NavBar extends Component {

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">AyudaEnCasa</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/home">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/page2">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/loginp">Login</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
    </nav>


    );
  }

}

export default NavBar;
/* <div className="NavBar">
<Container className='text-center'>
  <div className="link-container">
    <Link to="/page1" className="link">Página 1</Link>
  </div>
  <div className="link-container">
    <Link to="/page2" className="link">Página 2</Link>
  </div>
</Container>
</div> */