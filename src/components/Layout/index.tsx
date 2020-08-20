import React from 'react'
import { Layout } from 'antd'
import styled from 'styled'
import { ThemeProvider } from 'emotion-theming'
import theme from '~/common/theme'
import Header from './Header'

const StyledLayout = styled(Layout)`
  height: 100%;
`

const StyledContent = styled(Layout.Content)`
  padding: 24px;
`

const AppLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledLayout>
      <Header />
      <StyledContent>{children}</StyledContent>
      {/* <Layout.Footer style={{ textAlign: 'center' }}>Terms and conditions</Layout.Footer> */}
    </StyledLayout>
  </ThemeProvider>
)

export default AppLayout
