import React from 'react'
import styled from 'styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  border-radius: 2px;
  background-color: white;
  padding: 6px 12px;
  box-shadow: 0px 4px 14px 0px rgba(111, 120, 156, 0.08);
  border: 1px solid ${(props) => props.theme.colors.warning.light};
  color: ${(props) => props.theme.colors.warning.main};
  background: ${(props) => props.theme.colors.warning.light};

  svg {
    color: ${(props) => props.theme.colors.warning.main};
  }
`

const Text = styled.span`
  margin-left: 8px;
`

const MapError = () => {
  return (
    <Container>
      <FontAwesomeIcon icon="exclamation-triangle" />
      <Text>Failed loading sites</Text>
    </Container>
  )
}

export default MapError
