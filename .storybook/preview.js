import { addDecorator, addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

// custom decorators
import withGlobalStyles from './decorators/withGlobalStyles'
import withTheme from './decorators/withTheme'
import withRouter from './decorators/withRouter'
import withProviders from './decorators/withProviders'
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
addDecorator(withTheme)
addDecorator(withRouter)
addDecorator(withProviders)

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
}
