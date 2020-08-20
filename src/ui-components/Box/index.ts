import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const boxStyle = (_props: any) => css`
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ebedf5;
  box-shadow: 0 4px 14px 0 rgba(111, 120, 156, 0.08);
  box-sizing: border-box;
  padding: 12px;
`

export const BoxTitle = styled.h3`
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 16px;
  color: ${(props: any) => props.theme.colors.purple};
`

const Box = styled.div`
  ${boxStyle};
`

export default Box
