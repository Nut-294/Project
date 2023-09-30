import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import BaseMap from './BaseMap';

const MapContent = () => {
    return (
        <div style={{ display: 'flex',justifyContent: 'center'}}>
            <MapContainer
                style={{ height: "500px", width: "800px", zIndex: '1' }}
                center={[13, 100]}
                zoom={6}>

                
                <BaseMap />
            </MapContainer>

        </div>
    )
}

export default MapContent;