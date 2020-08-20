import React from 'react'
import GlobalStyles from '~/common/GlobalStyles'
// load antd less styles for theming to work.
import 'antd/dist/antd.less'

const withGlobalStyles = (storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
)

export default withGlobalStyles
