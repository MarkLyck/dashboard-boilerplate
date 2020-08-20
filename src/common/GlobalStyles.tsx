import React from 'react'
import { css, Global } from '@emotion/core'

export const globalStyles = css`
  #__next {
    height: 100%;
  }
`

const GlobalStyles = () => <Global styles={globalStyles} />

export default GlobalStyles
