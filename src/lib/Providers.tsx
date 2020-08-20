import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { FilterProvider } from '~/common/contexts/FilterContext'
import theme from '~/lib/theme'
import '~/common/prototypes/capitalize'

const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    <FilterProvider>{children}</FilterProvider>
  </ThemeProvider>
)

export default Providers
