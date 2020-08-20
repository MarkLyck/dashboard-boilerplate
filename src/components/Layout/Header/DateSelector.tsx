import React, { useContext } from 'react'
import { filterContext } from '~/common/contexts'

const DateSelector = () => {
  const { filter, setFilter } = useContext(filterContext)
  console.log('DateSelector -> filter', filter)

  return <button onClick={() => setFilter({ test: '123' })}>date</button>
}

export default DateSelector
