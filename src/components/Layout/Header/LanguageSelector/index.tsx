import React from 'react'
import { Menu, Dropdown, Button } from 'antd'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()
  console.log('LanguageSwitcher -> i18n', i18n)

  const setLanguage = (language) => {
    i18n.changeLanguage(language.key)
  }

  const menu = (
    <Menu onClick={setLanguage}>
      <Menu.Item key="en">{t('language.english')}</Menu.Item>
      <Menu.Item key="fr">{t('language.french')}</Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
      <Button>{i18n.language.toUpperCase()}</Button>
    </Dropdown>
  )
}

export default LanguageSwitcher
