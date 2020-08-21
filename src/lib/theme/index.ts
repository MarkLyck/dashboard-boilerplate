import defaultTheme from './default'

const themeMap = {
  default: defaultTheme,
}

export const getTheme = (themeType: string) => {
  if (!process.env.THEME) return themeMap.default(themeType)
  return themeMap[process.env.THEME](themeType)
}

const theme = themeMap[process.env.THEME] ? themeMap[process.env.THEME]('light') : themeMap.default('light')

export default theme
