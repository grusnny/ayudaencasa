import React from 'react';
import firebase from 'firebase'
import { withRouter } from 'react-router-dom';

function AccountController() {
var usuario=JSON.parse(localStorage.getItem("data"));
    if(usuario==null){
        console.log("login");
        window.location.href="/loginp";
    }else{
        console.log("cuenta");
        window.location.href="/MyAccount";
    }
    return (<div>Cargando datos de usuario...</div>);

}
export default AccountController;