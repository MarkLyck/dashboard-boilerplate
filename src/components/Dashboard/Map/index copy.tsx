import React from 'react'
import styled from 'styled'
import { isBrowser } from '~/common/utils/featureTests'

const LoadingError = () => <div>Error loading Map</div>
let Map = LoadingError

if (isBrowser) Map = require('./Map').default

const StyledMap = styled(Map)`
  width: 100%;
`

export default StyledMap
