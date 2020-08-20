import React from 'react'
import Providers from '../../src/lib/Providers'

const withProviders = (storyFn) => <Providers>{storyFn()}</Providers>

export default withProviders
