import React from 'react'
import styled from 'styled'

import { useRouter } from 'next/router'
import { ResourceMap } from './resources'
import Navigation from './Navigation'
import NotFound from './NotFound'

const StyledSpace = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const Resource = ({ propResource }) => {
  const router = useRouter()
  const resource = router ? router.query.resource : propResource

  const ResourceComponent = ResourceMap[propResource ? propResource : String(resource)]

  return (
    <StyledSpace>
      <Navigation resource={resource} />
      {ResourceComponent ? <ResourceComponent resource={resource} /> : <NotFound />}
    </StyledSpace>
  )
}

export default Resource
