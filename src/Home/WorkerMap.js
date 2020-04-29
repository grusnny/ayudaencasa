import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import * as L from 'leaflet'
import "../Home/Home.css";
import firebase from 'firebase'
import shadow from '../Home/leaf-shadow.png';
import  icon from '../Home/marker2.webp';
var greenIcon = L.icon({
    iconUrl: icon,
    //shadowUrl: shadow,

    iconSize:     [80, 80], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [40, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
export const WorkerMap = ({ worker }) => {

    const [name, setName] = React.useState(worker.name)
    const [latitude, setLatitude] = React.useState(worker.latitude)
    const [length, setLength] = React.useState(worker.length)
    const [profession, setProfession] = React.useState(worker.profession)
    const [id, setId] = React.useState(worker.uId)

    // const icon = new Icon({
    //     iconUrl: "https://cdn.clipart.email/37fe3ea3b3224b13bfee0d4158266c38_react-logo-png-download-500500-free-transparent-react-png-_900-500.jpeg",
    //     iconSize: [50, 50]
    //   });
      
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
                        icon={greenIcon}
                        position={[latitude, length]}>
                        <Popup>{name}<br />{profession}</Popup>
                    </Marker>
                </Map>
            </div>
        </>
    )
}