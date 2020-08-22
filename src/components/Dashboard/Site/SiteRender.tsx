import React from 'react'
import styled from 'styled'
import { PageHeader } from 'antd'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.background.default};
  width: 600px;
  padding: 16px;
`

const StyledPageHeader = styled(PageHeader)`
  padding: 0;
`

const SiteRender = ({ point, onClose }) => {
  console.log('SiteRender -> point', point)
  return (
    <Container>
      <StyledPageHeader onBack={onClose} title={point.name} />
      SiteRender
    </Container>
  )
}

export default SiteRender
