import React from 'react';
import { Button, Container } from 'reactstrap';
import Title from '../Components/Title';
import firebase from "../firebase";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Login from '../Components/Login';

function finalizar() {
  // realizas tu acción de envíar los datos, y al final redireccionas
  this.props.history.push({to: '/logincorreo'});
}

function Loginp() {


  return (
    <div className="Menu">
      <Container className='text-center'>
        <Title />
          <Form>
            <FormGroup> 
              <Container className='text-center'> 
                <Login/>
              </Container> 
            </FormGroup>
            <FormGroup>             
              <Container className='text-center'>
                <form action="/logincorreo">
                    <button type="submit" class="btn btn-outline-primary"><img src="" alt="x"/> Correo electronico</button>
                </form>
            </Container>  
            </FormGroup>
          </Form>
      </Container>
    </div>
  );
}

export default Loginp;