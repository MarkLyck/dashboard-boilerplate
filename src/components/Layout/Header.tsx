import React from 'react'
import { Layout, Menu } from 'antd'
import Link from 'next/link'
import styled from 'styled'

const StyledHeader = styled(Layout.Header)`
  background: white;
`

const AppHeader = () => (
  <StyledHeader>
    <div className="logo" />
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
  </StyledHeader>
)

export default AppHeader
