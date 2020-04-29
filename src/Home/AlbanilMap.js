import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "../Home/Home.css";
import firebase from 'firebase'

export const AlbanilMap = ({ worker }) => {

    const [name, setName] = React.useState(worker.name)
    const [latitude, setLatitude] = React.useState(worker.latitude)
    const [length, setLength] = React.useState(worker.length)
    const [profession, setProfession] = React.useState(worker.profession)
    const [id, setId] = React.useState(worker.uId)

    const icon = new Icon({
        iconUrl: "https://cdn.clipart.email/37fe3ea3b3224b13bfee0d4158266c38_react-logo-png-download-500500-free-transparent-react-png-_900-500.jpeg",
        iconSize: [50, 40]
      });
      
    return (
        <>
            <div>
                <Map center={[6.267417, -75.568389]} zoom={15}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {console.log(length)}
                    {console.log(latitude)}
                    {console.log(id)}
                    <Marker
                        key={id}
                        icon={icon}
                        position={[latitude, length]}>
                        <Popup>{name} <br />
                        {profession}  <br />
                        <Button color="secondary">Contactar</Button>{' '}
                        </Popup>
                    </Marker>
                </Map>
            </div>
        </>
    )
}