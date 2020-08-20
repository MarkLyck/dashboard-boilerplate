import React from 'react'
import styled from 'styled'
import Header from './index'

export default {
  title: 'components/layout/header',
  component: Header,
}

const Container = styled.div`
  padding: 24px;
  background: #eee;
`
export const header = () => (
  <Container>
    <Header />
  </Container>
)
