import React from 'react'
import { Menu, Dropdown, Button, Space } from 'antd'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LanguageSwitcher = () => {
  const { t } = useTranslation()

  const handleSelect = ({ key }) => {
    // TODO handle logout
    if (key === 'logout') {
      console.log('handle Logout')
    }
  }

  const menu = (
    <Menu onClick={handleSelect}>
      <Menu.Item key="logout">
        <Space>
          <FontAwesomeIcon icon={['far', 'sign-out-alt']} />
          {t('user.logout')}
        </Space>
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
      <Button icon={<FontAwesomeIcon icon={['far', 'user']} />}>{t('user.user').cap()}</Button>
    </Dropdown>
  )
}

export default LanguageSwitcher
