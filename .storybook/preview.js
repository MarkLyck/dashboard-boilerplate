import { addParameters } from "@storybook/react";
// import { addDecorator, addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
// import { withA11y } from '@storybook/addon-a11y'

// custom decorators
// import withGlobalStyles from './decorators/withGlobalStyles'
// import withTheme from './decorators/withTheme'
// import withRouter from './decorators/withRouter'
// import withWhyDidYouRender from './decorators/withWhyDidYouRender'

// icons
// import '../src/common/utils/fontAwesomeLibrary'

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

// addDecorator(withWhyDidYouRender)
// addDecorator(withGlobalStyles)
// addDecorator(withTheme)
// addDecorator(withA11y)
// addDecorator(withRouter)

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
};
