import React from 'react'
import styled from 'styled'
import { Empty } from 'antd'
import { useTranslation } from 'react-i18next'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Empty description={t('message.warning.resource_not_found')} />
    </Container>
  )
}

export default NotFound
