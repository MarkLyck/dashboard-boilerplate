import React from 'react'
import styled from 'styled'
import DateSelector from './index'

export default {
  title: 'components/layout/header/date selector',
  component: DateSelector,
}

const Container = styled.div`
  padding: 24px;
  background: #eee;
  position: relative;
`
export const dateSelector = () => (
  <Container>
    <DateSelector />
  </Container>
)
