import React from 'react'
import { Layout } from 'antd'
import styled from 'styled'
import Header from './Header'

const StyledLayout = styled(Layout)`
  height: 100%;
`

const StyledContent = styled(Layout.Content)`
  padding: 24px;
`

const AppLayout = ({ children }) => (
  <StyledLayout>
    <Header />
    <StyledContent>{children}</StyledContent>
    {/* <Layout.Footer style={{ textAlign: 'center' }}>Terms and conditions</Layout.Footer> */}
  </StyledLayout>
)

export default AppLayout
