import React, { Component } from 'react';
import Map from '../Components/Map';
import Credentials from './Credentials';

const mapURL =`https://maps.googleapis.com/maps/api/js?v=3.exp&Key=${Credentials.mapsKey}`;

class Home extends Component {
  render() {
    return (
      <div className="page">
        <Map
          googleMapURL ={mapURL} 
          containerElement={ <div style={{height:'400px'}}/>}
          mapElement= {<div style={{height:'100%'}}/>}
          loadingElement = {<p>Cargando</p>}

        />
      </div>
    );
  }
}

export default Home;
