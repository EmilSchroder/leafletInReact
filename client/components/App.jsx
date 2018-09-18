import React from 'react'
import {Map, TileLayer} from 'react-leaflet'
  
  const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const stamenTonerAttr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';


  export default class App extends React.Component {
    render() {

      return (
      <div>
        <Map 
            center={[-41, 174]}
            zoom={10}>
            <TileLayer
                attribution={stamenTonerAttr}
                url={stamenTonerTiles}
            />
        </Map>
      </div>
  )
}
}


