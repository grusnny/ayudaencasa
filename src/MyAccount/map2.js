import React, { Component } from 'react';
import { Map as Map,TileLayer, Marker, Popup } from 'react-leaflet';

class MapExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
        currentPos: null
        };
        this.handleClick = this.handleClick.bind(this);
    }
handleClick(e){
this.setState({ currentPos: e.latlng });
const { lat, lng } = e.latlng;
console.log(lat, lng);
}
    render() {
        return (
        <div>
        <Map center={[6.26739785475676,-75.56881427764894]}
                zoom={16}
                maxZoom={20}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
                onClick={this.handleClick}>
            <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            { this.state.currentPos && <Marker position={this.state.currentPos} draggable={true}>
            <Popup position={this.state.currentPos}>
                Current location: <pre>{JSON.stringify(this.state.currentPos, null, 2)}</pre>
            </Popup>
            </Marker>}
        </Map>
        </div>
        )
    }
}
export default MapExample;