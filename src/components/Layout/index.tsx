import React from 'react'
import { Layout, Menu } from 'antd'
import styled from 'styled'

import Header from './Header'

const StyledLayout = styled(Layout)`
  height: 100%;
`

const StyledContent = styled(Layout.Content)`
  padding: 32px;
`

const AppLayout = ({ children }) => (
  <StyledLayout>
    <Header />
    <StyledContent>{children}</StyledContent>
  </StyledLayout>
)

export default AppLayout
