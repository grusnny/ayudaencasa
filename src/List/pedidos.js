import React from 'react';
import { Button, Container } from 'reactstrap';
import firebase from "../firebase";
import { CardPedidos } from './CardPedidos'
import { render } from '@testing-library/react';
const db = firebase.firestore();

function Pedidos() {

  var user = firebase.auth().currentUser; 

  var usuario=JSON.parse(localStorage.getItem("data"));

  console.log(usuario.user.uid);
  const [pedido, setPedido] = React.useState([]);
 

  React.useEffect(() => {
    
    console.log(user);

    const fetchData = async () => {
      const data = await db.collection('pedido').where("uid","==",usuario.user.uid).get()
      setPedido(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    fetchData()
  }, [])


  return (
    <div className="App">
      <Container className='text-center'>
        <p>Revisa las peticiones de trabajos que has solicitado: </p>
        <ul>
          {pedido.map(pedido => (
            <CardPedidos pedido={pedido} />
          ))}
        </ul>
      </Container>
    </div>
  );

}

export default Pedidos; 