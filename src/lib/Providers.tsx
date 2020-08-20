import React from 'react'
import { FilterProvider } from '~/common/contexts/FilterContext'

const Providers = ({ children }) => <FilterProvider>{children}</FilterProvider>

export default Providers
