import React from 'react';
import firebase from 'firebase'
import { withRouter } from 'react-router-dom';

export default () => {
    const isBasketBall = firebase.auth().currentUser;
    return (
        <div>
            
        </div>
    )
}