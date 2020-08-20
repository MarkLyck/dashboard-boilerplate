import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./Map'), { ssr: false })

const DynamicMap = () => <DynamicComponent />

export default DynamicMap
