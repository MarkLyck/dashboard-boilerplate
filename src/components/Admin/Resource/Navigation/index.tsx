import React, { useState } from 'react'
import styled from 'styled'
import Link from 'next/link'
import { Menu } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { resources } from '../resources'

const Container = styled.div`
  margin-right: 32px;
  margin-top: 40px;
`

const MenuItem = styled(Menu.Item)`
  svg {
    margin-right: 8px;
  }
`

const Navigation = () => {
  const [current, setCurrent] = useState('site')
  const { t } = useTranslation()

  const handleClick = ({ key }) => {
    setCurrent(key)
  }

  return (
    <Container>
      <Menu defaultSelectedKeys={[current]} onClick={handleClick}>
        {resources.map((resource) => (
          <MenuItem key={resource.name} icon={<FontAwesomeIcon icon={resource.icon} />}>
            <Link href={`/admin/[resource]`} as={`/admin/${resource.name}`}>
              <a>{t(`resource.${resource.name}_plural`)}</a>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Container>
  )
}

export default Navigation
