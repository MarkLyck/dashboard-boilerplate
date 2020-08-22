import styled from 'styled'

const MapContainer = styled.div`
  display: flex;
  height: ${(props: any) => (props.mapExpanded ? 'calc(100vh - 64px - 46px)' : 'calc(100vh - 88px - 272px)')};
  min-height: 400px;

  width: 100%;
  position: relative;
  background-color: #cad2d3;
  box-shadow: 0px 4px 14px 0px rgba(111, 120, 156, 0.08);
  border-radius: 4px;
  border: 1px solid rgb(235, 237, 245);
  margin-bottom: 16px;
  overflow: hidden;

  @media (max-width: 540px) {
    > div:first-of-type {
      display: ${(props: any) => (props.mapVisibleWhenSmall ? 'none' : 'block')};
    }
  }
`

export default MapContainer
