import React from 'react'
import styled from 'styled'

import { useRouter } from 'next/router'
import { resourceMap } from './resources'
import Navigation from './Navigation'
import NotFound from './NotFound'

const StyledSpace = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const Resource = ({ propResource }) => {
  const router = useRouter()
  const resourceName = router ? router.query.resource : propResource

  const resource = resourceMap[resourceName]

  if (!resource) return <NotFound />

  const List = resource.List

  return (
    <StyledSpace>
      <Navigation resource={resource} />
      <List resource={resource} />
    </StyledSpace>
  )
}

export default Resource
