import React, { useState, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import ReactMapboxGl, { ZoomControl, Cluster, Marker } from 'react-mapbox-gl'
import { Flex } from 'rebass'
import styled from 'styled'
import { hasStorage } from '~/common/utils/featureTests'
import { Box } from '~/ui-components'
import TopBar from './TopBar'
import MapLoading from './Loading'
import MapError from './Error'
import ExpandButton from './ExpandButton'
import MarkerItem from './Marker'
import { ClusterContainer, Indicator, IndicatorNumber, generateColorMap } from './cluster'

const MapBox = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiY29sb255IiwiYSI6InV5OVQyRlkifQ._m517l-rp6JJV5wLsv-qPg',
  scrollZoom: false,
})

const Container = styled(Box)`
  height: 100%;
  padding: 0;
  position: relative;
`

const StyledMapBox = styled(MapBox)`
  height: 100%;
  width: 100%;
  border-radius: 3px;

  .mapboxgl-ctrl-logo,
  .mapboxgl-ctrl-attrib {
    visibility: hidden;
  }

  .mapboxgl-canvas-container {
    > div {
      box-shadow: 0px 4px 14px 0px rgba(111, 120, 156, 0.08) !important;
      border: none !important;
    }
  }
`

const DEFAULT_COLOR = '#808080'

const ClusterMarker = (coordinates, _pointCount, getLeaves) => {
  const subMarkers = getLeaves()
  const colorMap = generateColorMap(subMarkers)

  return (
    <Marker coordinates={coordinates}>
      <ClusterContainer>
        {Object.keys(colorMap).map((color) => (
          <Flex flexDirection="column" alignItems="center" key={color}>
            <Indicator color={color} />
            <IndicatorNumber>{colorMap[color]}</IndicatorNumber>
          </Flex>
        ))}
      </ClusterContainer>
    </Marker>
  )
}

export interface MapType {
  data: any[]
  isLoading: boolean
  error: any
  fitBounds: any
  onExpand: () => void
  mapExpanded: boolean
  colorMap: any
  selectedId: string
}

const Map = ({
  data = [
    // {
    //   id: '1',
    //   label: 'label 1',
    //   lat: 5,
    //   lon: 5,
    //   state: 1,
    // },
  ],
  isLoading,
  error,
  fitBounds,
  onExpand,
  mapExpanded,
  colorMap = () => DEFAULT_COLOR,
  selectedId,
}: MapType) => {
  const [zoom] = useState([2])
  const [center, setCenter] = useState(
    hasStorage && localStorage.mapCenter ? JSON.parse(localStorage.mapCenter) : [-106.3468, 56.1304]
  )
  const [bounds, setBounds] = useState(fitBounds)

  useEffect(() => {
    // listens to data, and updates bounds when data.length changes.
    if (data.length === 0) return
    const coords = data.map((point) => [point.lon, point.lat])

    let newBounds = new mapboxgl.LngLatBounds()
    // @ts-ignore: 'number[]' is not assignable to parameter of type 'LngLat | LngLatBounds'
    coords.forEach((coord) => newBounds.extend(coord))

    // @ts-ignore: Property '_ne' does not exist on type 'LngLatBounds'.
    const neCoord = [newBounds._ne.lng, newBounds._ne.lat]
    // @ts-ignore: Property '_ne' does not exist on type 'LngLatBounds'.
    const swCoord = [newBounds._sw.lng, newBounds._sw.lat]
    setBounds([neCoord, swCoord])
  }, [data.length])

  return (
    <Container>
      <TopBar>
        {isLoading ? <MapLoading /> : null}
        {!data.length && error && !isLoading ? <MapError /> : null}
      </TopBar>
      <ExpandButton onExpand={onExpand} mapExpanded={mapExpanded} />
      <StyledMapBox
        style="mapbox://styles/mapbox/light-v10"
        fitBounds={bounds}
        fitBoundsOptions={{ padding: 200, maxZoom: 16 }}
        center={center}
        injectCSS={false}
        // @ts-ignore
        zoom={zoom}
        renderChildrenInPortal={false}
      >
        <ZoomControl position="top-left" zoomDiff={2} />

        {data.length === 1
          ? data.map((point) => {
              const color = colorMap([point.state]) || DEFAULT_COLOR
              return (
                <Marker coordinates={[point.lon, point.lat]} anchor="bottom" key={point.id}>
                  <MarkerItem
                    point={point}
                    color={color}
                    renderSite={console.log}
                    setCenter={setCenter}
                    selectedId={selectedId}
                  />
                </Marker>
              )
            })
          : null}

        {data.length > 1 ? (
          <Cluster ClusterMarkerFactory={ClusterMarker} zoomOnClick={true} zoomOnClickPadding={80} radius={100}>
            {data.map((point, i) => {
              const color = colorMap([point.state]) || DEFAULT_COLOR
              return (
                <Marker coordinates={[point.lon, point.lat]} anchor="bottom" key={point.id}>
                  <MarkerItem
                    point={point}
                    color={color}
                    renderSite={console.log}
                    setCenter={setCenter}
                    selectedId={selectedId}
                  />
                </Marker>
              )
            })}
          </Cluster>
        ) : null}
      </StyledMapBox>
    </Container>
  )
}

export default Map
