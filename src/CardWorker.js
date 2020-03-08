import React from 'react'
import firebase from 'firebase'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export const CardWorker = ({ worker }) => {

    const [name, setName] = React.useState(worker.name)
    const [mail, setMail] = React.useState(worker.mail)
    const [telephone, setTelephone] = React.useState(worker.telephone)
    const [experience, setExperience] = React.useState(worker.experience)

    const onUpdate = () => {
        const db = firebase.firestore()
        db.collection('worker').doc(worker.id).set({ ...worker, name })
    }

    const onDelete = () => {
        const db = firebase.firestore()
        db.collection('worker').doc(worker.id).delete()
    }

    return (
        <>
            <div>
                <Card>
                    <CardImg top width="100%" src="https://rosolutions.com.mx/blog/wp-content/uploads/2019/06/1-y6C4nSvy2Woe0m7bWEn4BA.png"/>
                    <CardBody>
                        <CardTitle>Nombre: {name}</CardTitle>
                        <CardSubtitle>Correo: {mail}</CardSubtitle>
                        <CardSubtitle>Telefono: {telephone}</CardSubtitle>
                        <CardText>Experiencia: {experience}</CardText>
                        <Button color="danger" onClick={onDelete} >Eliminar</Button>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}