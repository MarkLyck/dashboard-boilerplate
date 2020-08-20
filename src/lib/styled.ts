import styled, { CreateStyled } from '@emotion/styled'
import theme from '~/lib/theme'

type Theme = typeof theme

export default styled as CreateStyled<Theme>
