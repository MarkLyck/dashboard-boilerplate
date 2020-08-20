import React from 'react'
import styled from 'styled'
import Search from './Search'

export default {
  title: 'components/layout/header',
  component: Search,
}

const Container = styled.div`
  padding: 24px;
  background: #eee;
`
export const header = () => (
  <Container>
    <Search />
  </Container>
)
