import React from 'react'
import { Space } from 'antd'
import { useRouter } from 'next/router'
import { Resources } from './resources'

const Resource = ({ propResource }) => {
  const router = useRouter()
  const resource = router ? router.query.resource : propResource

  const ResourceComponent = Resources[propResource ? propResource : String(resource)]
  if (!ResourceComponent) return <div>resource not found</div>

  return (
    <Space direction="vertical">
      <ResourceComponent />
    </Space>
  )
}

export default Resource
