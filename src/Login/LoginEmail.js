import React from 'react';
import { Button, Container } from 'reactstrap';
import Title2 from '../Components/Title2';
import firebase from "../firebase";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { CardWorker } from './CardWorker';

var dataFromlocalStorage = JSON.parse(localStorage.getItem("data"));
console.log(dataFromlocalStorage);

function Loginp() {

  const [worker, setWorker] = React.useState([])
  const [workerName, setWorkerName] = React.useState()
  const [workerMail, setWorkerMail] = React.useState()
  const [workerTelephone, setWorkerTelephone] = React.useState()
  const [workerExperience, setWorkerExperience] = React.useState()

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection('worker').where('experience', '==', 'Electricista').get()
      setWorker(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    fetchData()
  }, [])

  const onCreate = () => {
    const db = firebase.firestore()
    db.collection('worker').add({ name: workerName, mail: workerMail, telephone: workerTelephone, experience: workerExperience })

  }

  return (
    <div className="Page1">
      <Container className='text-center'>
        <Title2 />
        <ul>
          <Form>
            <FormGroup>
              <Label for="exampleName">Nombre</Label>
              <Input name="name" id="exampleName"
                value={workerName} onChange={(e) => setWorkerName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail"
                value={workerMail} onChange={(e) => setWorkerMail(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleTelephone">Telefono</Label>
              <Input name="telephone" id="exampleTelephone"
                value={workerTelephone} onChange={(e) => setWorkerTelephone(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleExperience">Experiencia</Label>
              <Input name="experience" id="exampleExperience"
                value={workerExperience} onChange={(e) => setWorkerExperience(e.target.value)} />
            </FormGroup>            
            <Button onClick={onCreate}>Registrar trabajador</Button>
          </Form>
          {worker.map(worker => (
            <li key={worker.mail}>
              <CardWorker worker={worker} />
            </li>
          ))}
        </ul>

      </Container>
    </div>
  );
}

export default Loginp;