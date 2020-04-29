import React, { Component } from 'react';
import "../Home/Home.css";
import { Container } from 'reactstrap';
import firebase from "../firebase";
import { WorkerMap } from './WorkerMap'

function Plomero() {

  const [worker, setWorker] = React.useState([])

  React.useEffect(() => {
      const fetchData = async () => {
          const db = firebase.firestore()
          const data = await db.collection('worker').where("profession","==","Plomero").get()
          setWorker(data.docs.map(doc => ({ ...doc.data(), id: doc.id }) ) )
          
      }
      fetchData()
  }, [])

  return (
      <div className="App">
          <Container className='text-center'>
              <ul>
                  {worker.map(worker => (                    
                      <li key={worker.mail}>
                          <WorkerMap worker={worker} />                          
                      </li>
                  ))}
              </ul>
          </Container>
      </div>
  );

}

export default Plomero; 
