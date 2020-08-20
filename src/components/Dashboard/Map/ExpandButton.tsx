import React from 'react'
import styled from 'styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  z-index: 10;
  border: none;
  border-radius: 2px;
  background-color: white;
  padding: 0;
  box-shadow: 0px 4px 14px 0px rgba(111, 120, 156, 0.08);

  padding: 0;
  height: 32px;
  width: 32px;

  &:hover {
    color: ${(props) => props.theme.colors.action.active};
  }
`

const ExpandButton = ({ mapExpanded, onExpand }) => {
  return (
    <Button onClick={onExpand}>
      <FontAwesomeIcon icon={!mapExpanded ? 'expand' : 'compress'} />
    </Button>
  )
}

export default ExpandButton
