import React from 'react'
import { FilterProvider } from '~/common/contexts/FilterContext'
import '~/common/prototypes/capitalize'
const Providers = ({ children }) => <FilterProvider>{children}</FilterProvider>

export default Providers
