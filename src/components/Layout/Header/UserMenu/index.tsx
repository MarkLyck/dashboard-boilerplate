import React from 'react'
import { Menu, Dropdown, Button, Space } from 'antd'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const { SubMenu } = Menu

const UserMenu = () => {
  const { t, i18n } = useTranslation()

  const handleSelect = ({ key }) => {
    // TODO handle logout
    if (key === 'logout') {
      console.log('handle Logout')
    }

    if (key === 'en' || key === 'fr') {
      i18n.changeLanguage(key)
    }
  }

  const menu = (
    <Menu onClick={handleSelect}>
      <SubMenu
        title={
          <Space>
            <FontAwesomeIcon icon={['far', 'globe']} />
            {t('common.language')}
          </Space>
        }
      >
        <Menu.Item key="en">🇺🇸 {t('language.english').cap()}</Menu.Item>
        <Menu.Item key="fr">🇫🇷 {t('language.french').cap()}</Menu.Item>
      </SubMenu>
      <Menu.Item key="logout" danger>
        <Space>
          <FontAwesomeIcon icon={['far', 'sign-out-alt']} />
          {t('user.logout')}
        </Space>
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
      <Button icon={<FontAwesomeIcon icon={['far', 'user']} />}>{t('user.user').cap()}</Button>
    </Dropdown>
  )
}

export default UserMenu
