import Router from 'next/router'

Router.router = {
  push: () => {},
  prefetch: () => {},
}

const withRouter = (storyFn) => storyFn()

export default withRouter
