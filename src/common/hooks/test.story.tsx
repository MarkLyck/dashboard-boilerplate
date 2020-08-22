import React from 'react'
import { useQuery, useLazyQuery } from './index'

export default {
  title: 'test',
}

export const test = () => {
  const [loadData, { called, data, loading, error }] = useLazyQuery({
    resource: 'site',
  })

  console.log('test -> called', called)
  console.log('test -> data', data)
  console.log('test -> error', error)
  console.log('test -> loading', loading)
  console.log('test')

  const onClick = () => {
    loadData()
  }

  return (
    <div>
      <button onClick={onClick}>TEST</button>
    </div>
  )
}
