import React from 'react'
import styled from 'styled'
import LanguageSwitcher from './index'

export default {
  title: 'components/layout/header/language selector',
  component: LanguageSwitcher,
}

const Container = styled.div`
  padding: 24px;
  background: #eee;
  position: relative;
`

export const languageSelector = () => (
  <Container>
    <LanguageSwitcher />
  </Container>
)
