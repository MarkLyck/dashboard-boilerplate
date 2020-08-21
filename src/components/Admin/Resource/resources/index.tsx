import React from 'react'
import { default as site } from './Site/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const resources = [
  { name: 'site', Icon: () => <FontAwesomeIcon icon={['fad', 'map-marked-alt']} /> },
  { name: 'company', Icon: () => <FontAwesomeIcon icon={['fad', 'building']} /> },
  { name: 'captive_portal_v3', Icon: () => <FontAwesomeIcon icon={['fad', 'browser']} /> },
  { name: 'device_v3', Icon: () => <FontAwesomeIcon icon={['fad', 'router']} /> },
  { name: 'probe', Icon: () => <FontAwesomeIcon icon={['fad', 'monitor-heart-rate']} /> },
  { name: 'dns_service', Icon: () => <FontAwesomeIcon icon={['fad', 'server']} /> },
  { name: 'service_firewall', Icon: () => <FontAwesomeIcon icon={['fad', 'shield-virus']} /> },
  { name: 'wifi_service_v3', Icon: () => <FontAwesomeIcon icon={['fad', 'wifi']} /> },
]

export const ResourceMap = {
  site,
}
