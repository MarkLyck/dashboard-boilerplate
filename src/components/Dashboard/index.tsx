import React, { useState } from 'react'
// import styled from 'styled'
import Map, { MapContainer } from './Map'
import SiteRender from './Site/SiteRender'

const Dashboard = () => {
  const [selectedPoint, setSelectedPoint] = useState(null)
  const [mapExpanded, setMapExpanded] = useState(false)

  const resizeMap = (timeout = 0) => {
    window.setTimeout(() => {
      // this will force the map to resize itself.
      window.dispatchEvent(new Event('resize'))
    }, timeout)
  }

  const handleExpandMap = () => {
    setMapExpanded(!mapExpanded)
    resizeMap()
  }

  const handlePointClose = () => {
    setSelectedPoint(null)
    resizeMap()
  }

  const handleRenderPoint = (point) => {
    setSelectedPoint(point)
    resizeMap()
  }

  return (
    <>
      <MapContainer mapExpanded={mapExpanded}>
        <Map mapExpanded={mapExpanded} onExpand={handleExpandMap} renderPoint={handleRenderPoint} />
        {selectedPoint !== null ? <SiteRender point={selectedPoint} onClose={handlePointClose} /> : null}
      </MapContainer>
    </>
  )
}

export default Dashboard
