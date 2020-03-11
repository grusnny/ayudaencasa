import React,{Component} from 'react';
import { Button, Container } from 'reactstrap';
import firebase from '../firebase';


export default class Login extends Component{
    constructor(props){
        super(props);
        this.Login=this.Login.bind(this);
    }

    Login(){
        let provider= new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result=>{
            console.log(result);
            window.location.href="/logincorreo";
        })
    }

    render(){
        return(
            <Container className='text-center'>
                <div>

                    <button type="button" class="btn btn-outline-primary" onClick={this.Login}>Iniciar sesión con google</button>

                </div>
            </Container>  
        )
 }
}