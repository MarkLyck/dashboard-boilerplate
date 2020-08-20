import React from 'react'
import styled from 'styled'
import Search from './index'

export default {
  title: 'components/layout/header/search',
  component: Search,
}

const Container = styled.div`
  padding: 24px;
  background: #eee;
`
export const search = () => (
  <Container>
    <Search />
  </Container>
)
