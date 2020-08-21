import { addDecorator, addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

// custom decorators
import withGlobalStyles from './decorators/withGlobalStyles'
import withRouter from './decorators/withRouter'
import withProviders from './decorators/withProviders'
// import withTheme from './decorators/withTheme'
// import withWhyDidYouRender from './decorators/withWhyDidYouRender'

// icons
import '../src/lib/iconLibrary'

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

// addDecorator(withWhyDidYouRender)
addDecorator(withGlobalStyles)
addDecorator(withRouter)
addDecorator(withProviders)
// addDecorator(withTheme)

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
}
