import React, { Component } from 'react';
import firebase from 'firebase'
import "../NavBar/NavBar.css";
class NavBar extends Component {

  render() {

    var text = "Aún no has iniciado sesión";
    var usuario=JSON.parse(localStorage.getItem("data"));
    if (usuario != null) {
      text = usuario.user.displayName;
    }

    const onLogOut = () => {
      firebase.auth().signOut().then(function () {
        console.log("Log Out correcto");
        window.localStorage.clear()
        window.location.href = "/loginp";
      }).catch(function (error) {
        // An error happened.
      });
    }

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">AyudaEnCasa</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/categorias">Buscador<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/accountController">Mi Cuenta</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pedidos">Trabajos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/loginp">Iniciar sesión</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <h4> {text}</h4>
            <button class="btn btn-secondary my-2 my-sm-0" onClick={onLogOut}>Cerrar sesión</button>
          </form>
        </div>
      </nav>


    );
  }

}

export default NavBar;