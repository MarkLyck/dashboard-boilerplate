import defaultTheme from './default'

const MAP = {
  defaultTheme,
}

export default MAP[process.env.THEME] || defaultTheme
