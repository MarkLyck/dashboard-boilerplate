import React from 'react'
import { Layout } from 'antd'
import styled from 'styled'
import Header from './Header'
// import { ThemeProvider } from 'emotion-theming'
// import ThemeContext from '~/common/contexts/ThemeContext'
// import { getTheme } from '~/lib/theme'

const StyledLayout = styled(Layout)`
  height: 100%;
`

const StyledContent = styled(Layout.Content)`
  padding: 24px;
  overflow-x: scroll;
`

const AppLayout = ({ children }) => {
  // const { themeType } = useContext(ThemeContext)

  return (
    // <ThemeProvider theme={getTheme(themeType)}>
    <StyledLayout>
      <Header />
      <StyledContent>{children}</StyledContent>
      {/* <Layout.Footer style={{ textAlign: 'center' }}>Terms and conditions</Layout.Footer> */}
    </StyledLayout>
    // </ThemeProvider>
  )
}

export default AppLayout
