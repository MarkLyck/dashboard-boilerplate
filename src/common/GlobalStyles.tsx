import React from 'react'
import { css, Global } from '@emotion/core'

export const globalStyles = css`
  #__next,
  #root {
    height: 100%;
  }

  .ant-btn {
    > svg {
      margin-right: 8px;
    }
  }

  .ant-table-cell {
    white-space: nowrap;
  }
`

const GlobalStyles = () => <Global styles={globalStyles} />

export default GlobalStyles
