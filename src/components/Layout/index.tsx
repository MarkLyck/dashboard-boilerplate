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
  padding: 32px;
`

const AppLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledLayout>
      <Header />
      <StyledContent>{children}</StyledContent>
    </StyledLayout>
  </ThemeProvider>
)

export default AppLayout
