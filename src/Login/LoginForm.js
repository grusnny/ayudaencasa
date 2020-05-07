import React from 'react';
import { Button, Container } from 'reactstrap';
import Title2 from '../Components/Title2';
import firebase from "../firebase";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const axios = require('axios');

var dataFromlocalStorage = JSON.parse(localStorage.getItem("data"))
console.info(dataFromlocalStorage);

function LoginForm() {

  const [userTel, setUserTel] = React.useState()
  const [userMailAlt, setUserMailAlt] = React.useState()
  const db = firebase.firestore()

  
  const onCreate = () => {

    var mensaje = document.getElementById('mensaje');
    var loading = document.getElementById('loading');
    
    loading.style.display = 'block';
    var user = firebase.auth().currentUser;
    while (user == null) {
     user = firebase.auth().currentUser;    
    }
    var nameT, emailT, photoUrlT, uidT, emailVerifiedT;
    if (user != null) {
      nameT = user.displayName;
      emailT = user.email;
      photoUrlT = user.photoURL;
      emailVerifiedT = user.emailVerified;
      uidT = user.uid;

      const querystring = require('querystring');
      axios.post('https://microservicio-autenticacion.herokuapp.com/user', querystring.stringify({ 
      mail: user.email, 
      mailAlt: userMailAlt,
      name: user.displayName, 
      photo: user.photoURL, 
      telephone: userTel, 
      uId: user.uid }))
           .then(function(res) {
              if(res.status==200) {
                //mensaje.innerHTML = 'El nuevo Post ha sido almacenado con id: ' + res;
                console.log(res.status);
                console.log(res.data);
              }
            }).catch(function(err) {
                console.log(err);
            })
              .then(function() {
                loading.style.display = 'none';
                console.log("Estoy aqui");
            });
    }
    window.location.href="/categorias";
  }

  return (
    <div className="Page1">
      <Container className='text-center'>
        <Title2 />
        <ul>
          <Form>
            <FormGroup>
              <Label for="exampleTelephone">Telefono</Label>
              <Input name="telephone" id="exampleTelephone"
                value={userTel} onChange={(e) => setUserTel(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleMailAlt">Correo alternativo de contacto</Label>
              <Input type="email" name="mailAlt" id="exampleMailAlt"
                value={userMailAlt} onChange={(e) => setUserMailAlt(e.target.value)} />
            </FormGroup>
          </Form>
        </ul>
      </Container>
      <Container className='text-center'>
      <div>
        <button type="button" class="btn btn-outline-primary" onClick={onCreate}>Terminar registro</button>
      </div>
      <div id="loading" style={{display: "none"}} >Cargando...</div>
      </Container>  
    </div>

  );
}

export default LoginForm;