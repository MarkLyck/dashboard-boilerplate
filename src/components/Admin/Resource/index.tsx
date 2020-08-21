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
  const resource = router ? router.query.resource : propResource

  const List = resourceMap[resource].List

  return (
    <StyledSpace>
      <Navigation resource={resource} />
      {List ? <List resource={resource} fields={resourceMap[resource].fields} /> : <NotFound />}
    </StyledSpace>
  )
}

export default Resource
