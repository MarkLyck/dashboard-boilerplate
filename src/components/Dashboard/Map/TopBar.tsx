import React from 'react'
import styled from 'styled'

const Container = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
`

const TopBar = ({ children }) => <Container>{children}</Container>

export default TopBar
