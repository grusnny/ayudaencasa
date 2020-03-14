import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';

class MyAccount extends Component {
  render() {

    console.log('historia', this.props.history);
    console.log('locación', this.props.location);
    console.log('match', this.props.match);

    const db = firebase.firestore()

    firebase.auth().onAuthStateChanged(function (user) {
      var currentUser = user.uid;
      window.localStorage.setItem("UID", currentUser);
    });

    const onDelete = () => {
      const db = firebase.firestore()
    }

    var getuid = window.localStorage.getItem("UID")
    console.log(getuid)

    let userRef = db.collection('user').doc(getuid);
    let query = userRef.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
          return
        }
        console.log('Document data:', doc.data());
        console.log('data:', doc.data().mailAlt);
        window.localStorage.setItem("userNameDoc", doc.data().name);
        window.localStorage.setItem("userMailDoc", doc.data().mail);
        window.localStorage.setItem("userMailAltDoc", doc.data().mailAlt);
        window.localStorage.setItem("userPhotoDoc", doc.data().photo);
        window.localStorage.setItem("userTelephoneDoc", doc.data().telephone);

      })
      .catch(err => {
        console.log('Error getting document', err);
      });

    var userNameDoc = window.localStorage.getItem("userNameDoc");
    var userMailDoc = window.localStorage.getItem("userMailDoc");
    var userMailAltDoc = window.localStorage.getItem("userMailAltDoc");
    var userPhotoDoc = window.localStorage.getItem("userPhotoDoc");
    var userTelephoneDoc = window.localStorage.getItem("userTelephoneDoc");

    return (
      <div className="page">
        <Container className='text-center'>
        <Card style={{ width: '18rem' }}>
          <CardImg top width="100%" src={userPhotoDoc}  />
          <CardBody>
            <CardTitle>Nombre: {userNameDoc} </CardTitle>
            <CardSubtitle>Correo: {userMailDoc} </CardSubtitle>
            <CardSubtitle>Telefono: {userTelephoneDoc} </CardSubtitle>
            <Button color="danger" onClick={onDelete} >Eliminar</Button>
          </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default withRouter(MyAccount);
