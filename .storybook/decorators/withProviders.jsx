import React from 'react'
import Providers from '../../src/lib/Providers'
import '../../src/lib/translations'
const withProviders = (storyFn) => <Providers>{storyFn()}</Providers>

export default withProviders
