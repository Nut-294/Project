'use client'
import React from 'react'
import { LayersControl, TileLayer } from 'react-leaflet'

const BaseMap = () => {
    return (
        <LayersControl position='topright'>

            <LayersControl.BaseLayer name='openstreetmap' checked>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name='arcgis'>
                <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name='stadiamap'>
                <TileLayer url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png' />
            </LayersControl.BaseLayer>

        </LayersControl>

    )
}

export default BaseMap;