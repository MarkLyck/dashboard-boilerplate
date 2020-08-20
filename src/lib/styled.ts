import styled, { CreateStyled } from '@emotion/styled'
import theme from '~/common/theme'

type Theme = typeof theme

export default styled as CreateStyled<Theme>
