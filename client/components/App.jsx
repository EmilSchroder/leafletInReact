import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const Tiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const Attr =
  '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Map center={[-41, 174]} zoom={10}>
          <TileLayer attribution={Attr} url={Tiles} />
          <Marker position={[-41, 174]}>
            {/* <Popup>Nicenicenice</Popup> */}
          </Marker>
        </Map>
      </div>
    );
  }
}
