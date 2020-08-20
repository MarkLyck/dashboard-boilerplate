import React from 'react'
import { Layout, Menu, Divider } from 'antd'
import { Flex } from 'rebass'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import capitalize from '~/common/utils/capitalize'
import styled from 'styled'
import Search from './Search'
import DateSelector from './DateSelector'

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

const Logo = styled.div`
  background-image: url('https://weeklystocktip.com/static/icons/logo_horizontal_color.svg');
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  height: 32px;
  width: 200px;
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
      <Logo />
      <Flex alignItems="center">
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
        <Search />
        <DateSelector />
      </Flex>
    </StyledHeader>
  )
}

export default AppHeader
