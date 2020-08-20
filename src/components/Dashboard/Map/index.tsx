import React from 'react'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./Map'), { ssr: false })

const DynamicMap = (props) => <DynamicComponent {...props} />

export default DynamicMap
