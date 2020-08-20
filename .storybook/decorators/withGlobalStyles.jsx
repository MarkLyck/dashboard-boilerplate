import React from 'react'
import GlobalStyles from '~/common/GlobalStyles'
// load antd less styles for theming to work.
import 'antd/dist/antd.less'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

const withGlobalStyles = (storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
)

export default withGlobalStyles
