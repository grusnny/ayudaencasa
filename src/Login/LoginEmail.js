import React from 'react';
import { Button, Container } from 'reactstrap';
import Title2 from '../Components/Title2';
import firebase from "../firebase";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

var dataFromlocalStorage = JSON.parse(localStorage.getItem("data"))
console.info(dataFromlocalStorage);

function Loginp() {

  const [userTel, setUserTel] = React.useState()
  const [userMailAlt, setUserMailAlt] = React.useState()

  const onCreate = () => {
    const db = firebase.firestore()
    var user = firebase.auth().currentUser;
    var nameT, emailT, photoUrlT, uidT, emailVerifiedT;


    if (user != null) {
      nameT = user.displayName;
      emailT = user.email;
      photoUrlT = user.photoURL;
      emailVerifiedT = user.emailVerified;
      uidT = user.uid;
      const db = firebase.firestore()
      let json = {
        uId: uidT,
        name: nameT,
        mail: emailT,
        telephone: userTel,
        photo: photoUrlT,
        mailAlt: userMailAlt
      };
      db.collection('user').doc(uidT).set(json);
    }
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

            <Button onClick={onCreate}>Terminar registro</Button>
          </Form>
        </ul>
      </Container>
    </div>
  );
}

export default Loginp;