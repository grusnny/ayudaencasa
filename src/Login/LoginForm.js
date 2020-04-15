import React from 'react';
import { Button, Container } from 'reactstrap';
import Title2 from '../Components/Title2';
import firebase from "../firebase";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const axios = require('axios');

var dataFromlocalStorage = JSON.parse(localStorage.getItem("data"))
console.info(dataFromlocalStorage);

function Loginp() {

  const [userTel, setUserTel] = React.useState()
  const [userMailAlt, setUserMailAlt] = React.useState()
  const db = firebase.firestore()

  const onCreate = () => {
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
      uId: user.uid }));
    }
    /*axios.get('https://microservicio-autenticacion.herokuapp.com/user', {
      params: {
        user: 'pedro' ,
        password: '123'
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    }); */
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
      </Container>  
    </div>

  );
}

export default Loginp;