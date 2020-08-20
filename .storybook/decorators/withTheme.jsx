import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../src/common/theme'

const withTheme = (storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>

export default withTheme
