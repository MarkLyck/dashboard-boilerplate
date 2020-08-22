import React from 'react'
import { Button } from 'antd'
import styled from 'styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledButton = styled(Button)`
  position: absolute;
  display: flex;
  align-items: center;

  bottom: 8px;
  right: 8px;
  z-index: 10;
  padding: 10px;

  svg {
    margin: 0;
  }

  box-shadow: 0px 4px 14px 0px rgba(111, 120, 156, 0.08);
`

const ExpandButton = ({ mapExpanded, onExpand }) => {
  return (
    <StyledButton onClick={onExpand}>
      <FontAwesomeIcon icon={!mapExpanded ? 'expand' : 'compress'} />
    </StyledButton>
  )
}

export default ExpandButton
