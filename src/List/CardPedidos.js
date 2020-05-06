import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export const CardPedidos = ({ pedido }) => {

    const [wname, setWName] = React.useState(pedido.wname)
    const [wmail, setWMail] = React.useState(pedido.wmail)
    const [wtel, setWTel] = React.useState(pedido.wtel)
    const [wid, setWid] = React.useState(pedido.wid)
    const [uid, setUid] = React.useState(pedido.uid)
    const [wprofession, setfechaPet] = React.useState(pedido.wprofession)
    const [state, setState] = React.useState(pedido.state)
    const [wphoto, setWPhoto] = React.useState(pedido.wphoto)

    return (
        <>
            <div>
                <Card style={{ width: '18rem' }}>
                    <CardImg top width="100%" src={wphoto} />
                    <CardBody>
                        <CardTitle>Nombre: {wname}</CardTitle>
                        <CardSubtitle>Correo: {wmail}</CardSubtitle>
                        <CardSubtitle>Telefono: {wtel}</CardSubtitle>
                        <CardSubtitle>Profesión: {wprofession}</CardSubtitle>
                        <CardText>Estado de la petición {state}</CardText>
                        <Button> Pagar</Button>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}