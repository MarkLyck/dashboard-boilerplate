import styled, { CreateStyled } from '@emotion/styled'
import { getTheme } from '~/lib/theme'

const theme = getTheme('light')
type ThemeType = typeof theme

export default styled as CreateStyled<ThemeType>
