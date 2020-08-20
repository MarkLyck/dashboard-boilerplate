import React from 'react'
import { Layout, Menu } from 'antd'
import Link from 'next/link'
import styled from 'styled'
import DateSelector from './DateSelector'

const StyledHeader = styled(Layout.Header)`
  && {
    background: white;
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Logo = styled.div`
  background-image: url('https://weeklystocktip.com/static/icons/logo_horizontal_color.svg');
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  height: 32px;
  width: 200px;
`

const AppHeader = () => (
  <StyledHeader>
    <Logo />
    <Menu mode="horizontal">
      <Menu.Item key="1">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/admin">
          <a>Admin</a>
        </Link>
      </Menu.Item>
    </Menu>
    <DateSelector />
  </StyledHeader>
)

export default AppHeader
