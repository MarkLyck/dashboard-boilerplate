import React from 'react'
import styled from 'styled'
import { useRouter } from 'next/router'
import { ResourceMap } from './resources'
import Navigation from './Navigation'

const StyledSpace = styled.div`
  display: flex;
  width: 100%;
`

const Resource = ({ propResource }) => {
  const router = useRouter()
  const resource = router ? router.query.resource : propResource

  const ResourceComponent = ResourceMap[propResource ? propResource : String(resource)]

  return (
    <StyledSpace>
      <Navigation />
      {ResourceComponent ? <ResourceComponent resource={resource} /> : <div>resource not found</div>}
    </StyledSpace>
  )
}

export default Resource
