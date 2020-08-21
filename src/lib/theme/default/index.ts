import light from './light'
import dark from './dark'

const themeMap = {
  light,
  dark,
}

const getTheme = (themeType: string) => (themeType ? themeMap[themeType] : themeMap.light)

export default getTheme
