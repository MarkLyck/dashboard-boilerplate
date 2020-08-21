import React from 'react'
import { Table, Edit, Create } from './default'
import { fields as siteFields } from './Site'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface resourceType {
  name: string
  fields: any[]
  Icon: () => JSX.Element
  List?: any
  Edit?: any
  Create?: any
}

export const resources: resourceType[] = [
  { name: 'site', fields: siteFields, Icon: () => <FontAwesomeIcon icon={['fad', 'map-marked-alt']} /> },
  { name: 'company', fields: [], Icon: () => <FontAwesomeIcon icon={['fad', 'building']} /> },
  { name: 'captive_portal_v3', fields: [], Icon: () => <FontAwesomeIcon icon={['fad', 'browser']} /> },
  { name: 'device_v3', fields: [], Icon: () => <FontAwesomeIcon icon={['fad', 'router']} /> },
  { name: 'probe', fields: [], Icon: () => <FontAwesomeIcon icon={['fad', 'monitor-heart-rate']} /> },
  { name: 'dns_service', fields: [], Icon: () => <FontAwesomeIcon icon={['fad', 'server']} /> },
  { name: 'service_firewall', fields: [], Icon: () => <FontAwesomeIcon icon={['fad', 'shield-virus']} /> },
  { name: 'wifi_service_v3', fields: [], Icon: () => <FontAwesomeIcon icon={['fad', 'wifi']} /> },
].map((resource: resourceType) => ({
  ...resource,
  Edit: resource.Edit ? resource.Edit : Edit,
  Create: resource.Create ? resource.Create : Create,
  List: Table,
}))

export const resourceMap = resources.reduce((acc, curr) => {
  acc[curr.name] = curr
  return acc
}, {})
