import React from 'react'
import { Layout, Menu, Space } from 'antd'
import { Flex } from 'rebass'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import styled from 'styled'
import Search from './Search'
import DateSelector from './DateSelector'
import LanguageSelector from './LanguageSelector'
import UserMenu from './UserMenu'
import theme from '~/common/theme'

const StyledHeader = styled(Layout.Header)`
  && {
    background: white;
    padding: 0 32px;
    line-height: inherit;
  }
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const Logo = styled.img`
  height: 32px;
  width: auto;
`

const StyledMenu = styled(Menu)`
  && {
    line-height: 64px;
  }
`

const AppHeader = () => {
  const { t } = useTranslation()
  return (
    <StyledHeader>
      <Flex alignItems="center">
        <Logo src={theme.logos.horizontal} />
        <StyledMenu mode="horizontal">
          <Menu.Item key="1">
            <Link href="/">
              <a>{t('common.home').cap()}</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/admin">
              <a>{t('common.admin').cap()}</a>
            </Link>
          </Menu.Item>
        </StyledMenu>
      </Flex>
      <Flex alignItems="center">
        <Space>
          <Search />
          <DateSelector />
          <UserMenu />
          <LanguageSelector />
        </Space>
      </Flex>
    </StyledHeader>
  )
}

export default AppHeader
