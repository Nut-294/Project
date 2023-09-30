'use client'
import React from 'react'
import { LayersControl, TileLayer } from 'react-leaflet'

const BaseMap = () => {
    return (
        <LayersControl position='topright'>

            <LayersControl.BaseLayer name='Open Streetmap' checked>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name='Google Satellite'>
                <TileLayer url='https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}' />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name='Google Hybrid'>
                <TileLayer url='http://mts2.google.com/vt/lyrs=y&x={x}&y={y}&z={z}' />
            </LayersControl.BaseLayer>

        </LayersControl>

    )
}

export default BaseMap;