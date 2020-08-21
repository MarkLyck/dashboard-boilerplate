import React from 'react'
import styled from 'styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2px;
  background-color: white;
  padding: 6px 12px;
  box-shadow: 0px 4px 14px 0px rgba(111, 120, 156, 0.08);

  svg {
    color: blue;
  }
`

const Text = styled.span`
  margin-left: 8px;
`

const MapLoading = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={['fas', 'spinner-third']} spin />
      <Text>Loading</Text>
    </Container>
  )
}

export default MapLoading
