import React from 'react'
import styled from 'styled'
import { Space } from 'antd'
import { useRouter } from 'next/router'
import { Resources } from './resources'

const StyledSpace = styled(Space)`
  width: 100%;
`

const Resource = ({ propResource }) => {
  const router = useRouter()
  const resource = router ? router.query.resource : propResource

  const ResourceComponent = Resources[propResource ? propResource : String(resource)]
  if (!ResourceComponent) return <div>resource not found</div>

  return (
    <StyledSpace direction="vertical">
      <ResourceComponent />
    </StyledSpace>
  )
}

export default Resource
