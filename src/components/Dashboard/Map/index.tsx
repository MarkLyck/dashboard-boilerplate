import React from 'react'
import dynamic from 'next/dynamic'
export { default as MapContainer } from './MapContainer'

const DynamicComponent = dynamic(() => import('./Map'), { ssr: false })

const DynamicMap = (props: any) => <DynamicComponent {...props} />

export default DynamicMap
